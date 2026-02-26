import Link from "next/link";
import localhotel from "./local.png"
import Image from "next/image";

export default function Contato(){
    return (
        <section className="flex flex-col m-6  ...">
                <Link href="/home"><h1 className="text-center ">Quem Somos</h1></Link> 

              <div className="flex  w-full p-8 gap-15   ...">
                 <span>Construído em uma das principais avenidas de Jaú, o Realce Hotel está localizado estrategicamente na entrada da cidade, facilitando o acesso dos seus hóspedes para diferentes locais na sua estadia.
                 
                <br />  <br /> 
           

                Sua infraestrutura versátil e sua equipe extremante atenciosa e bem treinada faz do Realce Hotel a sua casa em Jaú! Seja a negócios ou lazer.

                 <br />  <br /> 

                Você vai realmente sentir-se em casa ao se hospedar em nossos quartos que possuem TV a cabo, ar condicionado e wi-fi. Além disso, fique à vontade para começar o dia com nosso delicioso café da manhã e se exercitar em nossa academia.

                 <br />  <br /> 

                O Realce Hotel oferece uma sala de reuniões confortável e bem equipada, com capacidade para até 30 pessoas. Ideal para encontros corporativos e eventos empresariais, o espaço proporciona um ambiente profissional e funcional para reuniões produtivas.</span>
                
                  <div className=" flex justify-center  ...">
                 <Image className="w-400" src={localhotel} alt="localização do hotel" width={400} height={400}/>
                 </div>
              </div>
               
        </section>


    )
}