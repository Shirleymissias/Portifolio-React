import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import About from '../views/AboutMe/AboutMe'
import Banner from '../views/Banner/Banner'
import Home from '../views/Home/index'

const router = createBrowserRouter ([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            } , 

            {
                path: '/banner',
                element: <Banner />
            } , 

            {
                path: '/about',
                element: <About />
            }
        ]
    }
])


export default router