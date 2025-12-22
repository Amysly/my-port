import React, { useEffect } from 'react';
import { createBrowserRouter, 
    createRoutesFromElements,
     RouterProvider, 
     Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Homepage from './components/.Homepage';
import MainLayout from './layouts/MainLayout';
import About from './Pages/About';
import Forms from './Pages/Forms';
import Project from './Pages/Project';
import NotFound from './Pages/NotFound';
import Skills from './Pages/Skills';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Homepage />} />
      <Route path='/about-me' element={<About />} />
      <Route path ='/skills' element ={<Skills/>}/>
      <Route path='/projects' element={<Project />} />
      <Route path='/contact' element={<Forms />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
