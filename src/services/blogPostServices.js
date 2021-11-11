import posts from '../data/post';

export const getBlogPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(posts)
        }, 500)
    })
}



