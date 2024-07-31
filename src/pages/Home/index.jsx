import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "../../components/Header";
import BenefitCard from "../../components/BenefitCard";
import FeedBackCard from "../../components/Feedbackcard";
import Footer from "../../components/Footer";

import appleIcon from "../../assets/images/icons/apple-icon.svg";
import androidIcon from "../../assets/images/icons/android-icon.svg";
import satisfactionImage from "../../assets/images/satisfaction.png";
import mockUp01 from "../../assets/images/geekbank-app-mockup01.png";
import mockUp02 from "../../assets/images/geekbank-app-mockup02.png";

import userCheck from "../../assets/images/icons/user-check.svg";
import security from "../../assets/images/icons/security-icon.svg";
import transfer from "../../assets/images/icons/transfer-icon.svg";

import clock from "../../assets/images/icons/clock-icon.svg";
import xboxControl from "../../assets/images/icons/xbox-control-icon.svg";
import appleIconRed from "../../assets/images/icons/apple-icon-red.svg";
import androidIconRed from "../../assets/images/icons/android-icon-red.svg";

import cardRed from "../../assets/images/cardRed.png";
import cardBlack from "../../assets/images/cardBlack.png";

import steam from "../../assets/images/icons/steam-icon.svg";
import xbox from "../../assets/images/icons/xbox-icon.svg";
import epic from "../../assets/images/icons/epic-icon.svg";
import playstation from "../../assets/images/icons/playstation-icon.svg";

import likeHeart from "../../assets/images/icons/like-heart-icon.svg";
import star from "../../assets/images/icons/star-icon.svg";

import appleIconWhite from "../../assets/images/icons/apple-icon-white.svg";
import googlePlayIcon from "../../assets/images/icons/googleplay-icon.svg";

import vwLogo from "../../assets/images/partners/volkswagen-svgrepo-com.png";
import aiLogo from "../../assets/images/partners/american-airlines-svgrepo-com.png";
import bmwLogo from "../../assets/images/partners/bmw-logo-logo-svgrepo-com.png";
import metaLogo from "../../assets/images/partners/meta-svgrepo-com.png";
import steamLogo from "../../assets/images/partners/steam-svgrepo-com.png";
import slackLogo from "../../assets/images/partners/slack-svgrepo-com.png";

import logoJoao from "../../assets/images/logoJoao.png";

import {
  HomeContainer,
  HeroContainer,
  BenefitsContainer,
  AboutAppContainer,
  CredicardsContainer,
  AppFeedBackContainer,
  DownloadAreaContainer,
  ParternsContainer,
  MyLink,
} from "./styles";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const scrollableRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const cardRedRef = useRef(null);
  const cardBlackRef = useRef(null);

  useEffect(() => {
    gsap.utils.toArray(".benefitsContainer").forEach((item) => {
      gsap.fromTo(
        item,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 40%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const handleMouseDown = (e) => {
    const scrollable = scrollableRef.current;
    setIsDown(true);
    setStartX(e.pageX - scrollable.offsetLeft);
    setScrollLeft(scrollable.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const scrollable = scrollableRef.current;
    const x = e.pageX - scrollable.offsetLeft;
    const walk = (x - startX) * 2; // *2 for faster scrolling
    scrollable.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    gsap.utils
      .toArray(".mockUpcontainer, .aboutAppTextContainer")
      .forEach((item) => {
        gsap.fromTo(
          item,
          { y: -100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: item,
              start: "top 40%",
              toggleActions: "play none none none",
            },
          }
        );
      });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      cardRedRef.current,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: cardRedRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      cardBlackRef.current,
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: cardBlackRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.utils
      .toArray(
        ".appFeedBackTitle, .appFeedBackAbout, .feedBackCardsContainer, .dowloadContainer"
      )
      .forEach((item) => {
        gsap.fromTo(
          item,
          { y: -100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: item,
              start: "top 40%",
              toggleActions: "play none none none",
            },
          }
        );
      });
  }, []);

  return (
    <HomeContainer>
      <Header />
      <HeroContainer>
        <div className="heroTextContainer">
          <h3>Simples, seguro e conveniente</h3>
          <h1>Level UP</h1>
          <h2>
            Nas suas compras online com o <br /> <strong>Geekbank.</strong>
          </h2>
          <div className="downloadTheApp">
            <img src={appleIcon} alt="" />
            <img src={androidIcon} alt="" />
            <a href="">Baixe o App</a>
          </div>
          <img src={satisfactionImage} alt="" className="satisfactionImage" />
        </div>
        <div className="heroImageContainer">
          <img src={mockUp01} alt="" className="geekBankMockUp01" />
        </div>
      </HeroContainer>
      <BenefitsContainer className="benefitsContainer">
        <h2 className="benefitsTitle">Nossos Benefícios</h2>
        <div className="benetitsCardsContainer">
          <BenefitCard
            className="benefitCard
            "
            icon={userCheck}
            bgColor="#2F4149"
            title="Gerenciamento de contas facilitado"
            content="Soluções inovadoras projetadas para simplificar a vida financeira dos usuários."
            contentColor="#B4B4B4"
          />
          <BenefitCard
            className="benefitCard
            "
            icon={security}
            bgColor="#FA3441"
            title="Gerenciamento de contas facilitado"
            content="Soluções inovadoras projetadas para simplificar a vida financeira dos usuários."
            contentColor="#FDFDFD"
          />
          <BenefitCard
            className="benefitCard
            "
            icon={transfer}
            bgColor="#2F4149"
            title="Gerenciamento de contas facilitado"
            content="Soluções inovadoras projetadas para simplificar a vida financeira dos usuários."
            contentColor="#B4B4B4"
          />
        </div>
      </BenefitsContainer>
      <AboutAppContainer>
        <div className="mockUpcontainer">
          <img src={mockUp02} alt="" className="mockUpAboutApp" />
        </div>
        <div className="aboutAppTextContainer">
          <div className="iconsContainer">
            <div className="iconContainer">
              <img src={clock} alt="" className="icon" />
            </div>
            <div className="iconContainer">
              <img src={xboxControl} alt="" className="icon" />
            </div>
          </div>
          <div className="textContainer">
            <h2 className="aboutAppTitle">
              Tenha o controle da sua vida financeira
            </h2>
            <p className="aboutAppText">
              {" "}
              Projetada para simplificar a vida financeira dos usuários.
              Geekbank oferece uma interface intuitiva e funcionalidades
              robustas para gerir contas, pagamentos, transferências de fundos e
              orçamentos de forma eficiente e segura
            </p>
            <span className="aboutDashboardTitle">Dashboard Intuitivo</span>
            <p className="aboutAppText">
              Visualize todas as suas contas em um único lugar. Gráficos e
              relatórios automáticos para um entendimento claro de suas
              finanças.
            </p>
            <a href="" className="downloadAppLink">
              <img src={appleIconRed} alt="" />
              <img src={androidIconRed} alt="" />
              <span>Baixe o GeekBank</span>
            </a>
          </div>
        </div>
      </AboutAppContainer>
      <CredicardsContainer>
        <div className="card01Container" ref={cardRedRef}>
          <img src={cardRed} alt="" className="cardImage" />
          <div className="card01TextContainer">
            <h2 className="cardName">
              GB Mastercard <br /> Global
            </h2>
            <p className="cardText">
              Tenha o seu próprio cartão GB virtual e físico disponível para uso
              em qualquer lugar do mundo e <strong>sem anuidade.</strong>
            </p>
          </div>
        </div>
        <div className="card02Container">
          <div className="card01TextContainer">
            <h2 className="cardName">
              GB Gamer Master <br /> Virtual
            </h2>
            <p className="blackcardText">
              O seu cartão GB Gamer Master vai te garantir descontos exclusivos
              nas plataformas de jogos digitais mais famosos do mundo! Um
              benefício <strong>exclusivo</strong> do GeekBank
            </p>
            <div className="gamePlataformsContainer">
              <img src={steam} alt="" className="gamePlatForm" />
              <img src={xbox} alt="" className="gamePlatForm" />
              <img src={epic} alt="" className="gamePlatForm" />
              <img src={playstation} alt="" className="gamePlatForm" />
            </div>
          </div>
          <div className="card02Container" ref={cardBlackRef}>
            <img src={cardBlack} alt="" className="cardImage" />
          </div>
        </div>
      </CredicardsContainer>
      <AppFeedBackContainer>
        <h2 className="appFeedBackTitle">Avaliações</h2>
        <span className="appFeedBackAbout">
          Veja oque nossos clientes acham do <br /> Geekbank
        </span>
        <div
          ref={scrollableRef}
          className="feedBackCardsContainer"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <FeedBackCard
            className="benefitCard
            "
            icon={likeHeart}
            bgColor="#2F4149"
            content="Lorem ipsum dolor sit amet consectetur. Pharetra sodales enim lorem amet amet. Pellentesque senectus tincidunt facilisis tortor est sed adipiscing. Condimentum mattis tincidunt amet bibendum tempor aliquam."
            contentColor="#B4B4B4"
            costumerImg="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            costumerName="Bruna Carla"
            costumerJob="Streamer"
          />
          <FeedBackCard
            className="benefitCard
            "
            icon={star}
            bgColor="#FA3440"
            content="Lorem ipsum dolor sit amet consectetur. Pharetra sodales enim lorem amet amet. Pellentesque senectus tincidunt facilisis tortor est sed adipiscing. Condimentum mattis tincidunt amet bibendum tempor aliquam."
            contentColor="#FFFFFF"
            costumerImg="https://images.unsplash.com/photo-1593229874334-90d965f27c42?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            costumerName="Mateus Aguiar"
            costumerJob="Pro Gamer"
          />
          <FeedBackCard
            className="benefitCard
            "
            icon={likeHeart}
            bgColor="#2F4149"
            content="Lorem ipsum dolor sit amet consectetur. Pharetra sodales enim lorem amet amet. Pellentesque senectus tincidunt facilisis tortor est sed adipiscing. Condimentum mattis tincidunt amet bibendum tempor aliquam."
            contentColor="#B4B4B4"
            costumerImg="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            costumerName="Laura Bispo"
            costumerJob="Podcast Voicer"
          />
          <FeedBackCard
            className="benefitCard
            "
            icon={star}
            bgColor="#FA3440"
            content="Lorem ipsum dolor sit amet consectetur. Pharetra sodales enim lorem amet amet. Pellentesque senectus tincidunt facilisis tortor est sed adipiscing. Condimentum mattis tincidunt amet bibendum tempor aliquam."
            contentColor="#FFFFFF"
            costumerImg="https://images.unsplash.com/photo-1514543250559-83867827ecce?q=80&w=1425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            costumerName="Lucas Marques"
            costumerJob="Programmer"
          />
          <FeedBackCard
            className="benefitCard
            "
            icon={likeHeart}
            bgColor="#2F4149"
            content="Lorem ipsum dolor sit amet consectetur. Pharetra sodales enim lorem amet amet. Pellentesque senectus tincidunt facilisis tortor est sed adipiscing. Condimentum mattis tincidunt amet bibendum tempor aliquam."
            contentColor="#B4B4B4"
            costumerImg="https://images.unsplash.com/photo-1623853434105-8e7a72898180?q=80&w=1524&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            costumerName="Kate Blank"
            costumerJob="Youtuber"
          />
        </div>
      </AppFeedBackContainer>
      <DownloadAreaContainer>
        <div className="dowloadContainer">
          <div className="downloadTextContainer">
            <h2 className="downloadTitle">Comece hoje mesmo!</h2>
            <p className="downloadText">
              Abra sua conta Geekbank pelo seu celular e aproveite todos os
              benefícios{" "}
            </p>
          </div>
          <div className="dowloadsLinksContainer">
            <a href="" className="downloadLink">
              <img className="storeIcon" src={appleIconWhite} alt="" />
              <div className="linkText">
                <span>Disponível</span>
                <span className="storeName">App Store</span>
              </div>
            </a>
            <a href="" className="downloadLink">
              <img className="storeIcon" src={googlePlayIcon} alt="" />
              <div className="linkText">
                <span>Disponível</span>
                <span className="storeName">Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </DownloadAreaContainer>
      <ParternsContainer>
        <h2 className="partnersTitle">Parceiros comerciais</h2>
        <div className="partners">
          <img src={vwLogo} alt="" className="partner" />
          <img src={aiLogo} alt="" className="partner" />
          <img src={bmwLogo} alt="" className="partner" />
          <img src={metaLogo} alt="" className="partner" />
          <img src={steamLogo} alt="" className="partner" />
          <img src={slackLogo} alt="" className="partner" />
        </div>
      </ParternsContainer>
      <Footer />
      <MyLink>
        <Link to="/sobre">
          <img src={logoJoao} alt="" />
        </Link>
      </MyLink>
    </HomeContainer>
  );
};

export default Home;
