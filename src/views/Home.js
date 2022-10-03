import Galeria from "../components/Galeria";
import { useContext } from "react";
import Context from "../Context";

export default function Home() {
  const { fotos } = useContext(Context);
  return (
    <div id="Home">
      <h1>Natural Pic</h1>

      <Galeria fotos={fotos}/>
    </div>
  );
}
