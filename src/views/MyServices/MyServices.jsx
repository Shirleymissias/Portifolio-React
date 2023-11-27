import CardService from "../../components/Cards";
import ImagPc from "../../assets/img/computador.svg";


export default function MyServices() {
    return (
        <>
            <h1>My <span>Services</span></h1>
            <CardService src={ImagPc}  alt="Serviço de Pcs" />
        </>
    )
}