// app/produtos/page.js

import CardProduto from '@/components/CardProduto';

// ----------------------------------------------------
// Função para buscar dados da API
// ----------------------------------------------------
async function getProdutos() {
    // 1. Lógica para definir a URL base do fetch (Server-to-Server)
    // Se a variável IS_RENDER_DEPLOY for 'true', usa localhost:10000 (URL interna do Render)
    // Caso contrário, usa localhost:3000 (Desenvolvimento local)
    const API_BASE_URL = process.env.IS_RENDER_DEPLOY === 'true' ?
        'http://localhost:10000' :
        'http://localhost:3000';

    // 2. Executa o fetch
    const res = await fetch(`${API_BASE_URL}/api/produtos`, {
        cache: 'no-store', // Garante que os dados sejam sempre frescos
    });

    if (!res.ok) {
        // Se a requisição falhar (404, 500, etc.), lança um erro
        console.error(`Falha ao buscar a API interna. URL Tentada: ${API_BASE_URL}/api/produtos`);
        throw new Error('Falha ao buscar os dados dos produtos');
    }

    // Retorna os dados como JSON
    return res.json();
}

// ----------------------------------------------------
// Componente principal da página (/produtos)
// ----------------------------------------------------
export default async function ProdutosPage() {
    // A função getProdutos é chamada no servidor antes da renderização
    const produtos = await getProdutos();

    return (
        <main className="container mx-auto p-8 min-h-screen">
            <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">
                ✨ Vitrine Simplenna ✨
            </h1>

            {/* Grid responsivo para a exibição dos produtos (Tailwind CSS) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {produtos.map(produto => (
                    <CardProduto
                        key={produto.id}
                        nome={produto.nome}
                        marca={produto.marca}
                        preco={produto.preco}
                        imagemUrl={produto.imagemUrl}
                    />
                ))}
            </div>
        </main>
    );
}