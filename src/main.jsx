import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import { Home, About, Contact, User, Github, GithubInfo } from './components'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userID' element={<User />} />
      <Route
        loader={GithubInfo}
        path='github'
        element={<Github />} />
     </Route>
  )
)

createRoot(document.getElementById('root')).render(
 <StrictMode>
  <RouterProvider router={router} />
 </StrictMode>
)
