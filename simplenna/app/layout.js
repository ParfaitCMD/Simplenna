// app/layout.js

// 1. IMPORTAÇÃO CRUCIAL: Aqui o Tailwind e o CSS global são carregados!
import './globals.css';

// 2. Metadata (Informações do navegador)
export const metadata = {
    title: 'Simplenna | Sua Vitrine de Beleza',
    description: 'Produtos Eudora, Natura, oBoticário e Oui.',
};

// 3. O Componente Layout Raiz
export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                {/* O 'children' representa o conteúdo das suas páginas (Home, Produtos, etc.) */}
                {children}
            </body>
        </html>
    );
}