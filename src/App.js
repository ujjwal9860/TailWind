import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './features/Home'
import About from './features/About'
import Contact from './features/Contact';
import RootLayout from './ui/RootLayout';
import NotFound from './ui/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      // { path: 'child1', element: <Child1 /> },
      // hamile child1 lai nai home page garna index true gareko
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ]
  },
]);

const App = () => {

  return <RouterProvider router={router} />
}

export default App
