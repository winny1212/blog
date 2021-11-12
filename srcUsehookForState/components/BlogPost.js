import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router'
import Moment from 'react-moment';
import { capitalize } from '../utils/stringUtils';
import { getBlogPost } from '../services/blogPostServices';

export const BlogPost = (props) => {
   const [post,setPost] = useState(null);
   const [loading,setLoading] = useState(true);
   
   const {id} =useParams();
//    console.log(useParams()) {id:"1"}

   useEffect(()=>{
     getBlogPost(id)
     .then(post => setPost(post))
     .catch(error => console.log(error))
     .finally(setLoading(false))
   },[id])

   if(!post) {
    return loading ? (<p>Loading</p>):  (<p>Ooops, couldn't find your post</p>)
}



return(
    
     
            <>
            <h1>{post.title}</h1>
            <Moment fromNow>{post.updated_at}</Moment>
            <h3>{capitalize(post.category)}</h3>
            <p>{post.content}</p>
            </>
     
)   
}

