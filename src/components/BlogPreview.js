import React from 'react'
import { Card } from '../styled-components'
import {capitalize, trunctcate } from '../utils/stringUtils';
import Moment from 'react-moment';

export const BlogPreview = (props) => {
    const {post} = props
      return(
         <Card>
              <h4>{capitalize(post.category)}</h4>
                <Moment fromNow>{post.updated_at}</Moment>
                <p>{trunctcate(post.content, 100)}</p>
         </Card>
      )
}
