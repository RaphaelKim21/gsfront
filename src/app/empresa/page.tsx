"use client"
import React, { FormEvent } from 'react';
import { useState } from 'react';

export default function Empresa() {
    const [formData, setFormData] = useState({
        razaoSocial: '',
        cnpj: '',
        endereco: '',
        numero: '',
        telefone: '',
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
    };

    const formatCNPJ = (value: string) => {
        return value
            .replace(/\D/g, '') 
            .replace(/^(\d{2})(\d)/, '$1.$2')
            .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
            .replace(/\.(\d{3})(\d)/, '.$1/$2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1');
    };

    const formatPhone = (value: string) => {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{4})\d+?$/, '$1');
    };

    return (
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
                    <h2 className="text-3xl font-bold text-gray-900">Cadastro de Empresa</h2>
                    <p className="mt-2 text-gray-600">Preencha os dados da sua empresa</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                   
                    <div>
                        <label htmlFor="razaoSocial" className="block text-sm font-medium text-gray-700">
                            Razão Social
                        </label>
                        <input
                            type="text"
                            name="razaoSocial"
                            id="razaoSocial"
                            value={formData.razaoSocial}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-300 focus:ring-yellow-300 sm:text-sm
                       p-2 border focus:outline-none"
                            placeholder="Digite a razão social da empresa"
                        />
                    </div>

                   
                    <div>
                        <label htmlFor="cnpj" className="block text-sm font-medium text-gray-700">
                            CNPJ
                        </label>
                        <input
                            type="text"
                            name="cnpj"
                            id="cnpj"
                            value={formData.cnpj}
                            onChange={(e) => {
                                const formatted = formatCNPJ(e.target.value);
                                setFormData(prev => ({ ...prev, cnpj: formatted }));
                            }}
                            required
                            maxLength={18}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-300 focus:ring-yellow-300 sm:text-sm
                       p-2 border focus:outline-none"
                            placeholder="00.000.000/0000-00"
                        />
                    </div>

                    
                    <div>
                        <label htmlFor="endereco" className="block text-sm font-medium text-gray-700">
                            Endereço
                        </label>
                        <input
                            type="text"
                            name="endereco"
                            id="endereco"
                            value={formData.endereco}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-300 focus:ring-yellow-300 sm:text-sm
                       p-2 border focus:outline-none"
                            placeholder="Digite o endereço da empresa"
                        />
                    </div>

                    
                    <div>
                        <label htmlFor="numero" className="block text-sm font-medium text-gray-700">
                            Número
                        </label>
                        <input
                            type="text"
                            name="numero"
                            id="numero"
                            value={formData.numero}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-300 focus:ring-yellow-300 sm:text-sm
                       p-2 border focus:outline-none"
                            placeholder="Digite o número"
                        />
                    </div>

                   
                    <div>
                        <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">
                            Telefone
                        </label>
                        <input
                            type="text"
                            name="telefone"
                            id="telefone"
                            value={formData.telefone}
                            onChange={(e) => {
                                const formatted = formatPhone(e.target.value);
                                setFormData(prev => ({ ...prev, telefone: formatted }));
                            }}
                            required
                            maxLength={15}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-300 focus:ring-yellow-300 sm:text-sm
                       p-2 border focus:outline-none"
                            placeholder="(00) 00000-0000"
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
                            Cadastrar Empresa
                        </button>
                        
                    </div>
                </form>
            </div>
        </div>
    );
};

