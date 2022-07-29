import React from 'react'
import Layout from './Layout'
import About from './About'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import Missing from './Missing'
import { Routes, Route } from 'react-router-dom'
import EditPost from './EditPost'


const App = () => {
    
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='post'>
          <Route index element={<NewPost />} />
          <Route path='/post/edit/:id' element={<EditPost />} />
          <Route path='/post/:id' element={<PostPage />} />
        </Route>
        <Route path='about' element={<About />} />
        <Route path='*' element={<Missing />} />
      </Route>
    </Routes>
  )
}

export default App