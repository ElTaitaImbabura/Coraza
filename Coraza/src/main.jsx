import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
// import Protected from './store/authSlide.js'
import Home from './components/Home.jsx'
import store from './store/reduxstore.js'
import Studio from './components/Studio.jsx'
// import Soci from './components/Soci.jsx'
// import Contatti from './components/Contatti.jsx'
// import Protected from './components/AuthLayout.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/studio",
        element: <Studio />
      },
      // {
      //   path: "/soci",
      //   element: <Soci />
      // },
      // {
      //   path: "/contatti",
      //   element: <Contatti />
      // }
    ]
  }
])

// This part creates a React root in the HTML file, targeting the <div> with id="root". This is where the
// entire React application will be mounted
// The render method takes the JSX to render the React component tree.
ReactDOM.createRoot(document.getElementById('root')).render(
  // here we wrap the RouterProvider using a Provider that introduces the store as a prop 
  <React.StrictMode>
    {/* This is from react-redux. The Provider component wraps the entire app and makes the Redux store 
    available to all components in the app via the React Context API. Any component can access the 
    global state from this store. */}
    {/* <Provider store={store}> */}
    <Provider store={store}>
    {/* This is from react-router-dom. The RouterProvider is responsible for rendering the app’s routing 
    structure. It takes the router configuration defined earlier and ensures that components are rendered 
    based on the current URL. */}
      < RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
