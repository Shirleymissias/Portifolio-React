import ImgsComponents from "../../ImgsComponents/ImgsComponents";
import ImgBanner from "../../img/banner2.webp"
import Facebook from "../../img/facebook2.svg"
import Linkedin from "../../img/linkedin.svg"
import GitHub from "../../img/gitHub.svg"
import Instagran from "../../img/instagram.svg"
import "./styles.css"
import "../../styles.globals.css"
import LinkHeader from "../Header/links";
import Button from "../Button/Button";


export default function Banner (){
    return(
        <>
            <div className="banner"> 
                
                <div className="bannerText">
                    <p>Hi, It's me</p>
                    <h1>MD RIEAD MIA</h1>
                    <h3>And I'm a <span>Frontend Developer</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosdolorum ullam molestias autem deleniti iure earum!</p>

                    <div className="bannerSocialMedia">
                        <LinkHeader href="#" text={<><><ImgsComponents src={Facebook} alt="Redes Sociais" /></></>} />
                        <LinkHeader href="#" text={<><><ImgsComponents src={Linkedin} alt="Redes Sociais" /></></>} />
                        <LinkHeader href="#" text={<><><ImgsComponents src={GitHub} alt="Redes Sociais" /></></>} />
                        <LinkHeader href="#" text={<><><ImgsComponents src={Instagran} alt="Redes Sociais" /></></>} />
                    </div>

                    <LinkHeader href="#" text={<><><Button className="bannerBTN" text="Download CV"/></></>} /> 
                </div>
                
                <ImgsComponents className="ImgBaner" src={ImgBanner} alt="Imagem" />
                
            </div>    
        </>
    )
}