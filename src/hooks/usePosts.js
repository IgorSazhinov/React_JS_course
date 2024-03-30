import { useMemo } from "react"

// сортирую массив по полученному типу сортировки. Если тип сортировки не задан, то возвращаю список постов.
export function useSortedPost(posts, sort) {  
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts
    }, [posts, sort])

    return sortedPosts
}

// поиск по названию или описанию. сравниваю каждый пост с введенным значением в поле MyInput
export default function usePosts(posts, sort, query) {
    const sortedPosts = useSortedPost(posts, sort)

    const sortedAndSearchedPosts = useMemo(() => {
        const endSortedPost = []
        sortedPosts.forEach(post => {
            if (post.title.toLowerCase().includes(query.toLowerCase()) || post.body.toLowerCase().includes(query.toLowerCase())) {
                    endSortedPost.push(post)
                } 
            })
            return endSortedPost
    }, [query, sortedPosts])

    return sortedAndSearchedPosts
}