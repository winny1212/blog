import React, {useState,useEffect} from 'react';
import {BrowserRouter,Routes,Route, Navigate,Props} from 'react-router-dom';
import {createNewPost, getBlogPosts, getBlogPost} from "./services/blogPostServices";
import {GlobalStyle} from './styled-components/globalStyles'
import {BlogPosts} from './components/BlogPosts'
import {BlogPost} from './components/BlogPost'
import {NewBlogPost} from './components/NewBlogPost'

const App = () => {
  const [blogPosts,setBlogPosts] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    getBlogPosts()
      .then(posts=>{
        console.log(posts)
        setBlogPosts(posts)}
        )
      .catch(error=>console.log(error))
      .finally(()=>setLoading(false))

  },[])

  function addNewBlogPost(postObject){
    setLoading(true)
     createNewPost(postObject)
     .then(newPost=>setBlogPosts([...blogPosts,newPost]))
     .catch(error=>console.log(error))
     .finally(()=> setLoading(false) )
  }


  return (
    <>
      <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path = "/" element={<Navigate to="/posts" />} />
            <Route path="/posts" element={<BlogPosts loading={loading} posts={blogPosts}/>} />
            <Route path="/posts/new" element={<NewBlogPost  addNewBlogPost={addNewBlogPost} />} />
            <Route path="/posts/:id" element={<BlogPost />} />
          </Routes>
        </BrowserRouter>
    
    </>
  )}

export default App
