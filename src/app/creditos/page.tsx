
import React from 'react';

export default function Creditos() {
  const creditosGerados = 23; 

  return (
    <div className="min-h-screen bg-[#73ade2] flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <h1 className="text-3xl font-bold text-[#f8dc69] mb-4">Créditos de Energia</h1>
        <p className="text-gray-700 text-lg">
          Você já gerou um total de:
        </p>
        <p className="text-4xl font-extrabold text-[#73ade2] my-4">
          {creditosGerados} Créditos
        </p>
        <p className="text-gray-600">
          Esses créditos já foram acionados junto à Enel para converter em benefícios diretos.
        </p>
        <div className="mt-6">
          <button
            className="bg-[#f8dc69] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#73ade2] transition"
          >
            Saiba mais
          </button>
        </div>
      </div>
    </div>
  );
}
