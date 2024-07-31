import PropTypes from "prop-types";

import { FeedBackCardContainer } from "./styles";

export const FeedBackCard = (props) => {
  return (
    <FeedBackCardContainer
      $bgColor={props.bgColor}
      $textColor={props.contentColor}
    >
      <img src={props.icon} alt="" className="benefitIcon" />
      <div className="textContainer">
        <p className="benefitText">{props.content}</p>
      </div>
      <div className="costumerContainer">
        <img className="costumerPhoto" src={props.costumerImg} alt="" />
        <div className="costumerInfos">
          <span className="costumerName">{props.costumerName}</span>
          <span className="costumerJob">{props.costumerJob}</span>
        </div>
      </div>
    </FeedBackCardContainer>
  );
};

FeedBackCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  contentColor: PropTypes.string.isRequired,
  costumerImg: PropTypes.string.isRequired,
  costumerName: PropTypes.string.isRequired,
  costumerJob: PropTypes.string.isRequired,
};

export default FeedBackCard;
