import styles from "./page.module.css";
import Header from "../componentes/Header/Header"

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Mini Wiki Tech 🚀
          </h1>
          <p className={styles.heroDescription}>
            Explore o mundo da tecnologia com nossa equipe especializada em pesquisa e desenvolvimento. 
            Descobrimos, testamos e compartilhamos as melhores práticas em frameworks, bibliotecas e ferramentas modernas.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>5+</span>
              <span className={styles.statLabel}>Tecnologias</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>20+</span>
              <span className={styles.statLabel}>Projetos</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Dedicação</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.teamSection}>
        <h2 className={styles.sectionTitle}>Equipe de Pesquisadores 🕵🏾‍♂️</h2>
        <p className={styles.sectionSubtitle}>
          Conheça nossa equipe de desenvolvedores apaixonados por tecnologia
        </p>
        
        <div className={styles.main}>

        <div className={styles.perfil}>
          <div className={styles.perfilCard}>
            <img src="https://avatars.githubusercontent.com/u/158209610?v=4" alt="Bernardo" />
            <div className={styles.perfilInfo}>
              <h3>Bernardo</h3>
              <p className={styles.perfilRole}>Full Stack Developer</p>
              <div className={styles.perfilTechs}>
                <span>React Native</span>
                <span>CSS</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.perfil}>
          <div className={styles.perfilCard}>
            <img src="https://avatars.githubusercontent.com/u/197772966?v=4" alt="Caio" />
            <div className={styles.perfilInfo}>
              <h3>Caio</h3>
              <p className={styles.perfilRole}>Frontend Specialist</p>
              <div className={styles.perfilTechs}>
                <span>React Native</span>
                <span>CSS</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.perfil}>
          <div className={styles.perfilCard}>
            <img src="https://avatars.githubusercontent.com/u/158210661?v=4" alt="Julia" />
            <div className={styles.perfilInfo}>
              <h3>Julia</h3>
              <p className={styles.perfilRole}>Next.js Expert</p>
              <div className={styles.perfilTechs}>
                <span>React Native</span>
                <span>CSS</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.perfil}>
          <div className={styles.perfilCard}>
            <img src="https://avatars.githubusercontent.com/u/158209483?v=4" alt="Kevin" />
            <div className={styles.perfilInfo}>
              <h3>Kevin</h3>
              <p className={styles.perfilRole}>Backend Engineer</p>
              <div className={styles.perfilTechs}>
                <span>React Native</span>
                <span>CSS</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.perfil}>
          <div className={styles.perfilCard}>
            <img src="https://avatars.githubusercontent.com/u/158210596?v=4" alt="Luiza" />
            <div className={styles.perfilInfo}>
              <h3>Luiza</h3>
              <p className={styles.perfilRole}>UX/UI Designer</p>
              <div className={styles.perfilTechs}>
                <span>React Native</span>
                <span>CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Explore Nossas Pesquisas</h2>
          <p>Descubra frameworks, meta-frameworks, bibliotecas e as mais recentes novidades do Next.js</p>
          <div className={styles.ctaButtons}>
            <a href="/framework" className={styles.ctaButton}>
              🛠️ Frameworks
            </a>
            <a href="/meta-framework" className={styles.ctaButton}>
              ⚡ Meta-frameworks
            </a>
            <a href="/bibliotecas" className={styles.ctaButton}>
              🎨 Bibliotecas
            </a>
            <a href="/app-router" className={styles.ctaButton}>
              🚀 App Router
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
