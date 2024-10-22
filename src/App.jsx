import { useState, useEffect } from "react";
import "./App.css";
import Articulo from "./components/Articulo";
import BtnCategoria from "./components/BtnCategoria";

function App() {
  const [productos, setProductos] = useState([]);
  const [categoria, setCategoria] = useState("Todas");
  // "electronics" "jewelery" "men's clothing" "women's clothing"

  const handleSetCategoria = (categoriaHijo) => {
    setCategoria(categoriaHijo);
    console.log(categoria);
  };

  useEffect(() => {
    let url = "";
    if (categoria === "Todas") {
      url = "https://fakestoreapi.com/products";
    } else {
      url = `https://fakestoreapi.com/products/category/${categoria}`;
    }

    async function fetchBack() {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setProductos(data);
    }
    fetchBack();
  }, [categoria]);

  //filtros
  //fetch (categorias) //4
  //por categoria hacemos map y crear botones

  return (
    <>
      <h1>Productos</h1>
      <BtnCategoria
        texto={"electronica"}
        categoria={"electronics"}
        funcionPadre={handleSetCategoria}
      />
            <BtnCategoria
        texto={"jewelery"}
        categoria={"jewelery"}
        funcionPadre={handleSetCategoria}
      />
      {productos.map((producto) => (
        <Articulo key={producto.id} articulo={producto} />
      ))}
    </>
  );
}

export default App;
