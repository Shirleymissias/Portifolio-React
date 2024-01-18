import "../../styles.globals.css";
import ImgsComponents from "../../components/ImgsComponents/ImgsComponents";
import porti01 from "../../assets/img/port1.svg"
import porti03 from "../../assets/img/port3.svg";
import porti04 from "../../assets/img/port4.svg";
import porti05 from "../../assets/img/port5.svg";
import porti06 from "../../assets/img/port6.svg";
import "./style.css"

// Como fazer um efeito de sobreposição de imagem simples 
// com HTML e CSS (hover effect), https://bonstutoriais.com.br/como-fazer-um-efeito-de-sobreposicao-de-imagem-simples-com-html-e-css/

export default function Portifolio() {
  return (
    <>
      <div className="portRoot">
        <h1 className="portTitle">Portifolio</h1>
        <div className="GroupImgs">
          <ImgsComponents src={porti01} alt="Portifolio-IMG01"  className="portimg"/>
          <ImgsComponents src={porti04} alt="Portifolio-IMG01" className="portimg" />
          <ImgsComponents src={porti03} alt="Portifolio-IMG01" className="portimg" />
          <ImgsComponents src={porti04} alt="Portifolio-IMG01" className="portimg" />
          <ImgsComponents src={porti05} alt="Portifolio-IMG01" className="portimg" />
          <ImgsComponents src={porti06} alt="Portifolio-IMG01" className="portimg" />
          <ImgsComponents src={porti01} alt="Portifolio-IMG01" className="portimg" />
          <ImgsComponents src={porti06} alt="Portifolio-IMG01" className="portimg" />
        </div>
      </div>
    </>
  );
}