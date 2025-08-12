import Header from "../../componentes/Header/Header";
import styles from "./page.module.css";

export default function NextJs15Page() {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <h1 className={styles.titulo}>Next.js 15</h1>

                {/* Card: Ponto Forte */}
                <div className={styles.card}>
                    <h2 className={styles.subtitulo}>→ Ponto Forte:</h2>
                    <p className={styles.paragrafo}>
                        <strong>Suporte completo ao React 19:</strong> O Next.js 15 oferece compatibilidade total com o React 19, incluindo novos hooks como <code>useActionState</code>, <code>useOptimistic</code>, <code>useFormStatus</code>, e o experimental React Compiler.
                    </p>
                    <p className={styles.paragrafo}>
                        <strong>Novos recursos para formulários e navegação:</strong> Inclusão do componente <code>&lt;Form&gt;</code> (<code>next/form</code>), que oferece prefetch, navegação client-side e aprimoramentos progressivos — garantindo funcionamento mesmo sem JavaScript.
                    </p>
                </div>

                {/* Card: Novidades em relação às versões anteriores */}
                <div className={styles.card}>
                    <h2 className={styles.subtitulo}>→ Novidades em relação às versões anteriores:</h2>
                    <p className={styles.paragrafo}>
                        <strong>Novo sistema de cache:</strong> Agora, por padrão, o <code>fetch()</code> no servidor não utiliza cache (<code>no-store</code>). Caso queira manter o cache, o desenvolvedor precisa configurá-lo explicitamente usando <code>force-cache</code>.
                    </p>
                    <p className={styles.paragrafo}>
                        <strong>Partial Prerendering (PPR):</strong> Renderiza parte da página estaticamente e outra parte dinamicamente. Melhora o tempo de carregamento inicial, mesmo em páginas com conteúdo dinâmico.
                    </p>
                </div>

                {/* Card: Curiosidades */}
                <div className={styles.card}>
                    <h2 className={styles.subtitulo}>→ Curiosidades:</h2>
                    <p className={styles.paragrafo}>
                        <strong>Server Actions estáveis – adeus às rotas API tradicionais:</strong> As Server Actions agora são estáveis. Elas permitem executar lógica no servidor diretamente a partir do cliente, simplificando bastante tarefas como formulários e atualizações de dados, sem necessidade de criar rotas API.
                    </p>
                    <p className={styles.paragrafo}>
                        <strong>Indicador visual de rotas estáticas no modo Dev:</strong> Em ambiente de desenvolvimento, você verá um indicador visual que mostra se uma rota é estática ou dinâmica — ótimo para auditoria e otimização.
                    </p>
                </div>

                {/* Card: Empresas usuárias */}
                <div className={styles.card}>
                    <h2 className={styles.subtitulo}>→ Empresas usuárias que utilizam o Next.js:</h2>
                    <p className={styles.paragrafo}>
                        <strong>Netflix:</strong> A equipe utiliza Next.js para páginas estáticas e híbridas que carregam rapidamente e oferecem boa indexação no Google (SEO), algo crucial para páginas de divulgação de séries e lançamentos.
                    </p>
                    <p className={styles.paragrafo}>
                        <strong>Nike:</strong> O site de produtos e campanhas especiais é feito com Next.js para suportar alto tráfego em lançamentos (como novos tênis). A performance do framework evita quedas durante picos de acesso e melhora conversões, já que as páginas carregam rápido no celular.
                    </p>
                    <p className={styles.paragrafo}>
                        <strong>TikTok:</strong> A plataforma web do TikTok utiliza Next.js para a versão desktop, permitindo navegação fluida, carregamento rápido e SEO otimizado para páginas de criadores e vídeos.
                    </p>
                </div>

                {/* Card: Áreas de atuação */}
                <div className={styles.card}>
                    <h2 className={styles.subtitulo}>→ Áreas de atuação do Next.js:</h2>
                    <p className={styles.paragrafo}>
                        <strong>E-commerce e Varejo Online:</strong> Sites e lojas virtuais que precisam de carregamento rápido, bom SEO e estabilidade em picos de acesso.
                    </p>
                    <p className={styles.paragrafo}>
                        <strong>Streaming e Mídia Digital:</strong> Plataformas que entregam conteúdo multimídia com alto desempenho e renderização otimizada.
                    </p>
                    <p className={styles.paragrafo}>
                        <strong>Tecnologia Financeira:</strong> Sites de pagamentos, bancos digitais e carteiras virtuais que exigem segurança e performance.
                    </p>
                </div>

                {/* Card: Oportunidades */}
                <div className={styles.card}>
                    <h2 className={styles.subtitulo}>→ Oportunidades que o Next.js oferece:</h2>
                    <p className={styles.paragrafo}>
                        <strong>Otimização de performance:</strong> Mais conversões e retenção de usuários.
                    </p>
                    <p className={styles.paragrafo}>
                        <strong>Escalabilidade global:</strong> Integração fácil com CDN e deploy em edge.
                    </p>
                    <p className={styles.paragrafo}>
                        <strong>SEO aprimorado:</strong> Essencial para negócios que dependem de tráfego orgânico.
                    </p>
                    <p className={styles.paragrafo}>
                        <strong>Custos reduzidos:</strong> Páginas estáticas pré-geradas economizam recursos de servidor.
                    </p>
                </div>
            </div>
        </div>
    );
}