import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Contact from "../Contact";
import DashBoard from "../Dashboard";
import MyServices from "../MyServices/MyServices";
import MySkills from "../MySkills";
import Portifolio from "../Portifolio";


export default function Home() {
   return( 
    <>
        <Banner />
        <AboutMe />
        <MyServices />
        <DashBoard />
        <MySkills/>
        <Portifolio />
        <Contact />
    </>
   )
}