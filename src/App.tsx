import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LucasGaudard from './assets/LucasGaudard.jpeg'
import Skills from "./Componentes/skills"

/* Logo component (SVG inline) */
const Logo: React.FC = () => (
  <div className="logo-wrapper" aria-hidden>
    <svg width="36" height="36" viewBox="0 0 100 100" className="logo-svg" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="88" height="88" rx="14" fill="#0f0f13" stroke="#2a243f" strokeWidth="4" />
      <path d="M30 68 L44 32 L58 68 Z" fill="#6f4cff" opacity="0.95" />
      <circle cx="74" cy="32" r="10" fill="#6f4cff" />
    </svg>

    <div className="logo-text">
      <span className="logo-name">Gaudard</span>
      <span className="logo-dev"> Dev</span>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Container fluid className="app-container p-0">
      {/* NAVBAR */}
      <Navbar expand="lg" className="navbar-custom sticky-top"> {/*sticky-top → navbar fica fixa ao rolar.*/}
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
            <Logo />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler-custom" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-3 nav-links">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#sobre">Sobre</Nav.Link>
              <Nav.Link href="#habilidades">Habilidades</Nav.Link>
              <Nav.Link href="#projetos">Projetos</Nav.Link>
              <Nav.Link href="#contato">Contato</Nav.Link>
              <Nav.Link
                href="https://www.canva.com/design/DAGCgQkCGHA/M85zMymAJzjR4O3jcTEzQg/view?utm_content=DAGCgQkCGHA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1207284283"
                target="_blank"
                rel="noreferrer"
                className="nav-cv"
              >
                Currículo
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* HOME */}
      <section id="home" className="home-section">
        <div className="hero-inner">
          <div className="hero-text">
            <h1 className="hero-title">Olá, eu sou <span className="hero-name">Lucas Gaudard</span></h1>
            <h2 className="hero-subtitle">Desenvolvedor Front-End • React/Angular & TypeScript</h2>

            <p className="hero-desc">
              Eu construo interfaces rápidas, acessíveis e elegantes. Trabalho com React, Angular, TypeScript e boas práticas para transformar ideias em produtos.
            </p>

            <div className="hero-ctas">
              <a href="#projetos" className="btn-primary">Ver projetos</a>
              <a href="#contato" className="btn-ghost">Contato</a>
            </div>
          </div>

          <div className="hero-card">
            <div className="code-mockup">
              <div className="code-header">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <pre className="code-block">
                {`// Exemplo
function sayHi() {
  console.log("Olá, mundo!");
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="section">
        <h2 className="section-title">Sobre mim</h2>
        <div className='about-gridimg about-card'>
          <img
            src={LucasGaudard}
            alt="Foto de Lucas Gaudard"
            style={{
              width: '220px',
              borderRadius: '20px',
            }}
          />

        </div>
        <p className="section-text">
          Sou estudante de Engenharia de Software e desenvolvedor front-end com foco em React, Angular, TypeScript e boas práticas. Tenho experiência na criação de interfaces modernas, responsivas e acessíveis, sempre priorizando performance, escalabilidade e uma UX bem pensada.
          Gosto de unir lógica com visão de produto, criando soluções que realmente resolvem problemas.
          Sou disciplinado com organização, componentização e versionamento, além de possuir conhecimentos em Node.js e APIs REST, o que me ajuda a entender o fluxo completo das aplicações.
          Tenho facilidade em trabalhar em equipe, comunicar ideias e me adaptar rapidamente. Busco constantemente evoluir e contribuir em projetos que valorizam inovação e qualidade de código.
        </p>
        <div className="about-grid">
          <div className="about-card">
            <h3>Educação</h3>
            <p>Engenharia de Software (em andamento)</p>
          </div>
          <div className="about-card">
            <h3>Experiência</h3>
            <p>Projetos pessoais e freelas: SPA, APIs e integrações.</p>
          </div>
          <div className="about-card">
            <h3>Objetivo</h3>
            <p>Atuar como Front-End, focado em React/Angular/TypeScript e acessibilidade.</p>
          </div>
        </div>
      </section>

      {/* HABILIDADES */}
      <Skills />

      {/* PROJETOS */}
      <section id="projetos" className="section">
        <h2 className="section-title">Projetos</h2>

        <div className="projects-grid">
          <article className="project-card">
            <div className="project-meta">Fullstack • React + Typescript + Bootstrap</div>
            <h3>Smile-Burguer</h3>
            <p>App de gerenciamento para hamburgueria com painel de produtos, autenticação e CRUD.</p>
            <div className="project-actions">
              <a className="btn-secondary" href="https://github.com/LucasGaudard/Smile-Burguer.git" target="_blank" rel="noreferrer">Repositório</a>
              <a className="btn-ghost" href="http://localhost:5174/" target="_blank" rel="noreferrer">Aplicação</a>
            </div>
          </article>

          <article className="project-card">
            <div className="project-meta">Front-End • Angular + Typescript + Bootstrap </div>
            <h3>Smile-Tour </h3>
            <p>Smile-Tour é um sistema de reservas de passeios criado com foco em praticidade, design limpo e experiência do usuário. O projeto une frontend moderno com lógica eficiente, mostrando minha evolução como desenvolvedor.</p>
            <div className="project-actions">
              <a className="btn-secondary" href="https://github.com/LucasGaudard/Projeto-Smiletour.git" target="_blank" rel="noreferrer">Repositório</a>
              <a className="btn-ghost" href="http://localhost:4200/" target="_blank" rel="noreferrer">Aplicação</a>
            </div>
          </article>

          <article className="project-card">
            <div className="project-meta">Front-End • HTML + CSS + Javascript </div>
            <h3>Formulário de Cadastro</h3>
            <p>Formulário de Cadastro desenvolvido com HTML, CSS e JavaScript, destacando responsividade e validações em tempo real através da manipulação do DOM.</p>
            <div className="project-actions">
              <a className="btn-secondary" href="https://github.com/LucasGaudard/Formul-rio-de-Cadastro-Responsivo.git" target="_blank" rel="noreferrer">Repositório</a>
              <a className="btn-ghost" href="http://127.0.0.1:5500/index.html" target="_blank" rel="noreferrer">Aplicação</a>
            </div>
          </article>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="section section-contact">
        <h2 className="section-title">Vamos conversar?</h2>
        <p className="section-text">Me chama para trabalhar juntos ou trocar ideias.</p>

        <div className="contact-grid">
          <a href="mailto:https://mail.google.com/mail/?view=cm&fs=1&to=Lucasgaudard07@gmail.com" className="contact-card">📩 Lucasgaudard07@gmail.com</a>
          <a href="https://github.com/LucasGaudard?tab=repositories" target="_blank" rel="noreferrer" className="contact-card">💻 GitHub</a>
          <a href="https://www.linkedin.com/in/lucas-gaudard07" target="_blank" rel="noreferrer" className="contact-card">🔗 LinkedIn</a>
        </div>

        <p className="footer-note">© {new Date().getFullYear()} Gaudard Dev — Desenvolvedor Front-End</p>
      </section>
    </Container>
  );
};

export default App;
