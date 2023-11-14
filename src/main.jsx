// Remember to npm i react-router-dom, this is an npm package that lets you do dynamic routing in a web app
// https://www.geeksforgeeks.org/what-is-react-router-dom/
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import Resume from './components/Resume.jsx';

// router is the parent component that stores all the other components; everything within will be part of the routing functionality
// within the createBrowserRouter, we are going to create properties within this object
// remember to use Outlet to export the children of this router
const router = createBrowserRouter([
  { // start of making an object
    path: "/", // path = property, "/" = value
    element: <App />, // Rendering the element <App />
    errorElement: <h1>Error</h1>, // temp placeholder until have error (404 page or similar custom page)
    children: [ // array of children to this path
      { // more objects
        index: true, // Saying we are still at the BASE route, which is "/"
        element: <Home /> // Placeholder to 'Home'
      },
      {
        path: "portfolio", // Don't need a "/" before portfolio, it's a child of the parent "/"
        element: <Portfolio /> // Placeholder
      },
      {
        path: "contact", 
        element: <Contact /> // Placeholder
      },
      {
        path: "resume", 
        element: <Resume /> // Placeholder
      },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = { router } /> // Calling self entitled property, we have to specify the value of our properties
)
