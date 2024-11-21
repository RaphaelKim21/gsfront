
import React from "react";

export default function Criadores() {
  const criadores = [
    {
      nome: "Nicolas Barutti",
      rm: "554944",
      imagem: "/images/nicolas.jpeg", 
    },
    {
      nome: "Raphael Kim",
      rm: "557914",
      imagem: "/images/kim.jpeg", 
    },
    {
      nome: "Lucas Rainha",
      rm: "558471",
      imagem: "/images/lucas.jpeg", 
    },
  ];

  return (
    <div className="min-h-screen bg-[#73ade2] flex items-center justify-center">
      <div className="max-w-5xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center text-[#f8dc69] mb-8">
          Conheça os Criadores
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {criadores.map((criador, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center"
            >
              <div className="h-40 w-40 mx-auto mb-4 bg-gray-300 rounded-full overflow-hidden">
                
                <img src={criador.imagem}alt={`Foto de ${criador.nome}`}className="h-full w-full object-cover"/>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">{criador.nome}</h2>
              <p className="text-gray-600 mt-2">{criador.rm}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

