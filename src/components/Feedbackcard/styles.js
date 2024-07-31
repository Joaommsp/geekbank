import styled from "styled-components";

export const FeedBackCardContainer = styled.div`
  min-width: 294px;
  height: 364px;
  background-color: ${(element) => element.$bgColor};

  padding: 2rem 2rem 2rem 2rem;
  border-radius: 24px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  user-select: none;

  .benefitIcon {
    width: 56px;
  }

  .benefitText {
    font-size: 0.8rem;
    color: ${(element) => element.$textColor};
    font-weight: 300;
  }

  .costumerContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  .costumerPhoto {
    width: 46px;
    height: 46px;
    object-fit: cover;
    border: 4px solid #ffffff;
    border-radius: 50%;
  }

  .costumerInfos {
    display: flex;
    flex-direction: column;
  }

  .costumerName {
    font-size: 0.875rem;
    color: #ffffff;
  }

  .costumerJob {
    font-size: 0.625rem;
    color: #b4b4b4;
  }
`;
