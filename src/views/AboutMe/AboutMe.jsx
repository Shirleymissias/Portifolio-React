import AbouteMe from "../../assets/img/about.svg"
import ImgsComponents from "../../components/ImgsComponents/ImgsComponents"
import "../../styles.globals.css"
import Button from "../../components/Button/Button"
import "./styles.css"



export default function AboutMe () {
    return(
        <>
            <div className="about">
                <h1>About <span className="Me">Me</span></h1>

                <div className="aboutContent">                
                    <ImgsComponents src={AbouteMe} alt="AboutMe" />    

                    <div className="aboutText">            
                        <h2>Frontend Developer & Graphic Designer</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At reiciendis, quas voluptatum facere quam iusto itaque sapiente dolor provident aspernatur unde, suscipit illum, velit similique animi iste corporis repellendus veritatis minus voluptas. Sunt, eligendi. Praesentium explicabo facere quo ad earum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At reiciendis, quas voluptatum facere quam iusto itaque sapiente dolor provident.
                        </p>
                        <Button text="Read More..." className="btnAbout" />
                    </div>

                </div>

            </div> 
        </>
    )
}