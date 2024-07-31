import styled from "styled-components";

export const BenefitCardContainer = styled.div`
  width: 294px;
  height: 364px;
  background-color: ${(element) => element.$bgColor};

  padding: 2rem 2rem 4rem 2rem;
  border-radius: 24px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  transition: 0.5s ease-in-out transform;
  user-select: none;

  .benefitIcon {
    width: 56px;
    background-color: #ffffff;
    padding: 0.5rem;
    border-radius: 40px;
  }

  .benefitTitle {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    display: block;
    color: #fdfdfd;
  }

  .benefitText {
    font-size: 0.875rem;
    color: ${(element) => element.$textColor};
    font-weight: 300;
  }

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 576px) {
    &:hover {
      transform: none;
    }

    .benefitTitle {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 576px) and (max-width: 768px) {
    width: 100%;
    height: fit-content;

    .benefitIcon {
      margin-bottom: 2rem;
    }
  }
`;
