import "../assets/css/galeria.css";
import Heart from "./Heart";
import { useContext, useState } from "react";
import Context from "../Context";

export default function Home() {  
  const {fotos, setFotos} = useContext(Context);
 
  
  function setLike(id) {
    console.log(id);
    for (var i = 0; i < fotos.length; i++) {
      if (fotos[i].id === id) {
        if(fotos[i].liked === false){
          fotos[i].liked = true;
        }else{
          fotos[i].liked = false;
        }    
        
        setFotos(fotos);
        
      }
    }
  };
  

  return (
    <div className="galeria grid-columns-5 p-3">
      {
        fotos.map((item, i) => (
          <div
            onClick={() => setLike(item.id)}
            className="foto"
            style={{ backgroundImage: `URL(${item.src.tiny})` }}
            key={i}>
            <Heart filled={item.liked} />
            <p>{item.alt}</p>
          </div>
          
        ))
      }
    </div>
  );
}
