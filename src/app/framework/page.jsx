import styles from "./framework.module.css";
import Header from "../../componentes/Header/Header";
import Card from "../../componentes/Card/Card";

export default function Framework() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <h1>FrameWorks</h1>

        {/* Primeira linha de cards */}
        <div className={styles.cards}>
          <Card
            titulo="1. Definição"
            info={
              <>
                <span>
                  Um framework é uma estrutura de software reutilizável composta por ferramentas, bibliotecas e componentes predefinidos.
                </span>

                <span>
                  Ele serve como base para o desenvolvimento de aplicações, oferecendo padrões e funcionalidades prontas para facilitar e acelerar o trabalho do desenvolvedor.
                </span>
                <span>
                  É como um modelo pronto que orienta a construção de um sistema, evitando a necessidade de criar tudo do zero.
                </span>
              </>
            }
          />

          <Card
            titulo="2. Tipos de Frameworks"
            info={
              <>
                <strong>1. Frameworks Web:</strong> Django, Laravel, Express.js, Ruby on Rails
                <strong>2. Mobile:</strong> Flutter, React Native, Ionic
                <strong>3. Front-end:</strong> React.js, Vue.js, Angular
                <strong>4. Back-end:</strong> Spring Boot, Express.js, ASP.NET
                <strong>5. Data Science/IA:</strong> TensorFlow, PyTorch, Scikit-learn
              </>
            }
          />

          <Card
            titulo="3. Prós e Contras"
            info={
              <>
                <strong>Prós:</strong>
                <span>• Aumento da produtividade</span>
                <span>• Organização do código</span>
                <span>• Comunidade ativa</span>
                <span>• Segurança embutida</span>
                <span>• Manutenção facilitada</span>

                <strong>Contras:</strong>
                <span>• Curva de aprendizado</span>
                <span>• Menor flexibilidade</span>
                <span>• Pode ser pesado para apps simples</span>
                <span>• Dependência de atualizações</span>
              </>
            }
          />
        </div>

        <div className={styles.cards2}>
          <Card
            titulo="4. Funcionalidades"
            info={
              <>
                <span>• Roteamento</span>
                <span>• ORM (Mapeamento Objeto-Relacional)</span>
                <span>• Sistema de autenticação</span>
                <span>• Middlewares</span>
                <span>• Templating</span>
                <span>• Gerenciamento de URLs</span>
              </>
            }
          />

          <Card
            titulo="5. Recursos Adicionais"
            info={
              <>
                <span>• CLI (Interface de Linha de Comando)</span>
                <span>• Testes integrados</span>
                <span>• Gerenciamento de dependências</span>
                <span>• Modularidade e extensibilidade</span>
              </>
            }
          />

          <Card
            titulo="6. Mercado e Oportunidades"
            info={
              <>
                <span>• Muito utilizados em empresas, startups e freelas</span>
                <span>• Valorizados no mercado de trabalho</span>
                <span>• Exigência comum em vagas de dev</span>
                <span>• Ajudam no desenvolvimento rápido de MVPs</span>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}
