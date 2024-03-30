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

export default function App() {
  const [posts, setPosts] = useState([
    // {id: 1, title: 'JavaScrypt', body: ' 1 JavaScript - это язык программирования'},
    // {id: 2, title: 'Python', body: ' 4 Python - это язык программирования'},
    // {id: 3, title: 'C++', body: ' 3 C++ - это язык программирования'}
  ])
  const [modal, setModal] = useState(false)
  const [filter, setFilter] = useState({sort: '', query: ''})
  const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.query)

  useEffect( () => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    const posts = await PostService.getAll()
    setPosts(posts)
  }

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
      <PostList remove={removePost} posts={sortedAndSearchedPosts}>Список постов</PostList>
    </div>
  )
}
