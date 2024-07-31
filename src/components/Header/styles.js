import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 0.8rem 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  position: relative;
  -webkit-animation: slide-in-top 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-top 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  .logoGeekBank {
    width: 156px;
    margin-right: 5rem;
  }

  .headerTop {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .flexHeaderContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .headerTopLinksContainer {
    display: flex;
    gap: 18px;
  }

  .headerTopIcon {
    width: 24px;
  }

  .headerTopIcon:hover {
    -webkit-animation: rotate-center 0.3s ease-in-out both;
    animation: rotate-center 0.3s ease-in-out both;
  }

  .headerTopLink span {
    display: none;
  }

  .createAccountBtn {
    padding: 0.8rem 2rem;
    font-family: "Outfit", sans-serif;
    font-weight: 300;
    color: #ffffff;
    background-color: #ea474f;
    border: 0;
    border-radius: 5px;
  }

  .headerBottom {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .headerLinks {
    list-style: none;
    display: flex;
    gap: 24px;
  }

  .headerLink {
    color: #2f4149;
    font-weight: 500;
  }

  .headerLink:hover {
    cursor: pointer;
  }

  .headerLink img {
    display: none;
  }

  .linkfocus {
    color: #fa3441;
  }

  .headerControllBtn {
    display: none;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }

  .headerControllBtn img {
    width: 32px;
  }

  @-webkit-keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes slide-in-top {
    0% {
      -webkit-transform: translateY(-1000px);
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-top {
    0% {
      -webkit-transform: translateY(-1000px);
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 1024px) {
    padding: 0.8rem 1rem;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.84);
    min-height: 46px;
    background-color: #fdfdfd;

    .headerControl {
      display: none;
    }

    .logoGeekBank {
      width: 104px;
      position: absolute;
      right: 1rem;
      margin: 0;
    }

    .headerTop {
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
    }

    .flexHeaderContainer {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      margin-top: 2rem;
      padding-top: 2rem;
    }

    .headerTopLinksContainer {
      flex-direction: column;
      align-items: flex-start;
    }

    .headerTopLink {
      display: flex;
      align-items: center;
      color: #2f4149;
    }

    .headerTopLink span {
      display: block;
      font-weight: 500;
    }

    .headerTopLink img {
      margin-right: 0.5rem;
    }

    .headerLinks {
      width: 100%;
      gap: 16px;
      flex-direction: column;
      align-items: flex-start;

      margin-bottom: 8rem;
    }

    .headerLink {
      display: flex;
      align-items: center;
    }

    .headerLink img {
      display: block;
      width: 24px;
      margin-right: 0.5rem;
    }

    .createAccountBtn {
      position: absolute;
      bottom: 2rem;
    }

    .linkfocus {
      color: #2f4149;
    }

    .headerControllBtn {
      display: block;
      position: absolute;
      left: 1rem;
      top: 0.5rem;
    }
  }

  @media (min-width: 1024px) and (max-width: 1256px) {
    padding: 0.8rem 5rem;
  }
`;

export const SearchInputContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 500px;

  .searchIcon {
    width: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    left: 1rem;
  }

  .searchInput {
    width: 100%;
    padding: 0.4rem 2rem;
    max-width: 500px;
    border: 2px solid #00000030;
    border-radius: 4px;
    outline: 0;
  }

  .searchInput:focus {
    -webkit-animation: color-change-4x 6s linear infinite alternate both;
    animation: color-change-4x 6s linear infinite alternate both;
  }

  @-webkit-keyframes color-change-4x {
    0% {
      border: 2px solid #ea2222;
    }
    33.3333% {
      border: 2px solid #00000030;
    }
    66.666% {
      border: 2px solid #ea2222;
    }
    100% {
      border: 2px solid #00000030;
    }
  }
  @keyframes color-change-4x {
    0% {
      border: 2px solid #ea2222;
    }
    33.3333% {
      border: 2px solid #00000030;
    }
    66.666% {
      border: 2px solid #ea2222;
    }
    100% {
      border: 2px solid #00000030;
    }
  }

  @media (min-width: 1024px) and (max-width: 1256px) {
    max-width: 300px;
  }
`;
