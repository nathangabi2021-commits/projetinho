import Image from "next/image"
import marketings from "./marketing.png"
import whats from "./whatsapp.png"
import gmail from "./gmail.png"
export default function EntreEmContato(){
    return(
        <section className="flex justify-center   ...">

            <form className="flex flex-col justify-center justify-items-center p-4 m-4 gap-2 text-center w-200 ... " action="">

        <div className="flex flex-col text-center gap-4  m-4 ..."><h2>CONTATOS <hr /> </h2>   
         <p>Dúvidas sobre reservas, eventos ou demais assuntos?
        Envie uma mensagem para nós, responderemos o mais breve possível.</p>  

        <div className="flex w-full justify-center items-center gap-15 p-12  ..."> 
          <span>
          <Image className="m-auto"  src={whats} alt="Marketing" width={40} height={50} />
            Whatsapp
           (14) 98118-9053
          </span>
         <span>
        <Image className="m-auto"  src={gmail} alt="Marketing" width={40} height={50} />
                  E-mail
        reservas@realcehotel.com.br
        </span >
        <span  >
          <Image className="m-auto" src={marketings} alt="Marketing" width={50} height={50} />
          Atendimento ao Cliente
          +55 (14) 3602-1010
        </span>
        </div>
       
         </div>

                <label htmlFor="nome">Nome Completo</label>
                 <input className="border-2" type="text" name="nome" id="nome" /> 
                   <label htmlFor="email text-white">E-mail</label> 

                 <input  className="border-2"  type="email" placeholder="exempleemail@outlook.com" name="email" id="email" /> 
                   <label htmlFor="Celular text-white">Celular</label>
                 <input className="border-2"  type="text" placeholder="(00) 00000-0000" name="Celular" id="Celular" /> 
                 <label htmlFor="Celular text-white">Assunto</label>
                 <textarea className="border-2"  name="assunto" id="assunto" cols={30} rows={10}></textarea>
                 <div className="m-4">
                  <button className="text-green   bg-white-600 hover:bg-sky-500 w-30 p-2 h-10">Enviar</button>
                 </div>
              </form>
        </section>
  
 
    )
}