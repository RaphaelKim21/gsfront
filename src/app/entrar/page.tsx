"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { FormEvent } from 'react';
import { useState } from 'react';

export default function Login(){
    const router = useRouter()
    const [formData, setFormData] = useState({
        campo: '',
        senha:''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(formData); 
        router.replace ('/')
    };


    return(
        <div
        className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
        style={{
            backgroundImage: "url(/images/fundo.jpg)", 
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            backgroundBlendMode: 'overlay'
        }}
        >
            <div className="max-w-md mx-auto bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Login</h2>
                    <p className="mt-2 text-gray-600">Preencha seus dados para Logar</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                    <label htmlFor="emailCnpj" className="block text-sm font-medium text-gray-700">
                            Email ou CNPJ
                        </label>
                        <input
                            type="text"
                            name="campo"
                            id="emailCnpj"
                            value={formData.campo}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-300 focus:ring-yellow-300 sm:text-sm
                       p-2 border focus:outline-none"
                            placeholder="Digite o seu email ou cnpj"
                        />
                    </div>

                    <div>
                        <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
                            Senha
                        </label>
                        <input
                            type="password"
                            name="senha"
                            id="senha"
                            value={formData.senha}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-300 focus:ring-yellow-300 sm:text-sm
                       p-2 border focus:outline-none"
                            placeholder="Digite a senha"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                       bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300
                       transition-colors duration-200"
                        >
                            Logar
                        </button>
                        <Link href={"/cadastro"}>Cadastrar aqui</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}