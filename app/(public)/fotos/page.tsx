import Image from "next/image";
import Link from "next/link";
import acomodacao1 from "./excursao.png"
import descansar from "./descanso.png"
import reservar from "./reserve.png"
import camaking from "./king.png"
import confortox from "./conforto.png"
import localizados from "./localizado.png"
import localizacao from "./grupoviagens.png"
import recepcao from "./recepcao.png"
export default function Fotos(){
    return(
         <div className="grid grid-cols-4 gap-4">
                <div><Image src={acomodacao1} alt="acomodacao 1" width={300} height={200}/></div>
                <div><Image src={descansar} alt="acomodacao 1" width={300} height={200}/></div>
                <div><Image src={camaking} alt="acomodacao 1" width={300} height={200}/></div>
                <div><Image src={reservar} alt="acomodacao 1" width={300} height={200}/></div>
                <div><Image src={confortox} alt="acomodacao 1" width={300} height={200}/></div>
                <div><Image src={localizados} alt="acomodacao 1" width={300} height={200}/></div>
                <div><Image src={localizacao} alt="acomodacao 1" width={300} height={200}/></div>
                <div><Image src={recepcao} alt="acomodacao 1" width={300} height={200}/></div>
         </div>
    )
}