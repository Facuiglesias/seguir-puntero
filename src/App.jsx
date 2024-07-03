import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    //No es estrictamente necesario en este caso, ya que este componente nunca se desmontara y se renderiza una sola vez, pero es una buena practica nunca olvidarse de limpiar los eventos dentro de un useEffect
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <main className="flex flex-col gap-8 w-2/3 max-w-[500px] h-fit m-auto bg-[#222] rounded-3xl text-white font-mono shadow-[0px_0px_50px_10px_#718096] p-8">
        <h1 className="font-bold text-3xl text-center">Efecto en el puntero</h1>
        <h4 className="text-lg px-2 text-justify">
          Este proyecto es una aplicación web creada con React que presenta una
          bola que sigue el puntero del mouse en tiempo real. Al mover el cursor
          por la pantalla, la bola se desplazará suavemente, ofreciendo una
          experiencia interactiva y visualmente atractiva.
        </h4>
      </main>
      <div
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
        className={`absolute w-[0px] h-[0px] shadow-[0px_0px_100px_20px_#f7fafc] rounded-full`}
      ></div>
    </>
  );
}

export default App;
