import styles from "./page.module.css";
import Header from "../componentes/Header/Header"
import Card from "../componentes/Card/Card";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.main}>
        <Card
        titulo="1. Definição"
        info="Um meta-framework é um framework que não parte do zero, mas sim constrói em cima de outro framework ou conjunto de bibliotecas, adicionando abstrações, ferramentas e padrões para facilitar o desenvolvimento."
        info2="Ele funciona como um framework de frameworks, oferecendo estrutura, convenções e integrações pré-configuradas."
        info3="Exemplo simples: enquanto um framework fornece tijolos, o meta-framework entrega a casa parcialmente pronta, com encanamento, energia e portas instaladas."
        />

        <Card
        titulo="2. Tipos"
        info="Podemos dividir em alguns tipos:"
        info2="Baseados em SPA frameworks
                Usam React, Vue ou Angular como base.
                Ex.: Next.js (React), Nuxt.js (Vue), SvelteKit (Svelte)."
        info3="Baseados em múltiplos frameworks
                Oferecem integração com mais de uma tecnologia.
                Ex.: RedwoodJS (React + GraphQL + Prisma)."
        info4="Especializados em nichos
                Focados em casos específicos como sites estáticos, e-commerce, blogs.
                Ex.: Gatsby (React, focado em sites rápidos), Blitz.js (apps full-stack)."
        /> 

        <Card
        titulo="3. Exemplos"
        info="Next.js → meta-framework baseado em React, usado para SSR, SSG e aplicações híbridas."
        info2="Nuxt.js → baseado em Vue, oferece SSR e geração estática."
        info3="SvelteKit → baseado em Svelte, para aplicações web modernas."
        info4="RedwoodJS → stack completa com React, GraphQL e Prisma."
        />

        <Card
        titulo="4. Prós e Contras"
        info="✅ Produtividade alta → muito já vem configurado."
        info2="✅ SEO melhorado → suporte a SSR/SSG."
        info3="❌ Curva de aprendizado se já domina apenas o framework base (React, Vue, etc.)."
        info4="❌ Menos liberdade → preso às convenções do meta-framework."
        />
      </div>

      <div className={styles.main}>
        <Card
        titulo="5. Funcionalidades principais"
        info="A maioria dos meta-frameworks modernos oferece:"
        info2="SSR (Server-Side Rendering) e/ou SSG (Static Site Generation)."
        info3="Roteamento automático baseado em arquivos."
        info4="Otimização de imagens e assets."
        />

<Card
        titulo="6. Uso no mercado e oportunidades"
        info="Mercado: empresas priorizam meta-frameworks para ganhar tempo no desenvolvimento, especialmente em projetos com SEO e performance críticas."
        info2="Oportunidades:"
        info3="Desenvolvimento de sites institucionais e landing pages otimizadas."
        info4="Aplicativos web complexos com backend integrado."
        />
      </div>
    </div>
  );
}
