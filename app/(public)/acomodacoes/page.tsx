import Image from "next/image"
import singlecamas from "./singlesingle.png"
import executivocasal from "./executivo.png"
import setabaixos from "./setabaixo.png"
import stdluxos from "./stdluxo.png"
export default function Acomodacoes(){
    return(
       <section className="flex flex-col   ...">
          <div className="flex flex-col gap-2 text-center m-4 ..."><h2>Acomodações <hr /> </h2>  
          
         <p>Camas confortáveis, um bom chuveiro, ar condicionado, segurança e tranquilidade.
                Nossa estrutura oferece tudo o que você precisa para sentir-se como em sua própria casa.</p>
                <span  className="text-center"> <p>Confira abaixo nossas opções de acomodações. </p></span>
        </div>
          <div className=" flex justify-center  h-100 ...">
             
              <span>
                <span><Image  src={singlecamas} alt="Acomodação" width={500} height={100}   /></span>
              </span>
             
                <div  className="w-142 bg-gray-300  h-83 " >         
                    <h2 className=" p-4 text-white m-1 bg-gray-600">STANDARD SIMPLES</h2>
                    <span className="flex gap-6 p-2 ...">Instalações:
                     <span>
                    TV a cabo (led 32 polegadas), ar condicionado,frigobar abastecido, wi-fi, cofre, fechadura eletrônica , telefone, armário e mesa para trabalho.
                    Quartos internos e menores, com janelas voltadas para o interior do hotel
                    </span></span>

                    <span className="flex gap-6 p-2 ...">
                       <span>
                         Tipos de Cama:
                      </span>
                      <span>
                         Cama Queen, casal padrão ou 2 camas de solteiro.
                      </span>
                    </span>

                    <span className="flex gap-6 p-2 ...">
                        <span>
                             VALOR
                            DIÁRIA: 
                        </span>
                        <span>
                            INDIVIDUAL:  
                            <br />
                            R$239,00  
                        </span>
                        <span>
                            CASAL/DUPLO:
                            <br />
                            R$279,00
                        </span>
                    </span> 

                    <h2 className=" p-3 text-white m-1 bg-gray-600  ">RESERVAR</h2>
                </div>
         </div>


           <div className=" flex  flex justify-center  h-100 ...">
             
              <span>
                <span><Image  src={executivocasal} alt="Acomodação" width={500} height={100}   /></span>
              </span>
             
                <div  className="w-142 bg-gray-300  h-83 " >         
                    <h2 className=" p-4 text-white m-1 bg-gray-600">Executivo Casal</h2>
                    <span className="flex gap-6 p-2 ...">Instalações:
                     <span>
                                        
                    TV a cabo (led 32 polegadas), ar condicionado, frigobar abastecido, wi-fi, cofre, fechadura eletrônica, telefone, armário e mesa para trabalho e espaço amplo.
                    </span></span>

                    <span className="flex gap-6 p-2 ...">
                       <span>
                         Tipos de Cama:
                      </span>
                      <span>
                         Cama Queen, casal padrão ou 2 camas de solteiro.
                      </span>
                    </span>

                    <span className="flex gap-6 p-2 ...">
                        <span>
                             VALOR
                            DIÁRIA: 
                        </span>
                        <span>
                            INDIVIDUAL:  
                            <br />
                            R$259,00
                        </span>
                        <span>
                            CASAL/DUPLO:
                            <br />
                            R$299,00
                        </span>
                    </span> 

                    <h2 className=" p-3 text-white m-1 bg-gray-600  ">RESERVAR</h2>
                </div>            
         </div>
             <div   className=" flex flex justify-center   h-100 ...">
             
              <span>
                <span><Image  src={stdluxos} alt="Acomodação" width={500} height={100}   /></span>
              </span>
             
                <div  className="w-142 bg-gray-300  h-83 " >         
                    <h2 className=" p-4 text-white m-1 bg-gray-600">Standard Luxo</h2>
                    <span className="flex gap-6 p-2 ...">Instalações:
                     <span>                                           
                    TV a cabo (led 32 polegadas), ar condicionado, frigobar abastecido, wi-fi, cofre, fechadura eletrônica, telefone, armário e mesa para trabalho e espaço mais amplo.
                    </span>
                    </span>

                    <span className="flex gap-6 p-2 ...">
                       <span>
                         Tipos de Cama:
                      </span>
                      <span>
                         Cama Queen, casal padrão ou 2 camas de solteiro.
                      </span>
                    </span>

                    <span className="flex gap-6 p-2 ...">
                        <span>
                             VALOR
                            DIÁRIA: 
                        </span>
                        <span>
                            INDIVIDUAL:  
                            <br />
                            R$279,00
                        </span>
                        <span>
                            CASAL/DUPLO:
                            <br />
                            R$309,00
                        </span>
                    </span> 

                    <h2 className=" p-3 text-white m-1 bg-gray-600  ">RESERVAR</h2>
                </div>     


         </div> 



         <hr />

        <div className="flex flex-col text-center p-2 m-4 gap-5   ...">
        <p>Politica de cancelamento e alteração</p> 


         <p  className="flex flex-row gap-2 justify-center ...">
            SAIBA MAIS <span>  <Image className="m-auto"  src={setabaixos} alt="Marketing" width={27} height={50} /></span>
          
         </p>
        </div>

         <hr />

          <br /><br />  


          <hr />
        <div className="flex flex-col text-center p-2 m-4 gap-5   ...">
          <p>Observações </p>


  
           <p className="flex flex-row gap-2 justify-center ..."> SAIBA MAIS <span> <Image className="m-auto"  src={setabaixos} alt="Marketing" width={27} height={50} /> </span></p>
            
       
        </div>

         <hr />

        <br />
       </section>
    )
}