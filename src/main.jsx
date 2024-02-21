import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './pages/About.jsx';
import Explore from './pages/Explore.jsx';
import NotePage from './pages/NotePage.jsx';
import Login from './components/[login]/Login.jsx';
import DataContext from './context/DataContext.jsx';
import SignUp from './components/[login]/SignUp.jsx';
import ImageSelector from './components/[login]/ImageSelector.jsx';
import SignIn from './pages/SignIn.jsx';
import UserNotes from './pages/UserNotes.jsx';
import AddNote from './pages/AddNote.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import UserProfile from './pages/UserProfile.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import CommentReviewPage from './pages/CommentReviewPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/notes",
        element:<UserNotes/>
      },
      {
        path:"/addnote",
        element:<AddNote/>
      },
      {
        path:"/notes/:day",
        element:<UserNotes/>
      },
      {
        path:"/explore",
        element:<Explore/>,
      },
      {
        path:"/explore/:userslug/:day",
        element:<NotePage/>
      },
      {
        path:"/profile",
        element:<UserProfile/>
      },
      {
        path:"/dashboard",
        element:<AdminDashboard/>,
        children:[
          {
            path:"comment",
            element:<CommentReviewPage/>
          },
          {
            path:"user",
            element:<AdminDashboard/>
          },
        ]
      },
      {
        path:"login",
        element:<Login/>,
      },
      {
        path:"signup",
        element:<SignIn/>,
        children:[
          {
            path:'/signup',
            element:<SignUp/>
          },
          {
            path:'/signup/userinfo',
            element:<ImageSelector/>
          }
        ]
      }
    ]
  },
  

  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataContext>
        <RouterProvider router={router} />
    </DataContext>
  </React.StrictMode>,
)
