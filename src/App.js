import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import Context from "./Context";
import { useState, useEffect } from "react";

export default function App() {
  const endpoint = "/fotos.json";
  const [fotos, setFotos] = useState([]);
  const globalState = {fotos, setFotos};

  const getData = () => {
    fetch('fotos.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        setFotos(myJson.photos);

      });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Context.Provider value={{fotos, setFotos}}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
