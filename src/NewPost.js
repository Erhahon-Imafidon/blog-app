import React from 'react'
import { useState, useContext } from 'react'
import api from './api/posts'
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns';
import DataContext from './context/DataContext'



const NewPost = () => {
   const [postTitle, setPostTitle] = useState('');
   const [postBody, setPostBody] = useState('');
   const { posts, setPosts } = useContext(DataContext);
   const navigte = useNavigate()
    
   /* A function that submits a newPost post  */
   const handleSubmit = async (e) => {
      e.preventDefault();
      const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
      const datetime = format(new Date(), 'MMMM dd, yyyy pp');
      const newPost = { id, title: postTitle, datetime, body: postBody};
      try {
      const response = await api.post('/posts', newPost)
      const allPosts = [ ...posts, response.data ];
      setPosts(allPosts)
      setPostTitle('')
      setPostBody('')
      navigte('/');
  } catch (err) {
     console.log(`Error: ${err.message}`); 
  }
  }

  
    return (
    <main className='NewPost'>
       <h2>New Post</h2>
       <form className='newPostForm' onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input 
            type="text"
            id='postTitle'
            required
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody">Post:</label>
        <textarea  
           id="postBody"
           required
           value={postBody}
           onChange={(e) => setPostBody(e.target.value)}
        />
        <button type='submit' onClick={handleSubmit}>Submit</button>
       </form>
    </main>
  )
}

export default NewPost