import styles from "./framework.module.css";
import Header from "../../componentes/Header/Header";
import Card from "../../componentes/Card/Card";
import Image from "next/image";

export default function Framework() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <h1>FrameWorks</h1>

        <div className={styles.cards}>
          <Card
            titulo="1. Definição"
            info={<><strong>Framework</strong> é uma estrutura de software reutilizável que combina ferramentas, bibliotecas e componentes prontos para uso.</>}
            info2={<>Serve como base para desenvolvimento de aplicações, oferecendo padrões e funcionalidades que facilitam e aceleram o trabalho do desenvolvedor.</>}
            info3={<>Funciona como um <strong>modelo orientador</strong>, evitando a necessidade de criar tudo do zero.</>}
          />

          <Card
            titulo="2. Tipos de Frameworks"
            info={<><strong>Frameworks Web:</strong> Django, Laravel, Express.js, Ruby on Rails.</>}
            info2={<><strong>Mobile:</strong> Flutter, React Native, Ionic.</>}
            info3={<><strong>Front-end:</strong> React.js, Vue.js, Angular.</>}
            info4={<><strong>Back-end:</strong> Spring Boot, Express.js, ASP.NET.</>}
          />

          <Card
            titulo="3. Prós e Contras"
            info={<><strong>Prós:</strong> Maior produtividade, código organizado, comunidade ativa, segurança integrada e manutenção facilitada.</>}
            info2={<><strong>Contras:</strong> Curva de aprendizado acentuada, menor flexibilidade, possível impacto no desempenho para apps simples e dependência de atualizações.</>}
          />
        </div>

        <div className={styles.cards2}>
          <Card
            titulo="4. Funcionalidades"
            info={<>• <strong>Roteamento</strong> eficiente e intuitivo.</>}
            info2={<span>• <strong>ORM</strong> (Mapeamento Objeto-Relacional) para integração com bancos de dados.</span>}
            info3={<span>• <strong>Sistema robusto de autenticação</strong>.</span>}
            info4={<span>• <strong>Middlewares</strong>, templating e gerenciamento de URLs.</span>}
          />

          <Card
            titulo="5. Recursos Adicionais"
            info={<span>• <strong>CLI</strong> (Interface de Linha de Comando) para automatizar tarefas.</span>}
            info2={<span>• Testes integrados e gerenciamento de dependências.</span>}
            info3={<span>• Modularidade e alta extensibilidade para personalização.</span>}
          />

          <Card
            titulo="6. Mercado e Oportunidades"
            info={<span>• Amplamente adotados por empresas, startups e freelancers.</span>}
            info2={<span>• Profissionais com conhecimento em frameworks são altamente valorizados.</span>}
            info3={<span>• Facilitam o desenvolvimento rápido de MVPs e produtos escaláveis.</span>}
          />
        </div>
      </div>
    </div>
  );
}
