import { FooterContainer } from "./styles";

import logo from "../../assets/images/geekbank-logo-white.png";

import instagramIcon from "../../assets/images/icons/instagram-icon.svg";
import linkedinIcon from "../../assets/images/icons/linkedin-icon.svg";
import gitHubIcon from "../../assets/images/icons/github-icon.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footerContent">
        <div className="logoContainer">
          <img src={logo} alt="" className="logo" />
        </div>
        <div className="LinksContainer">
          <div className="links">
            <ul>
              <li>
                <span className="linkTitle">Empresa</span>
              </li>
              <li>
                <a href="">Sobre nós</a>
              </li>
              <li>
                <a href="">Termos de uso</a>
              </li>
              <li>
                <a href="">Políticas de Privacidade</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">SAC</a>
              </li>
              <li>
                <a href="">Ouvidoria</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </div>
          <div className="links">
            <ul>
              <li>
                <span className="linkTitle">Precisa de ajuda?</span>
              </li>
              <li>
                <a href="">geekbankbrasil@sac.com</a>
              </li>
              <li>
                <a href="">0800 - 0000 - 1200</a>
              </li>
              <li>
                <span className="linkTitle">Redes sociais</span>
              </li>
              <li>
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
              </li>
            </ul>
          </div>
          <div className="links">
            <ul>
              <li>
                <span className="linkTitle">Endereço</span>
              </li>
              <li>
                <a href="" className="address">
                  Hogwarts Castle <br /> 45B{" "}
                </a>
              </li>
            </ul>
          </div>
          <span className="notice">
            Website developed by João Marcos for personal and non <br />{" "}
            -commercial purposes, follow me on social media
          </span>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
