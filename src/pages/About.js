import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { Icon } from '@iconify/react';
import hardSkillsIcons from '../data/hardSkillsIcons';
import image from '../assets/portfolio-img.jpg';

import Header from '../components/Header';
import SocialMedia from '../components/SocialMedia';

import '../styles/pages/about.scss';


export default class About extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    return (
      <div className="all-about">
        <Header />
        <section className="about">
          <div className="about-header-text-skills" >
            
            <div className="about-text-skills">
            <section className="about-text">
                <p className="about-text-p about-text-p-1">Olá, </p>
                
                <p className="about-text-p about-text-p-2">meu nome é <span>Emanuel Ferreira</span></p>
                
                <p className="about-text-p about-text-p-3">Sou desenvolvedor com sólida experiência em tecnologias <span>web e mobile</span>, com forte atuação em projetos que exigem integração entre <span>frontend, backend e infraestrutura.</span></p>
                
                <p className="about-text-p about-text-p-3">Minha trajetória inclui desde o desenvolvimento de sistemas completos com <span>React</span>, <span>Node.js</span> e <span>Firebase</span>, até a criação de soluções personalizadas com <span>VBA</span>, <span>C#</span>, <span>PostgreSQL</span> e <span>Power BI</span>.</p>
                
                <p className="about-text-p about-text-p-5">Tenho conhecimento avançado em infraestrutura (física e em nuvem), <span>APIs REST</span>, automações e integrações com ferramentas como <span>TOTVS Fluig</span>, <span>GCP</span> e <span>AWS</span>. Já atuei em diversos papéis, como desenvolvedor full stack, consultor técnico e coordenador de equipes, sempre com foco em entregar soluções funcionais, escaláveis e alinhadas às necessidades do cliente.</p>
                
                <p className="about-text-p about-text-p-5">Meu diferencial está na capacidade de unir visão técnica, agilidade e foco no resultado.</p>

                <p className="about-text-p about-text-p-6"><span>Sinta-se à vontade para me chamar para conversar!</span></p>
              </section>
              <div className="about-image">
            <img className="about-img" src={image} alt="profile" /> 
          </div>
              <section className="about-skills">
                <p className="about-skills-p">SKILLS</p>
                <div className="about-skill">
                {hardSkillsIcons.map((icon, index) => (
                    <div key={index} className="about-div-icon">
                      <Icon icon={icon.icon} className={icon.className} />
                    <p className='about-icon-text'>{icon.title}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            
          </div>
          
          <SocialMedia />
        </section>
        
      </div>
      
    )
  }
}


// export default class About extends Component {
//   render() {
//     return (
//       <div className='dark-background'>
//         <Header />

//         <main className="about">
        
//           <section className="about-intro">
//             <div className="about-text-section">
//               <p>Olá</p>
//               <p>meu nome é <span>Danielle Silva</span></p>
//               <p>Sou desenvolvedora <span>Front-end</span>, mas continuo como estudante da Trybe com o objetivo de me tornar uma desenvolvedora <span>Web Full Stack</span>.</p>
//               <p>Um pouco sobre minha história, sou <span>bióloga</span> por formação mas resolvi mudar minha vida e dar uma chance para a área da <span>tecnologia</span>, não contava que acabaria me apaixonando, sinto que realmente me encontrei.</p>
//               <p>Até o momento meu foco é <span>Front-end</span>, mas estou gostando de explorar os horizontes de Back-end também.</p>
//               <p>Espero que goste do meu portfólio!</p>
//             </div>
//             <img className="about-img" src={image} alt="profile" /> 
//           </section>
//           <div className="arrow">
//             <a href='#about' className="arrow-link arrow-point"></a>
            
//           </div>

//           <section className="about-skills" id='about'>
//             <div className="div-skills-title">
//               <p className="about-skills-title">Habilidade atuais</p>
//             </div>
          
//             <div className="about-both-skills-section about-div-hard-skills-icon-text">
//               <div className="about-skills-subtitle">
//                 <p className="about-title">Hard skills</p>
//               </div>
              
//               <div className="about-hard-skills">

//                 {hardSkillsIcons.map((icon) => (
//                   <div key={icon.id} className="about-div-icon-text">
//                     <Icon icon={icon.icon} className={icon.className} />
//                   <p>{icon.title}</p>
//                   </div>
//                 ))}       
//               </div>
//             </div>
            
//           </section>
          
//         </main>
//       </div>
      
//     )
//   }
// }
