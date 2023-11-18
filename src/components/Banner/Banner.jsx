import ImgsComponents from "../../ImgsComponents/ImgsComponents";
import ImgBanner from "../../img/banner2.webp"
import RedeSocial from "../../img/Group16.png"
import "./styles.css"


export default function Banner (){
    return(
        <>
            <div className="banner"> 
                <ImgsComponents src={ImgBanner} alt="Imagem" />
                <div>
                    <p>Hi, It's me</p>
                    <h1>MD RIEAD MIA</h1>
                    <h3>And I'm a Frontend Developer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosdolorum ullam molestias autem deleniti iure earum!</p>
                    <ImgsComponents src={RedeSocial} alt="Redes Sociais" />
                </div>

            </div>    
        </>
    )
}