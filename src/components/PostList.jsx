
import PostItem from "./PostItem";


export default function PostList({posts, children, remove}) {

    // если постов нет выводим заглушку
    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Посты не найдены
            </h1>
        )
    }

    return (
        <>        
            <h1 style={{textAlign: 'center'}}>
                {children}
            </h1>
                {posts.map((post, index) => 
                    <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
            )}
        </>
    )
}