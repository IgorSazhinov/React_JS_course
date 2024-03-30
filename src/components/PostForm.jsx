import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";


export default function PostForm({create, visible}) {
    const [post, setPost] = useState({title: '', body: ''})
    const focusRef = useRef(null)

    // добавляем фокус на первый элемент, при появлении модалки
    useEffect(() => {
        focusRef.current.children[0].focus()
    }, [visible])

    const addNewPost = (e) => {
        // убираю обновление страницы при создании нового поста
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({
          title: '',
          body: ''
        })
    }

    return (
        <form ref={focusRef}>
            <MyInput 
                value={post.title} 
                onChange={ e => setPost({...post, title: e.target.value})}
                type='text' 
                placeholder='Название поста'
            />
            <MyInput
                value={post.body} 
                onChange={ e => setPost({...post, body: e.target.value})}
                type='text' 
                placeholder='Описание поста' 
            />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
    )
}