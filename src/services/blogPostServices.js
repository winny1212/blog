import posts from '../data/post';

export const getBlogPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(posts)
        }, 500)
    })
}

export const getBlogPost = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(posts.find(post.id === id))
        }, 500)
    })
}



