 "use client"
import { useEffect, useRef } from 'react';

export default function VideosUrl(){  
    
 const embedRef = useRef(null);

  useEffect(() => {
    // Se o script já existe, só processa
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }

    // Cria o script do Instagram
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    document.body.appendChild(script);
  }, []);
    return(
    <section className='m-10  flex flex-col  ...'>
       <h1 className='m-5  text-center text-2xl font-bold'>----Videos / Novidades------</h1>
        <div ref={embedRef} className='flex gap-6 ...'>  
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/reel/DUluUuPCifP/"
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 3,
          borderRadius: "3px",
          boxShadow:
            "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px auto",
          maxWidth: "540px",
          minWidth: "326px",
          width: "100%",
        }}
      ></blockquote>

       <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/reel/DRkrISAitTp"
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 3,
          borderRadius: "3px",
          boxShadow:
            "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px auto",
          maxWidth: "540px",
          minWidth: "326px",
          width: "100%",
        }}
      ></blockquote>
    </div>
    </section>


    )
 }

 