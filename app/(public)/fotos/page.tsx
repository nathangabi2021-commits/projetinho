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
import recepcaonova from "./recepcaonova.png"
import espaconovo from "./poltronasespaco.png"
import cafemanha from "./cafe.png"
import cafebolos from "./cafebolos.png"
import paes from "./paes.png"
import academia from "./academia.png"
import reuniao from "./reuniao.png"
import entrada from "./entrada.png"
export default function Fotos(){
    return(
        <div>
                <h1 className='m-5  text-center text-2xl font-bold '>----Fotos / Novidades------</h1>
             <div className="grid grid-cols-4 gap-4 ...">  
                <div><Image src={acomodacao1} alt="acomodacao 1" width={300} height={200}/></div>
                <div><Image src={descansar} alt="acomodacao 1" width={300} height={200}/></div>
                <div><Image src={camaking} alt="acomodacao 1" width={300} height={200}/></div>
                <div><Image src={reservar} alt="acomodacao 1" width={300} height={200}/></div>
                <div><Image src={confortox} alt="acomodacao 1" width={300} height={200}/></div>
                <div><Image src={localizados} alt="acomodacao 1" width={300} height={200}/></div>
                <div><Image src={localizacao} alt="acomodacao 1" width={300} height={200}/></div>
                <div><Image src={recepcao} alt="acomodacao 1" width={300} height={200}/></div>

                <div><Image src={recepcaonova} alt="acomodacao 1" width={300} height={200}/></div>
                <div><Image className="h-55" src={espaconovo} alt="acomodacao 1" width={300} height={200}/></div>
                <div><Image src={cafemanha} alt="acomodacao 1" width={300} height={200}/></div>
                <div><Image src={cafebolos} alt="acomodacao 1" width={300} height={200}/></div>
                <div><Image src={paes} alt="acomodacao 1" width={300} height={200}/></div>
                <div><Image src={academia} alt="acomodacao 1" width={300} height={200}/></div>
                <div><Image src={reuniao} alt="acomodacao 1" width={300} height={200}/></div>
                <div><Image src={entrada} alt="acomodacao 1" width={300} height={200}/></div>

         </div>
        </div>

    )
}