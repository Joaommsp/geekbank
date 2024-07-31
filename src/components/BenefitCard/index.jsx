import PropTypes from "prop-types";

import { BenefitCardContainer } from "./styles";

export const BenefitCard = (props) => {
  return (
    <BenefitCardContainer
      $bgColor={props.bgColor}
      $textColor={props.contentColor}
    >
      <img src={props.icon} alt="" className="benefitIcon" />
      <div className="textContainer">
        <span className="benefitTitle">{props.title}</span>
        <p className="benefitText">{props.content}</p>
      </div>
    </BenefitCardContainer>
  );
};

BenefitCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  contentColor: PropTypes.string.isRequired,
};

export default BenefitCard;
