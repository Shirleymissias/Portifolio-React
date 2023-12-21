import CardService from "../../components/Cards";
import ImagPc from "../../assets/img/computador.svg";
import CellPhone from "../../assets/img/celular.svg";
import Graphic from "../../assets/img/grafico.svg";
import "../../styles.globals.css";
import "./style.css"


export default function MyServices() {
    return (
      <>
        <div className="roott">
          <h1 className="title">
            My <span>Services</span>
          </h1>

          <div className="cardsMy">
            <CardService
              src={ImagPc}
              alt="Serviço de Pcs"
              title="Web Development"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
            />

            <CardService
              src={CellPhone}
              alt="Serviço de Pcs"
              title="Apps Development"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
            />
            <CardService
              src={Graphic}
              alt="Serviço de Pcs"
              title="Digital Marketing"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
            />
          </div>
        </div>
      </>
    );
}