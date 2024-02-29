import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen.jsx'
import AboutUsPage from './pages/AboutUsPage.jsx'

const route = createBrowserRouter([
    {
      path: "/",
      element:  <App />,
      children: [
        {
          path: "/",
          element: <HomeScreen />,
        },
        {
          path: "/aboutus",
          element: <AboutUsPage />
        }
      ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
