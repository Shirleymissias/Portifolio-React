import ImgsComponents from "../../ImgsComponents/ImgsComponents"
import LinkHeader from "./link"
import Logo from "../../img/Logo.png"
import Button from "../Button/Button"
import "./style.css"


export default function Header() {
    return (
      <>
        <div className="header">
          <ImgsComponents src={Logo} alt={"Logo da Empresa"} />
          <div className="menu">
            <LinkHeader rhef="#" text="Home" />
            <LinkHeader rhef="#" text="About Me" />
            <LinkHeader rhef="#" text="Services" />
            <LinkHeader rhef="#" text="Skils" />
            <LinkHeader rhef="#" text="Potifolio" />
            <LinkHeader rhef="#" text="Contacts" />
          </div>  
          
           <Button text="Login" />          
        </div>
      </>
    );
}