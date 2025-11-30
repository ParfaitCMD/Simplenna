// components/CardProduto.js

import React from 'react';
import Image from 'next/image';

export default function CardProduto({ nome, marca, preco, imagemUrl }) {

    // Note que a div pai define a altura (h-48) e position relativa (relative).
    // A imagem usa fill={true} para preencher esse espaço.
    return (
        <div className="border border-gray-200 rounded-xl shadow-md p-4 transition duration-300 hover:shadow-xl hover:scale-[1.02] bg-white flex flex-col">

            {/* Contêiner da Imagem */}
            <div className="relative h-48 mb-4">
                <Image
                    src={imagemUrl}
                    alt={nome}
                    // Propriedades OBRIGATÓRIAS para o Next/Image para preencher a div pai
                    fill={true}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover rounded-md"
                />
            </div>

            {/* Detalhes do Produto */}
            <p className="text-xs font-medium text-gray-500 uppercase mb-1">{marca}</p>
            <h2 className="text-lg font-semibold text-gray-800 mb-2 truncate" title={nome}>
                {nome}
            </h2>
            <p className="text-xl font-bold text-purple-600 mt-auto">
                R$ {preco.toFixed(2).replace('.', ',')}
            </p>

            <button className="mt-4 w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition duration-150">
                Ver Detalhes
            </button>
        </div>
    );
}