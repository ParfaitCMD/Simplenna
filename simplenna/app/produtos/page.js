// app/produtos/page.js

import CardProduto from '@/components/CardProduto';

// ----------------------------------------------------
// Função para buscar dados da API (SOLUÇÃO FINAL)
// ----------------------------------------------------
async function getProdutos() {
    // 1. Define a URL base: 
    // Em produção, usaremos a URL pública, mas com um header especial.
    // Em desenvolvimento, continuamos com localhost:3000.
    const API_BASE_URL = process.env.IS_RENDER_DEPLOY === 'true' ?
        'https://simplenna.onrender.com' : // <-- FORÇAMOS a URL pública
        'http://localhost:3000';

    // 2. Define o Header Host (CRUCIAL para o Render aceitar o self-request)
    const fetchHeaders = process.env.IS_RENDER_DEPLOY === 'true' ? {
        // O Render precisa desse cabeçalho para saber para onde rotear a requisição
        'Host': 'simplenna.onrender.com'
    } : {};

    // 3. Executa o fetch
    const res = await fetch(`${API_BASE_URL}/api/produtos`, {
        cache: 'no-store',
        headers: fetchHeaders, // Adiciona o cabeçalho Host
    });

    if (!res.ok) {
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
        produtos = await getProdutos();
    } catch (error) {
        console.error("Erro capturado na renderização da página:", error.message);
        loadError = error;
    }

    if (loadError) {
        return (
            <main className="container mx-auto p-8 min-h-screen flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-red-600 mb-4">Erro Crítico de Conexão</h1>
                <p className="text-lg text-gray-600">A vitrine não pôde ser carregada. Por favor, verifique se a API está ativa.</p>
                <p className="text-sm text-gray-400 mt-2">Detalhes: {loadError.message}</p>
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