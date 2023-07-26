import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createHashRouter, RouterProvider} from 'react-router-dom'

import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import ErrorPage from './pages/Errorpage.jsx'
import History from './pages/History.jsx'

const router = createHashRouter([
  {
    path:'/',
    element:<App />,
    errorElement:<ErrorPage />,
    children: [
      {
        path:'/',
        element:<Home />
      },
      {
        path:'projects',
        element:<Projects />
      },
      {
        path:'contact',
        element:<Contact />
      },
      {
        path:'history',
        element:<History />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
