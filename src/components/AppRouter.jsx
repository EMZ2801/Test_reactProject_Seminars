import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Posts from '../pages/Posts'
import Error from '../pages/Error'
import PostIdPage from './PostIdPage'

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/about" element={<About />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/posts/:id" element={<PostIdPage />} />
        <Route path="/" element={<Posts />} />
        <Route path="*" element={<Navigate to="/error" />} />
        <Route path="/error" element={<Error/>} />
      </Routes>
  )
}

export default AppRouter
