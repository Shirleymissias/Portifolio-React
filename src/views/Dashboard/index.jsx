import "../../styles.globals.css"
import "../Contact/style.css"
import app from "../../App"
import { useEffect, useState } from "react";





export default function DashBoard() {

  const [dataForm, setDataForm] = useState ({
    language: "",
    percentage: "",
  })
  
  const inputHandle = (event) => {
    setDataForm({...dataForm, [event.target.name]: event.target.value })
    
  }

  const addLanguage = (event) => {
    event.preventDefault()
    console.log(dataForm)
    fetch("http://localhost:3000/programming-languages", {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForm),
    })

    .then((response) => response.json())
    .then((response) => {
      console.log(response)
    })
  }


    return (
      <>  
      <div className="conatctRoot"> 
        <h3>Cadastrar linguagem de programação</h3>
        <div className="contactForm">
          <form action="">
            <div className="input-form">
              <input type="text" name="language" placeholder="Language" onChange={inputHandle} className="contactText"/>
            </div>

            <div className="input-form">
              <input type="text" name="percentage" placeholder="Percentege" onChange={inputHandle} className="contactText"/>
            </div>

            <div className="input-form">
              <button className="add" onClick={addLanguage}>Cadastrar</button>
            </div>
          </form>
        </div>
        </div>     
      </>
    );
  }