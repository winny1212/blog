import React from 'react'
import Moment from 'react-moment';
import { capitalize } from '../utils/stringUtils';

export const BlogPost = (props) => {
    const {post} = props
    return (
        <>
         <h1>{post.title}</h1>
         <Moment fromNow>{post.updated_at}</Moment>
         <h3>{capitalize(post.category)}</h3>
         <p>{post.updated_at.toLocalString}</p>
         <p>{post.content}</p>
        </>
    )
}

