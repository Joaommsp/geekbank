import styled from "styled-components";

export const AboutMeContainer = styled.div`
  width: 100%;
  height: 100%;

  background-color: #fdfdfd;

  .hero {
    width: 100%;
    height: 100%;
    padding: 4rem 8rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .heroTextContainer {
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    -webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  h1 {
    color: #2f4149;
    font-weight: 500;
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  h1 strong {
    font-weight: 500;
    color: #ea474f;
  }

  p {
    color: #2f4149;
    margin-bottom: 2rem;
  }

  .portfolioLink {
    padding: 0.8rem 2rem;
    font-family: "Outfit", sans-serif;
    font-weight: 300;
    color: #ffffff;
    background-color: #ea474f;
    border: 0;
    border-radius: 5px;
    max-width: 300px;
    text-align: center;
    margin-bottom: 2rem;
  }

  .socialLinks {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
  }

  .socialLinks img {
    width: 24px;
  }

  .heroLogoContainer {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .logojoao {
    width: 100%;
    max-width: 456px;
    -webkit-animation: rotate-in-2-cw 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: rotate-in-2-cw 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @-webkit-keyframes rotate-in-2-cw {
    0% {
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
      opacity: 1;
    }
  }
  @keyframes rotate-in-2-cw {
    0% {
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
      opacity: 1;
    }
  }

  @-webkit-keyframes slide-in-bottom {
    0% {
      -webkit-transform: translateY(1000px);
      transform: translateY(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-bottom {
    0% {
      -webkit-transform: translateY(1000px);
      transform: translateY(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 576px) {
    .hero {
      width: 100%;
      height: 100%;
      padding: 4rem 1rem;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .heroTextContainer {
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 4rem;
    }

    .portfolioLink {
      width: 100%;
      max-width: 350px;
    }
  }

  @media (min-width: 576px) and (max-width: 768px) {
    .hero {
      width: 100%;
      height: 100%;
      padding: 4rem 4rem;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .heroTextContainer {
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 4rem;
    }

    .portfolioLink {
      width: 100%;
      max-width: 350px;
    }
  }

  @media (min-width: 576px) and (max-width: 1024px) {
    .hero {
      width: 100%;
      height: 100%;
      padding: 4rem 4rem;
    }
  }
`;
