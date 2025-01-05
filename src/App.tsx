import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import useLenisScroll from './hooks/lenis'
import { Home } from './pages/home'
import Layout from './layout';
import { AboutMe } from './pages/aboutMe';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/aboutme',
        element:<AboutMe/>
      }
    ]
  }
])


function App() {

  useLenisScroll();

  return (
  <>
  <RouterProvider router={router}/>
  </>
  )
}

export default App
