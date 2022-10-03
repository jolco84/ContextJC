import { useContext } from "react";
import Context from "../Context";

export default function Favoritos() {
  const { fotos } = useContext(Context);
  console.log(fotos);

 
  
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {
          fotos.map((item, i) => (
            (item.liked)? <div
            className="foto"
            style={{ backgroundImage: `URL(${item.src.tiny})` }}
            key={i}>
                       
          </div> :""           
                     

          ))
        }
      </div>
    </div>
  );
}
