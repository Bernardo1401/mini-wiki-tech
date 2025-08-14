"use client";

import React, { useState } from 'react';
import PesquisaComSaibaMais from '../../componentes/Cardju/CardAppRouter';
import Header from '../../componentes/Header/Header'; 
import styles from '../../componentes/Cardju/CardAppRouter.module.css';
import pageStyles from './julia.module.css';
import Image from 'next/image';

const PageJu = () => {
  const [cardAberto, setCardAberto] = useState(null); 

  const handleSaibaMais = (id) => {
    setCardAberto(cardAberto === id ? null : id); 
  };

  return (
    <>
      <Header />
      <div className={pageStyles.banner}>
        <div className={pageStyles.bannerBackground}>
          <Image
            src="/img/nextjs.png"
            alt="Next.js Logo"
            width={200}
            height={120}
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </div>
        
        <div className={pageStyles.bannerContent}>
          <h1 className={pageStyles.bannerTitle}>
            Arquivos Especiais do Next.js
          </h1>
          
          <p className={pageStyles.bannerDescription}>
            Explore os principais arquivos especiais do Next.js App Router e entenda como cada um contribui 
            para a estrutura e funcionalidade da sua aplicação.
          </p>
          
          <div className={pageStyles.bannerStats}>
            <div className={pageStyles.bannerStat}>
              <span>📁 5 Arquivos Especiais</span>
            </div>
            <div className={pageStyles.bannerStat}>
              <span>⚡ Next.js App Router</span>
            </div>
          </div>
        </div>
      </div>

      <div className={pageStyles.introSection}>
        <h2 className={pageStyles.introTitle}>
          Domine os Fundamentos
        </h2>
        <p className={pageStyles.introDescription}>
          Cada arquivo especial no Next.js App Router tem um propósito específico. Clique em "Saiba Mais" 
          para explorar exemplos práticos e entender como implementá-los em seus projetos.
        </p>
      </div>

      <div className={styles.cardGrid}>
        <PesquisaComSaibaMais
          id={1}
          titulo="Loading.js"
          titulo1="Função"
          conteudo1="O arquivo loading.js no Next.js é usado para exibir uma interface de carregamento enquanto os dados ou componentes necessários para renderizar uma página estão sendo carregados. Ele é automaticamente detectado pelo Next.js e exibido durante o carregamento de rotas ou dados assíncronos."
          titulo2="Uso"
          conteudo2="O arquivo loading.js é colocado dentro de uma pasta de rota no Next.js (App Router). Sempre que uma rota ou componente filho estiver carregando, o Next.js exibirá o conteúdo do arquivo loading.js até que o carregamento seja concluído."
          codigo1={`// Exemplo 1: Loading Simples
"use client";

export default function Loading() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <p>Carregando...</p>
    </div>
  );
}`}
          codigo2={`// Exemplo 2: Loading com Spinner
"use client";

export default function Loading() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{
        width: "50px",
        height: "50px",
        border: "5px solid #ccc",
        borderTop: "5px solid #007BFF",
        borderRadius: "50%",
        animation: "spin 1s linear infinite"
      }} />
      <style jsx>{\`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      \`}</style>
    </div>
  );
}`}
          mostrarCodigos={cardAberto === 1}
          onSaibaMais={() => handleSaibaMais(1)}
          ativo={cardAberto === 1}
        />
        <PesquisaComSaibaMais
          id={2}
          titulo="Not-Found.js"
          titulo1="Função"
          conteudo1="O arquivo not-found.js no Next.js é usado para renderizar uma página personalizada quando uma rota não é encontrada. Ele substitui o erro padrão de 404 do navegador e permite criar uma interface amigável para o usuário."
          titulo2="Uso"
          conteudo2="O arquivo not-found.js é automaticamente detectado pelo Next.js quando uma rota inválida é acessada. Ele pode ser usado para exibir mensagens personalizadas, links para navegação ou qualquer outro conteúdo que ajude o usuário a retornar para uma página válida."
          codigo1={`// Exemplo 1: Página Simples
"use client";

export default function NotFound() {
  return (
    <div>
      <h1>Página Não Encontrada</h1>
      <p>Desculpe, não conseguimos encontrar a página que você está procurando.</p>
    </div>
  );
}`}
          codigo2={`// Exemplo 2: Com Link de Navegação
"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Página Não Encontrada</h1>
      <p>Desculpe, não conseguimos encontrar a página que você está procurando.</p>
      <Link href="/">
        <a>Voltar para a Página Inicial</a>
      </Link>
    </div>
  );
}`}
          mostrarCodigos={cardAberto === 2}
          onSaibaMais={() => handleSaibaMais(2)}
          ativo={cardAberto === 2}
        />
        <PesquisaComSaibaMais
          id={3}
          titulo="Error.js e Global-error.js"
          titulo1="error.js"
          conteudo1={`
A função do error.js no Next.js (App Router) é tratar erros específicos que acontecem dentro de uma rota ou componente. Quando algum erro ocorre nessa rota, o error.js permite exibir uma interface personalizada de erro, sem que o problema afete outras partes da aplicação. Isso ajuda a fornecer um feedback claro e localizado para o usuário, mantendo o restante da aplicação funcionando normalmente.`}
          titulo2="global-error.js"
          conteudo2={`O arquivo global-error.js captura erros globais da aplicação que não são tratados por arquivos error.js locais. Ele funciona como fallback para evitar quebras completas, exibindo uma tela de erro amigável em falhas críticas no layout global ou página inicial.`}
          codigo1={`// app/products/[id]/error.js
'use client';

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Erro ao carregar o produto!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Tentar novamente</button>
    </div>
  );
}`}
          codigo2={`// app/global-error.js
'use client';

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Erro inesperado!</h2>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Tentar novamente</button>
      </body>
    </html>
  );
}`}
          mostrarCodigos={cardAberto === 3}
          onSaibaMais={() => handleSaibaMais(3)}
          ativo={cardAberto === 3}
        />
        <PesquisaComSaibaMais
          id={4}
          titulo="Layout.js"
          titulo1="Função"
          conteudo1="O arquivo layout.js no Next.js é usado para definir layouts que podem ser aplicados globalmente ou por rota. Ele permite criar uma estrutura consistente para páginas, como cabeçalhos, rodapés e barras de navegação. Veja no Código 1."
          titulo2="Uso"
          conteudo2="O arquivo layout.js pode ser colocado na raiz do diretório `app` para aplicar um layout global ou dentro de uma pasta de rota para aplicar um layout específico para aquela rota. Veja no Código 2."
          codigo1={`// Código 1: Layout Global
"use client";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <header style={{ background: "#007BFF", color: "#fff", padding: "10px", textAlign: "center" }}>
          <h1>Meu Layout Global</h1>
        </header>
        <main>{children}</main>
        <footer style={{ background: "#333", color: "#fff", padding: "10px", textAlign: "center" }}>
          <p>© 2025 Minha Aplicação</p>
        </footer>
      </body>
    </html>
  );
}`}
          codigo2={`// Código 2: Layout por Rota
"use client";

export default function RotaEspecificaLayout({ children }) {
  return (
    <div style={{ border: "2px solid #007BFF", padding: "20px", borderRadius: "8px" }}>
      <header style={{ background: "#28a745", color: "#fff", padding: "10px", textAlign: "center" }}>
        <h1>Layout da Rota Específica</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}`}
          mostrarCodigos={cardAberto === 4}
          onSaibaMais={() => handleSaibaMais(4)}
          ativo={cardAberto === 4}
        />
        <PesquisaComSaibaMais
          id={5}
          titulo="Page.js"
          titulo1="Função"
          conteudo1="O arquivo page.js no Next.js é usado para definir o conteúdo principal de uma rota. Ele é automaticamente detectado pelo Next.js e renderizado como a página correspondente à rota onde está localizado. Veja no Código 1."
          titulo2="Uso"
          conteudo2="O arquivo page.js deve ser colocado dentro de uma pasta de rota no diretório `app`. Ele é responsável por renderizar o conteúdo da página e pode incluir componentes, dados dinâmicos e lógica específica para a rota. Veja no Código 2."
          codigo1={`// Código 1: Página Simples
"use client";

export default function Page() {
  return (
    <div>
      <h1>Bem-vindo à Página Principal</h1>
      <p>Esta é uma página simples criada com o arquivo page.js.</p>
    </div>
  );
}`}
          codigo2={`// Código 2: Página com Dados Dinâmicos
"use client";

export default function Page({ params }) {
  return (
    <div>
      <h1>Bem-vindo à Página de Produto</h1>
      <p>Você está visualizando o produto com ID: {params.id}</p>
    </div>
  );
}`}
          mostrarCodigos={cardAberto === 5}
          onSaibaMais={() => handleSaibaMais(5)}
          ativo={cardAberto === 5}
        />
      </div>

      <div className={pageStyles.footerSection}>
        <h3 className={pageStyles.footerTitle}>
          Continue Aprendendo
        </h3>
        <p className={pageStyles.footerDescription}>
          Estes arquivos especiais são a base para construir aplicações robustas com Next.js. 
          Pratique implementando cada um deles em seus projetos!
        </p>
        <div className={pageStyles.footerTags}>
          {['Loading.js', 'Not-Found.js', 'Error.js', 'Layout.js', 'Page.js'].map((file, index) => (
            <span
              key={index}
              className={pageStyles.footerTag}
            >
              {file}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default PageJu;