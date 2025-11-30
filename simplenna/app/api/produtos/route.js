// app/api/produtos/route.js

import { NextResponse } from 'next/server';

// Dados de produtos (MOCK)
const PRODUTOS_MOCK = [
    {
        id: 1,
        nome: "Loção Hidratante Framboesa e Cereja",
        marca: "Eudora",
        preco: 55.90,
        imagemUrl: "/images/download.jpg",
        categoria: "Corpo e Banho"
    },
    {
        id: 2,
        nome: "Batom Líquido Vermelho Intenso",
        marca: "oBoticário",
        preco: 39.50,
        imagemUrl: "/imagens/boticario_batom.jpg",
        categoria: "Maquiagem"
    },
    {
        id: 3,
        nome: "Perfume Luna Intenso Eau de Parfum",
        marca: "Natura",
        preco: 159.90,
        imagemUrl: "/imagens/natura_luna.jpg",
        categoria: "Perfumaria"
    },
    {
        id: 4,
        nome: "Delineador Líquido Preto Berê",
        marca: "Quem Disse Berenice?",
        preco: 42.00,
        imagemUrl: "/imagens/bere_delineador.jpg",
        categoria: "Maquiagem"
    },
    {
        id: 5,
        nome: "Espuma de Banho Flor de Pêssego",
        marca: "Oui",
        preco: 85.00,
        imagemUrl: "/imagens/oui_espuma.jpg",
        categoria: "Corpo e Banho"
    }
];

// O Handler GET para a rota /api/produtos
export async function GET() {
    // Retorna a lista de produtos em formato JSON com status 200 (OK)
    return NextResponse.json(PRODUTOS_MOCK, { status: 200 });
}