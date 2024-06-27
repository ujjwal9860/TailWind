import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './features/Home'
import About from './features/About'
import Contact from './features/Contact';
import Child1 from './features/Child1';
import Child2 from './features/Child2';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      // { path: 'child1', element: <Child1 /> },
      // hamile child1 lai nai home page garna index true gareko
      { index: true, element: <Child1 /> },
      { path: 'child2', element: <Child2 /> },
    ]
  },
  {
    path: 'about',
    element: <About />
  },
  {
    path: 'contact',
    element: <Contact />
  }
]);

const App = () => {

  return <RouterProvider router={router} />
}

export default App
