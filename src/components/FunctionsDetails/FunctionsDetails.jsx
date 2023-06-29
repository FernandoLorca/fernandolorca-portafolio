import PropTypes from 'prop-types';

const FuntcionsDetails = ({
  positionLeft,
  positionTop,
  rotate,
  textSize,
  text,
  responsive,
}) => {
  return (
    <div className={`relative ${responsive}`}>
      <div className={`absolute ${positionLeft}`}>
        <p className={textSize}>{text}</p>
      </div>
      <div
        className={`absolute ${positionTop} ${rotate} z-10 w-20 horizontalBars bg-white`}
      ></div>
    </div>
  );
};

FuntcionsDetails.propTypes = {
  positionLeft: PropTypes.string.isRequired,
  positionTop: PropTypes.string.isRequired,
  rotate: PropTypes.string.isRequired,
  textSize: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  responsive: PropTypes.string.isRequired,
};

export default FuntcionsDetails;
