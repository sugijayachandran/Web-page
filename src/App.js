import './App.css';
import Login from './Login';
import Home from './Home';
import Contact from './Contact';
import * as React from "react";
import Register from './Register';
import About from './About';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const routerConfig = createBrowserRouter(
[
  {path:'/home',element:<Home/>},
  {path:'/login',element:<Login/>},
  {path:'/contact',element:<Contact/>},
  {path:'/register',element:<Register/>},
  {path:'/about',element:<About/>}
   ]
);
function App() {
  return (
    <div>
        <RouterProvider router ={routerConfig}/>
    </div>
  );
}

export default App;
