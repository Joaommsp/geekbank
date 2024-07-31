import { Link } from "react-router-dom";

import LogoGeekBankFull from "../../assets/images/logoGeekBank-full.png";
import searchIcon from "../../assets/images/icons/search-icon.svg";
import bagIcon from "../../assets/images/icons/bag-icon.svg";
import cartIcon from "../../assets/images/icons/cart-icon.svg";
import likeIcon from "../../assets/images/icons/like-icon.svg";
import exploreIcon from "../../assets/images/icons/explore-icon.svg";
import creditCardIcon from "../../assets/images/icons/credit-card-icon.svg";
import arrowTrendIcon from "../../assets/images/icons/arrow-trend-up-icon.svg";
import pizzaGraphicIcon from "../../assets/images/icons/pizza-graph.svg";
import carRentalIcon from "../../assets/images/icons/car-rental-icon.svg";
import menuIcon from "../../assets/images/icons/menu-icon.svg";
import closeMenuIcon from "../../assets/images/icons/close-menu-icon.svg";

import { HeaderContainer, SearchInputContainer } from "./styles";
import { useState } from "react";

const Header = () => {
  const [menuIconImg, setMenuIconImg] = useState(menuIcon);

  const handleControlHeader = () => {
    const headerFlexContainer = document.querySelector(".flexHeaderContainer");
    const headerBottom = document.querySelector(".headerBottom");

    headerFlexContainer.classList.toggle("headerControl");
    headerBottom.classList.toggle("headerControl");

    if (menuIconImg == menuIcon) {
      setMenuIconImg(closeMenuIcon);
    } else {
      setMenuIconImg(menuIcon);
    }
  };

  return (
    <HeaderContainer>
      <div className="headerTop">
        <Link to="/">
          <img
            src={LogoGeekBankFull}
            alt="Logo geekbank"
            className="logoGeekBank"
          />
        </Link>
        <div className="flexHeaderContainer headerControl">
          <SearchInputContainer className="searchInputContainer">
            <input type="text" className="searchInput" />
            <img src={searchIcon} alt="" className="searchIcon" />
          </SearchInputContainer>
          <div className="headerTopLinksContainer">
            <a href="" className="headerTopLink">
              <img src={bagIcon} alt="" className="headerTopIcon" />
              <span>Loja Geek</span>
            </a>
            <a href="" className="headerTopLink">
              <img src={likeIcon} alt="" className="headerTopIcon" />
              <span>Avaliações</span>
            </a>
            <a href="" className="headerTopLink">
              <img src={cartIcon} alt="" className="headerTopIcon" />
              <span>Produtos</span>
            </a>
          </div>
          <button className="createAccountBtn">Criar conta</button>
        </div>
      </div>
      <div className="headerBottom  headerControl">
        <ul className="headerLinks">
          <li>
            <a className="headerLink" href="">
              <img src={exploreIcon} alt="" />
              <span>Explorar</span>
            </a>
          </li>
          <li>
            <a className="headerLink linkfocus" href="">
              <img src={creditCardIcon} alt="" />
              <span>Cartões</span>
            </a>
          </li>
          <li>
            <a className="headerLink" href="">
              <img src={arrowTrendIcon} alt="" />
              <span>Investimentos</span>
            </a>
          </li>
          <li>
            <a className="headerLink" href="">
              <img src={pizzaGraphicIcon} alt="" />
              <span>Financiamentos</span>
            </a>
          </li>
          <li>
            <a className="headerLink" href="">
              <img src={carRentalIcon} alt="" />
              <span>Consórcio veicular</span>
            </a>
          </li>
        </ul>
      </div>
      <button
        onClick={() => handleControlHeader()}
        className="headerControllBtn"
      >
        <img src={menuIconImg} alt="" />
      </button>
    </HeaderContainer>
  );
};

export default Header;
