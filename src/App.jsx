import { useMemo, useState } from 'react'
import PostFilter from './components/PostFilter'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import MyInput from './components/UI/input/MyInput'
import MySelect from './components/UI/select/MySelect'
import './styles/App.css'


export default function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScrypt', body: ' 1 JavaScript - это язык программирования'},
    {id: 2, title: 'Python', body: ' 4 Python - это язык программирования'},
    {id: 3, title: 'C++', body: ' 3 C++ - это язык программирования'}
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})

  // сортирую массив по полученному типу сортировки. Если тип сортировки не задан, то возвращаю список постов.
  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [posts, filter.sort])

  // поиск по названию или описанию. сравниваю каждый пост с введенным значением в поле MyInput
  const sortedAndSearchedPosts = useMemo(() => {
    const endSortedPost = []
    sortedPosts.forEach(post => {
      if (post.title.toLowerCase().includes(filter.query.toLowerCase()) || post.body.toLowerCase().includes(filter.query.toLowerCase())) {
        endSortedPost.push(post)
      } 
    })
    return endSortedPost
  }, [filter.query, sortedPosts])

  // создаю пост. данные получаю из PostForm. разворачиваю в существующий масссив
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  // удаляю пост. данные получаю из PostList. получаю новый массив без записи полученного поста
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  } 

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px 0'}} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} posts={sortedAndSearchedPosts}>Список постов</PostList>
    </div>
  )
}
