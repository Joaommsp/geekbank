import Header from "../../components/Header";
import Footer from "../../components/Footer";

import instagramIcon from "../../assets/images/icons/instagram-icon-red.svg";
import linkedinIcon from "../../assets/images/icons/linkedin-icon-red.svg";
import gitHubIcon from "../../assets/images/icons/github-icon-red.svg";

import logo from "../../assets/images/logojoao-hd.png";

import { AboutMeContainer } from "./styles";

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <Header />
      <div className="hero">
        <div className="heroTextContainer">
          <h1>
            Olá, eu sou um{" "}
            <strong>Desenvolvedor FrontEnd & Web Designer</strong>
          </h1>
          <p>
            Transforme suas ideias em realidade com design e desenvolvimento
            web! Você precisa de um site que se destaque e ofereça uma
            experiência incrível aos seus usuários? Eu sou João, um
            desenvolvedor FrontEnd e Designer Web apaixonado por criar
            interfaces digitais inovadoras e atraentes.
          </p>
          <a href="" className="portfolioLink">
            Meu portófio
          </a>
          <div className="socialLinks">
            <a href="">
              <img src={instagramIcon} alt="" />
            </a>
            <a href="">
              <img src={linkedinIcon} alt="" />
            </a>
            <a href="">
              <img src={gitHubIcon} alt="" />
            </a>
          </div>
        </div>
        <div className="heroLogoContainer">
          <img src={logo} alt="" className="logojoao" />
        </div>
      </div>
      <Footer />
    </AboutMeContainer>
  );
};

export default AboutMe;
