import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";


export default function PostList({posts, children, remove}) {
    
    // если постов нет — выводим заглушку
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
            <TransitionGroup>
                {posts.map((post, index) => 
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem remove={remove} number={index + 1} post={post}/>
                    </CSSTransition>
                )}  
            </TransitionGroup>
        </>
    )
}