// app/api/produtos/route.js
import { NextResponse } from 'next/server';

const PRODUTOS_MOCK = [
    { id: 1, nome: "Loção Hidratante Corporal", marca: "Eudora", preco: 55.90, imagemUrl: "/imagens/eudora_framboesa.jpg" },
    { id: 2, nome: "Batom Vermelho Intenso", marca: "oBoticário", preco: 39.50, imagemUrl: "/imagens/boticario_batom.jpg" },
    { id: 3, nome: "Perfume Luna Intenso", marca: "Natura", preco: 159.90, imagemUrl: "/imagens/natura_luna.jpg" },
    { id: 4, nome: "Delineador Líquido", marca: "Quem Disse Berenice?", preco: 42.00, imagemUrl: "/imagens/bere_delineador.jpg" },
    { id: 5, nome: "Espuma de Banho", marca: "Oui", preco: 85.00, imagemUrl: "/imagens/oui_espuma.jpg" }
];

export async function GET() {
    return NextResponse.json(PRODUTOS_MOCK, { status: 200 });
}