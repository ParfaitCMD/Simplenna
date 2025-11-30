// components/CardProduto.js

import React from 'react';
// 1. IMPORTAR o componente Image do Next.js
import Image from 'next/image';

export default function CardProduto({ nome, marca, preco, imagemUrl }) {
    // O componente Image exige que você defina a largura (width) e a altura (height).
    // Se for uma imagem de tamanho variável, você deve usar a propriedade layout="fill" 
    // e definir o tamanho no div pai, como faremos aqui.

    return (
        <div className="border border-gray-200 rounded-xl shadow-lg p-4 transition duration-300 hover:shadow-xl bg-white">
            {/* Ajuste: A div pai deve ter position="relative" e tamanho fixo,
        e o componente Image usa fill={true} para preencher.
      */}
            <div className="relative h-48 mb-4">

                {/* 2. SUBSTITUIR a tag <img> pelo componente <Image /> */}
                <Image
                    // source (Origem)
                    src={imagemUrl}
                    alt={nome}
                    // Propriedades OBRIGATÓRIAS:
                    fill={true} // Diz para a imagem preencher o espaço da div pai
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" // Ajuda na otimização de tamanhos
                    // Classes Tailwind para garantir que a imagem preencha e seja responsiva
                    className="object-cover rounded-md"
                />
            </div>

            {/* Detalhes do Produto (restante do código...) */}
            <p className="text-sm font-medium text-gray-500 mb-1">{marca}</p>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{nome}</h2>
            <p className="text-2xl font-bold text-purple-600">
                R$ {preco.toFixed(2).replace('.', ',')}
            </p>

            <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-150">
                Ver Detalhes
            </button>
        </div>
    );
}