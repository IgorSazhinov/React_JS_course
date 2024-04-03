import MyButton from "./UI/button/MyButton";


export default function PostItem({post, remove}) {

    return (
        <div className="post">
            <div className="post__content" style={{marginRight: '5px'}}>
                <strong>{post.id}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__btns" style={{flexShrink: '0'}}>
                <MyButton onClick={() => remove(post)}>Удалить пост</MyButton>
            </div>
        </div>
    )
}

