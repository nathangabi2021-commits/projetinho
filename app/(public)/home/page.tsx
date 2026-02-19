import Image from "next/image";
import realceimage from "./realcehotel.png"
import imagens from "./app.png"
import opcoes from "./options.png"
import apresentacao from "./apresent.png"
import eventss from "./events.png"
import ImagesFlex from "@/app/(components)/imagesgrid/page";
import Footer from "@/app/(components)/footer/page";
import Link from "next/link";
import Carousel from "@/app/(components)/carousel/page";
export default function Home(){
    return(
        <main >
                <header className="bg-zinc-800 flex justify-center ">
                    <Image className="bg-white-200" src={realceimage}  alt="logo da pagina" width={300} 
                    height={100}/>
                    <nav  >
                        <ul className="flex  gap-5 p-20 text-white">
                            <li><button className="bg-zinc-500 hover:bg-sky-700 ... w-20 h-10">Reservas</button></li>
                            <li><button className="bg-zinc-500 hover:bg-sky-700 ... w-20 h-10">Check-in</button></li>
                        </ul>
                    </nav>
                </header>
                 <nav className="p-5 bg-zinc-700 ...">
                    <ul className="flex justify-evenly text-white ...">
                        <li><Link href="/register"><button className="bg-white-600 hover:bg-sky-500 ... w-20 h-10 ">Home</button></Link></li>
                        <li><button className="bg-white-600 hover:bg-sky-500 ... w-30 h-10">Quem Somos</button></li>
                        <li><button className="bg-white-600 hover:bg-sky-500 ... w-30 h-10">Acomodações</button></li>
                        <li><button className="bg-white-600 hover:bg-sky-500 ... w-20 h-10">Fotos</button></li>
                        <li><button className="bg-white-600 hover:bg-sky-500 ... w-20 h-10">Contato</button></li>
                    </ul>
                 </nav> 

                 <div>
                        <Carousel/>
                 </div>
                  <div className="grid grid-cols-3 gap-4 justify-items-center p-16 ">
                     <section className="flex flex-col ...">
                        <span>Café da manhã</span>
                        <span>Estacionamento Gratuito</span>
                        <span>Ar Condicionado</span>
                     </section>

                     <section className="flex flex-col ...">
                        <span>Frigobar</span>
                        <span>Cofre</span>
                        <span>Tv a Cabo</span>
                     </section>

                    <section className="flex flex-col ...">
                        <span>Wi-Fi Gratuito</span>
                        <span>Academia</span>
                        <span>Lavanderia</span>
                    </section>
                 </div>
                <div>
                    <Image className="bg-white-200" src={apresentacao}  alt="logo da pagina" width={1350} 
                      height={100}/>
                 </div>
                                  <br /><br />
                <div>
                    <Image className="bg-white-200" src={eventss}  alt="logo da pagina" width={1350} 
                      height={100}/>
                 </div>

                <div className="flex-row p-5 justify-items-center ...">
                    <h1 className="text-center p-4">Localização</h1>

                    <iframe  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14764.548921328484!2d-48.588616738623045!3d-22.310649208049323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1771163765150!5m2!1spt-BR!2sbr" width="660" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div> 


               <Footer/>
        </main>
    )
}