import Link from 'next/link';
import logo from "/public/images/logo.png";
import Image from 'next/image';

export default function Header(){
  return (
    <header className="w-full bg-[#f8dc69] py-4 px-6 shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
            <Image src={logo} alt="Logo" className="w-40" />
        </Link>
        
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-gray-800 hover:text-gray-600 transition-colors">Home</Link>
          <Link href="/entrar" className="text-gray-800 hover:text-gray-600 transition-colors">Entre ou cadastre-se</Link>
          <Link href="/creditos" className="text-gray-800 hover:text-gray-600 transition-colors">Meus Creditos</Link>
          <Link href="/criadores" className="text-gray-800 hover:text-gray-600 transition-colors">Criadores</Link>
        </div>
      </nav>
    </header>
  );
};