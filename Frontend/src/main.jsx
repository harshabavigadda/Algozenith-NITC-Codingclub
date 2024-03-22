import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home'
import About from './components/About/'
import Opportunities from './components/Opportunities/Opportunities.jsx'
import Editorials from './components/Editorials/Editorials.jsx'
import Potd from './components/Potd/Potd.jsx'
import JobPosts from './components/JobPosts/index.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />}/>
      <Route path='home' element={<Home/>}/>
      <Route path='/opportunities' element={< JobPosts/>}/>
      <Route path='/potd' element={<Potd/>}/>
      <Route path='/editorials' element={<Editorials />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<div>Not Found</div>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
