import React, { useEffect } from 'react'
import Moment from 'react-moment';
import { capitalize } from '../utils/stringUtils';
import { getBlogPost } from '../services/blogPostServices';

export const BlogPost = (props) => {
   const [post,setPost] = useState(null);
   const [loading,setLoading] = useState(true);

   useEffect(()=>{
     getBlogPost(id)
     .then(post => setPost(post))
     .catch(error => console.log(error))
     .finally(setLoading(false))
   },[])

    if(!post){
        return (
            <p>Oops, couldn't find your post</p>
        )
    }
    return (
        <>
         <h1>{post.title}</h1>
         
         <h3>{capitalize(post.category)}</h3>
         <Moment fromNow>{post.updated_at}</Moment>
         <p>{post.content}</p>
        </>
    )
}

