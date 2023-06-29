import PropTypes from 'prop-types';

const ImgComponent = ({ imgPath, text, alt }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <img src={imgPath} alt={alt} className="w-7 h-7" />
      <p>{text}</p>
    </div>
  );
};

ImgComponent.propTypes = {
  imgPath: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImgComponent;
