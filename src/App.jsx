import Header from "./views/Header/Header";
import Footer from "./views/Footer/Footer";
import { Outlet } from "react-router-dom";


export default function App() { 

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

