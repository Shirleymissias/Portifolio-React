import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import About from '../views/AboutMe/AboutMe'
import Banner from '../views/Banner/Banner'
import Home from '../views/Home/index'
import Footer from '../views/Footer/Footer'
import ErrorPage from '../components/Error/Error'
import MyServices from '../views/MyServices/MyServices'
import Portifolio from '../views/Portifolio'
import Contact from '../views/Contact'
import MySkills from '../views/MySkills'
import DashBoard from '../views/Dashboard'

const router = createBrowserRouter ([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
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
            },
            {
                path:'myServices',
                element: <MyServices />
            },
            {
                path:'mySkills',
                element: <MySkills />
            },
            {
                path: '/footer',
                element: <Footer />
            },
            {
                path: 'portifolio',
                element: <Portifolio />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: '/DashBoard',
                element: <DashBoard />
            }
        ]
    }
])


export default router