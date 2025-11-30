// app/produtos/page.js

import CardProduto from '@/components/CardProduto';

// ----------------------------------------------------
// Função para buscar dados da API (PONTO DE FALHA)
// ----------------------------------------------------
async function getProdutos() {
    const API_BASE_URL = process.env.IS_RENDER_DEPLOY === 'true' ?
        'http://localhost:10000' :
        'http://localhost:3000';

    const res = await fetch(`${API_BASE_URL}/api/produtos`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        // Lança o erro se a API retornar 404/500
        console.error(`Falha ao buscar a API interna. URL Tentada: ${API_BASE_URL}/api/produtos`);
        throw new Error(`Falha no servidor (${res.status}): Não foi possível carregar os produtos.`);
    }

    return res.json();
}

// ----------------------------------------------------
// Componente principal da página (/produtos)
// ----------------------------------------------------
export default async function ProdutosPage() {
    let produtos = [];
    let loadError = null;

    try {
        // A função getProdutos é onde o await fetch() acontece e pode falhar
        produtos = await getProdutos();
    } catch (error) {
        // Captura o erro da rede/API e armazena
        console.error("Erro capturado na renderização da página:", error.message);
        loadError = error;
    }

    // Se houver um erro, mostre a mensagem amigável
    if (loadError) {
        return (
            <main className="container mx-auto p-8 min-h-screen flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-red-600 mb-4">Erro ao Carregar Produtos</h1>
                <p className="text-lg text-gray-600">A vitrine não pôde ser carregada devido a um erro de conexão.</p>
                <p className="text-sm text-gray-400 mt-2">Verifique a variável de ambiente **IS_RENDER_DEPLOY** no Render.</p>
                <p className="text-xs text-gray-500 mt-2">Detalhes: {loadError.message}</p>
            </main>
        );
    }

    // Se não houver erro, renderize a página normal
    return (
        <main className="container mx-auto p-8 min-h-screen">
            <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">
                ✨ Vitrine Simplenna ✨
            </h1>

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