// app/produtos/page.js
import CardProduto from '@/components/CardProduto';

// Função que busca dados da nossa API interna
async function getProdutos() {
    // 1. Define o endereço base:
    //    - Usa o endereço público do Render (que está na variável de ambiente)
    //    - OU usa o localhost (se a variável de ambiente não estiver definida)
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

    // 2. O fetch usa o endereço base e CONCATENA o caminho da API interna
    const res = await fetch(`${API_URL}/api/produtos`, {
        cache: 'no-store', // Importante para garantir dados atualizados
    });

    if (!res.ok) {
        // Incluir o console.error para debug no Render é uma boa prática
        console.error(`Falha ao buscar a API. URL Tentada: ${API_URL}/api/produtos`);
        throw new Error('Falha ao buscar os dados dos produtos');
    }
    return res.json();
}

export default async function ProdutosPage() {
    const produtos = await getProdutos();

    return (
        <main className="container mx-auto p-8">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
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