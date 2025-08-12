import styles from './bibliotecas.module.css';
import Header from '@/componentes/Header/Header';
import React from 'react';
import Card from '@/componentes/Card/Card';


export default function Bibliotecas() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <h1 className={styles.title}>Bibliotecas de UI para React</h1>
                <div className={styles.line}></div>
                <div className={styles.cards}>
                    <Card
                        titulo="O que são?"
                        info="Bibliotecas de UI para React trazem componentes prontos, como botões, formulários e modais, para facilitar a criação de interfaces. Assim, você ganha tempo, mantém o visual consistente e ainda simplifica a manutenção do seu projeto."
                    />
                    <Card
                        titulo="MUI (Material UI)"
                        info={
                            <>
                             <strong>O que é:</strong> Biblioteca baseada no Material Design do Google. <br />
                                <strong>Prós:</strong> Flexível, documentação completa, fácil de personalizar.<br />
                                <strong>Contras:</strong> Visual pode ficar genérico se não for customizado.<br />
                                <strong>Empresas que usam:</strong> Spotify, NASA.
                            </>
                        }
                    />
                    <Card
                        titulo="Chakra UI"
                        info={
                            <>
                                <strong>O que é:</strong> Biblioteca acessível, modular e com theming fácil. <br />
                                <strong>Prós:</strong> Fácil de usar, acessível, boa produtividade, visual bonito.<br />
                                <strong>Contras:</strong> Menos popular que outras, menos componentes prontos.<br />
                                <strong>Empresas que usam:</strong> Mozilla, Segment.
                            </>
                        }

                    />

                    <Card
                        titulo="Ant Design (AntD)"
                        info={
                            <>
                                <strong>O que é:</strong> Biblioteca rica em componentes, voltada a sistemas empresariais. <br />
                                <strong>Prós:</strong> Ótima para dashboards complexos, suporte a multilínguas e design tokens.<br />
                                <strong>Contras:</strong> Visual corporativo pesado.<br />
                                <strong>Empresas que usam:</strong> Alibaba, Tencent, Baidu, Xiaomi, Shopify.
                            </>
                        }
                        
                    />

                     <Card
                        titulo="Bootstrap React"
                        info={
                            <>
                                <strong>O que é:</strong> Biblioteca de fácil utilização para criar interfaces responsivas. <br />
                                <strong>Prós:</strong> Flexível, fácil de usar, com suporte total para os principais componentes do Bootstrap (como Grid, Jumbotron, Navbar).<br />
                                <strong>Contras:</strong> O estilo “Bootstrap” pode ser percebido como antiquado e limitado quando comparado a bibliotecas mais modernas.<br />
                                <strong>Empresas que usam:</strong> Twitter, LinkedIn, Uber.
                            </>
                        }
                        
                    />

                     <Card
                        titulo="Tailwind UI (com Tailwind CSS)"
                        info={
                            <>
                                <strong>O que é:</strong> Biblioteca de componentes utilitários para construção de interfaces. <br />
                                <strong>Prós:</strong> Leve, altamente customizável, baseado no conceito de utility-first, com uma abordagem minimalista e poderosa.<br />
                                <strong>Contras:</strong> Pode ser difícil de começar se você não tiver familiaridade com Tailwind CSS.<br />
                                <strong>Empresas que usam:</strong> Netflix, GitHub, Apple.
                            </>
                        }
                        
                    />

                    <Card
                        titulo="Resumo"
                        info=
                           "Em resumo se você busca praticidade e fácil estilização em seu projeto as bibliotecas irão te auxiliar muito facilitando a sua vida😉"
                    />
                </div>
            </div>
        </>
    );
}
