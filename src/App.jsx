import { useState } from "react";

// Función que al oprimir los botones suma o resta según el caso y ademas renderiza el contenido
export const App = () => {
  // creación del estado de una variable
  const [count, setCount ] = useState(10); // declaración de variables que quiero reenderizar para que reac vea los cambios
  return (
    <div>
      <h1>Mi Contador</h1>
      <h2>{count}</h2>
      <button onClick={()=> setCount(count+1) } type="button">+1</button>
      <button onClick={()=> setCount(count-1) } type="button">-1</button>
    </div>
  );
}