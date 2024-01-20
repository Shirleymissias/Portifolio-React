import ImgsComponents from "../../components/ImgsComponents/ImgsComponents"
import ImgBanner from "../../assets/img/banner2.webp"
import Facebook from "../../assets/img/facebook2.svg"
import Linkedin from "../../assets/img/linkedin.svg"
import GitHub from "../../assets/img/gitHub.svg"
import Instagran from "../../assets/img/instagram.svg"
import "./styles.css"
import "../../styles.globals.css"
import LinkHeader from "../../components/Links/links"
import Button from "../../components/Button/Button";
import { useState } from "react"
import { useEffect } from "react"


export default function Banner() {
    
    const [homeInfo, setHomeInfo] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:3000/Home')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setHomeInfo(data);
        });
    }, []);


    return (
        <>
            <div className="banner">

                <div className="bannerText">
                    <p>Hi, It's me</p>
                    <h1>{homeInfo.name}</h1>
                    <h3>And I'm a <span>{homeInfo.role}</span></h3>
                    <p>{homeInfo.info}</p>

                    <div className="bannerSocialMedia">
                        <LinkHeader href="#" text={<ImgsComponents src={Facebook} alt="Redes Sociais" />} />
                        <LinkHeader href="#" text={<ImgsComponents src={Linkedin} alt="Redes Sociais" />} />
                        <LinkHeader href="#" text={<ImgsComponents src={GitHub} alt="Redes Sociais" />} />
                        <LinkHeader href="#" text={<ImgsComponents src={Instagran} alt="Redes Sociais" />} />
                    </div>

                    <LinkHeader href="#" text={<Button className="bannerBTN" text="Download CV" />} />
                </div>

                <ImgsComponents className="ImgBaner" src={ImgBanner} alt="Imagem" />

            </div>
        </>
    )
}