//estilos del boton
const BtnCategoria = ({ texto, categoria, funcionPadre }) => {
  const handleSetCategoria = () => {
    funcionPadre(categoria);
  };

  const handleSetCategoria2 = () => {
    funcionPadre(categoria);
  };
  return <button onClick={handleSetCategoria}>{texto}</button>;
};

export default BtnCategoria;
