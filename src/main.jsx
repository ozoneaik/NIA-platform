import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login.jsx'
import './assets/fonts/Sarabun/sarabun.css'
import AddPlot from './pages/AddPlot.jsx'
import Register from "./pages/Register.jsx";
import MapPlot from "./pages/MapPlot.jsx";


// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/Main.css'
import TestMap from "./pages/TestMap.jsx";


const router = createBrowserRouter([
    {
        path: "/", element: <Login />,
    },
    {
        path: '/login', element: <Login />,
    },
    {
        path: '/add-plot', element: <AddPlot/>
    },
    {
        path: '/register' ,element: <Register/>
    },
    {
        path: '/map-plot' ,element: <MapPlot/>
    },
    {
        path: '/test-map' ,element:<TestMap/>
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
