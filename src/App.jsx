import Header from "./views/Header/Header";
import { Outlet, Link } from "react-router-dom";

export default function App() { 

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

