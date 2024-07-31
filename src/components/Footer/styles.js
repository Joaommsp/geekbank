import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 8rem 0 8rem;
  background-color: #fdfdfd;

  position: relative;

  .footerContent {
    width: 100%;
    height: 100%;
    background-color: #1e1e1e;
    border-top-right-radius: 32px;
    border-top-left-radius: 32px;
    padding: 4rem 4rem 8rem 4rem;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .logo {
    width: 104px;
  }

  .LinksContainer {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 96px;
  }

  .links ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .links ul li a {
    text-decoration: none;
    color: #b4b4b4;
    font-weight: 300;
  }

  .linkTitle {
    font-size: 1rem;
    font-weight: 500;
    color: #fdfdfd;
  }

  .socialLinks {
    display: flex;
    gap: 16px;
  }

  .socialLinks img {
    width: 24px;
  }

  .address {
    line-height: 24px;
  }

  .notice {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2rem;
    text-align: center;
    font-size: 0.8rem;
    color: #5e5e5e;
  }

  @media (max-width: 576px) {
    padding: 2rem 1rem 0 1rem;

    .logo {
      width: 84px;
      margin-bottom: 2rem;
    }

    .footerContent {
      width: 100%;
      height: 100%;
      background-color: #1e1e1e;
      border-top-right-radius: 32px;
      border-top-left-radius: 32px;
      padding: 4rem 2rem 8rem 2rem;

      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .LinksContainer {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 36px;
      flex-wrap: wrap;
    }
  }

  @media (min-width: 576px) and (max-width: 1024px) {
    padding: 2rem 4rem 0 4rem;

    .logo {
      width: 84px;
      margin-bottom: 2rem;
      margin-right: 2rem;
    }

    .footerContent {
      width: 100%;
      height: 100%;
      background-color: #1e1e1e;
      border-top-right-radius: 32px;
      border-top-left-radius: 32px;
      padding: 4rem 4rem 8rem 4rem;

      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .LinksContainer {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 36px;
      flex-wrap: wrap;
    }
  }
`;
