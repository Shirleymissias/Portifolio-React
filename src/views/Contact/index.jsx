import "../../styles.globals.css";
import "./style.css"
import ImgsComponents from "../../components/ImgsComponents/ImgsComponents";
import Phone from "../../assets/img/phone.svg"
import Email from "../../assets/img/email2.svg"
import Send from "../../assets/img/send.svg"


export default function Contact() {
    return (
        <>
            <div className="conatctRoot">
                <h1>Contact</h1>
                <div className="contactInfo">
                    <div>
                        <ImgsComponents src={Phone} alt="ContactPhone" className="ContactImg" />
                        <p>+8801863-931220</p>
                        <p>+8801567-953483</p>        
                    </div>
                    <div>
                        <ImgsComponents src={Email} alt="ContactEmail" className="ContactImg" />
                        <p>mdriead.bd@gmail.com</p>       
                    </div>
                    <div>
                        <ImgsComponents src={Send} alt="ContactEmail" className="ContactImg" />
                        <p>Zirabo, Ashulia, Savar, Dhaka</p>   
                    </div>
                </div>
                <div>
                    <form action="">
                        <input type="text" placeholder="Full Name" className="contactText" />
                        <input type="email" placeholder="Email Adreess" className="contactText" />
                        <input type="text" placeholder="Phone Number" className="contactNum"  />
                        <input type="text" placeholder="Subject" className="contactNum"  />
                        <input type="text" placeholder="Your Message" className="contactMessage"  />
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}