// app/produtos/page.js
import CardProduto from '@/components/CardProduto';

// Função que busca dados da nossa API interna
async function getProdutos() {
    // ATENÇÃO: Use a URL COMPLETA para rodar localmente
    const res = await fetch('http://localhost:3000/api/produtos, https://simplenna.onrender.com', {
        cache: 'no-store',
    });

    if (!res.ok) {
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