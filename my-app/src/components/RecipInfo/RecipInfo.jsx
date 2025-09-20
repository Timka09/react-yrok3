import { FaAd, FaAddressCard, FaAddressBook, FaAdjust } from "react-icons/fa";
import PropTypes from "prop-types";
export const RecipInfo = ({
  title,
  time,
  servings,
  calories,
  difficulty,
  image,
}) => {
  return (
    <div>
      <img src={image} alt="" width="350" />,<h2>{title}</h2>,
      <p>
        <FaAd size={16} color={"red"} /> {time}
      </p>
      ,<p>{servings}</p>,<p>{calories}</p>,<p>{difficulty}</p>
    </div>
  );
};
RecipInfo.PropTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  servings: PropTypes.number.isRequired,
  colories: PropTypes.number.isRequired,
  difficulty: PropTypes.number.isRequired,
};