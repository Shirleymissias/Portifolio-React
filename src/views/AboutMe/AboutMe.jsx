import AbouteMe from "../../assets/img/about.svg"
import ImgsComponents from "../../components/ImgsComponents/ImgsComponents"
import "../../styles.globals.css"
import Button from "../../components/Button/Button"
import "./styles.css"
import { useEffect, useState } from "react"



export default function AboutMe () {

    const [ aboutInfo, setAboutInfo] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:3000/about')
        .then((res) => {
            return res.json();
    })
    .then((data) => {
        console.log(data);
        setAboutInfo(data)
    })
})



    return(
        <>
            <div className="about">
                <h1>About <span className="Me">Me</span></h1>

                <div className="aboutContent">                
                    <ImgsComponents src={AbouteMe} alt="AboutMe" />    

                    <div className="aboutText">            
                        <h2>{aboutInfo.title}</h2>
                        <p> {aboutInfo.paragraphOne}</p> 
                        <p> {aboutInfo.paragrapTwo}</p>
                        <Button text="Read More..." className="btnAbout" />
                    </div>

                </div>

            </div> 
        </>
    )
}