import ImgsComponents from "../../ImgsComponents/ImgsComponents"
import LinkHeader from "./links"
import Logo from "../../img/Logo.png"
import Button from "../Button/Button"
import "./style.css"
import "../../styles.globals.css"


export default function Header() {
    return (
      <>
        <div className="header">
          <ImgsComponents className="ImgsComponents" src={Logo} alt="Logo da Empresa" />

          <div className="menu">
            <LinkHeader href="#" text="Home" />
            <LinkHeader href="#" text="About Me" />
            <LinkHeader href="#" text="Services" />
            <LinkHeader href="#" text="Skils" />
            <LinkHeader href="#" text="Potifolio" />
            <LinkHeader href="#" text="Contacts" />
          </div>  
          
          <Button className="headerButton" text="Hire Me" />          
        </div>
      </>
    );
}