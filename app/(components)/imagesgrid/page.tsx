import Image from "next/image";

export default function ImagesFlex(){
    return(
        <div className="columns-3 ...">
            <Image className="aspect-3/2 ..." src={"https://pt.vecteezy.com/fotos-gratis/games"} width={330} height={330} alt="videos do hotel"/>
       </div>
    )
}