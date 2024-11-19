
import Link from 'next/link';
import Image from 'next/image';
import logo from "/public/images/logo.png";
import insta from "/public/images/insta.png";

export default function Footer() {
  const teamMembers = [
    { name: 'Raphael Kim', id: 'RM 557914' }, { name: 'Nicolas Barutti', id: 'RM 554944' }, { name: 'Lucas Rainha', id: 'RM 558471' },
  ];

  return (
    <footer className="w-full bg-[#f8dc69] py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="mb-6 md:mb-0">
          <div>
            {/* Logo placeholder - you can add your image here */}
            <div className="w-full h-full bg-yellow-400  flex items-center justify-center">
                <Image src={logo} alt="Logo" className="w-40" />
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <p className="text-gray-800 mb-4">Este é um projeto Global Solution desenvolvido por:</p>
          <div className="space-y-2">
            {teamMembers.map((member, index) => (
              <p key={index} className="text-gray-800">
                {member.name}
                <span className="ml-2 text-gray-600">{member.id}</span>
              </p>
            ))}
          </div>
        </div>

        
        <div className="text-center md:text-right">
          <h3 className="text-gray-800 font-semibold mb-4">Redes sociais</h3>
          <div className="flex space-x-4 justify-center md:justify-end">
           <Image src={insta} alt='Redes' className='w-40  bg-black'/>
          </div>
        </div>
      </div>
    </footer>
  );
};

