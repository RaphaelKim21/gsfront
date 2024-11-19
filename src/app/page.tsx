import Image from 'next/image';
import React from 'react';
import painel from "/public/images/painel.jpg";

export default function Home(){
  return (
    <main className="min-h-screen bg-[#73ade2] from-sky-400 to-sky-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[calc(100vh-140px)]">
          {/* Left side - Image */}
          <div className="relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden">
            {/* Replace with your actual image */}
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
            <Image src={painel} alt="painel" className="w-full" />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-right space-y-6 md:space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-[#f8dc69] leading-tight">
              EcoCréditos
            </h1>

            <div className="space-y-6 text-white text-lg md:text-xl">
              <p>
              Nosso projeto tem como missão transformar a forma como consumimos e compartilhamos energia. Por meio de painéis solares instalados estrategicamente, geramos {' '} 
              <span className="font-semibold text-[#f8dc69] ">energia elétrica</span> e renovável, criando créditos que são convertidos em benefícios diretos para pessoas e empresas. 
              </p>

              <p>
              Além disso, promovemos a sustentabilidade, reduzimos emissões de carbono e incentivamos uma conexão mais responsável com o meio ambiente. Junte-se a nós e faça parte dessa revolução energética que {' '}  <span className="font-semibold text-[#f8dc69] ">impacta positivamente o planeta</span> e a sua comunidade!
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

