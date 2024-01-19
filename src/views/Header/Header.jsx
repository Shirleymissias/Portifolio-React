import ImgsComponents from "../../components/ImgsComponents/ImgsComponents"
//import LinkHeader from "../../components/Links/links"
import Logo from "../../assets/img/Logo.png"
import Button from "../../components/Button/Button"
import "./style.css"
import "../../styles.globals.css"
import { Link } from "react-router-dom"


export default function Header() {
    return (
      <>
        <div className="header">
          <ImgsComponents
            className="ImgsComponents"
            src={Logo}
            alt="Logo da Empresa"
          />

          <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/About">About Me</Link>
            <Link to="/myServices">Services</Link>
            <Link to="mySkills">Skills</Link>
            <Link to="/portifolio">Portifolio</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <Button className="headerButton" text="Hire Me" />
        </div>
      </>
    );
}

            // <LinkHeader href="#" text="Home" />
            // <LinkHeader href="#" text="About Me" />
            // <LinkHeader href="#" text="Services" />
            // <LinkHeader href="#" text="Skils" />
            // <LinkHeader href="#" text="Potifolio" />
            // <LinkHeader href="#" text="Contacts" />