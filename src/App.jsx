import { useMemo, useState } from 'react'
import PostFilter from './components/PostFilter'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import './styles/App.css'
import MyModal from './components/UI/MyModal/MyModal'
import MyButton from './components/UI/button/MyButton'
import usePost from './hooks/usePosts'
import { useEffect } from 'react'
import PostService from './API/PostService'
import Loader from './components/UI/Loader/Loader'
import { UseFetching } from './hooks/useFetching'

export default function App() {
  const [posts, setPosts] = useState([])
  const [modal, setModal] = useState(false)
  const [filter, setFilter] = useState({sort: '', query: ''})
  const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.query)
  
  
  const [fetchPosts, isPostLoading, postError] = UseFetching( async () => {
    const posts = await PostService.getAll()
    setPosts(posts)
  })

  useEffect(() => {
    fetchPosts()
  }, [])

  // создаю пост. данные получаю из PostForm. разворачиваю в существующий масссив
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  // удаляю пост. данные получаю из PostList. получаю новый массив без записи полученного поста
  const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: '15px'}} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} visible={modal}/>
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />

      {postError &&
        <h1>Произошла ошибка {postError}</h1>
      } 

      {isPostLoading
        ? <Loader />
        : <PostList remove={removePost} posts={sortedAndSearchedPosts}>Список постов</PostList>
      }
      
    </div>
  )
}
