import { useState } from 'react'
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
  const [salectedSort, setSalectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  } 

  const sortPosts = (sort) => {
    setSalectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }


  return (
    <div className="App">
      <PostForm create={createPost} />

      <hr style={{margin: '15px 0'}} />
      
      <div>
        <MyInput 
          placeholder='Поиск...'
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <MySelect 
          defaultValue = 'Сортировка по' 
          options = {[
            {value: 'title', name: 'Названию'},
            {value: 'body', name: 'Описанию'}
          ]}
          value = {salectedSort}
          onChange = {sortPosts}
        />
      </div>


      {posts.length
        ? <PostList remove={removePost} posts={posts}>Список постов</PostList>
        : <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
      }
    </div>
  )
}
