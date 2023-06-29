import PropTypes from 'prop-types';

const ImageProjects = ({ src }) => {
  return (
    <img
      src={src}
      alt=""
      className="w-80"
    />
  );
};

ImageProjects.propTypes = {
  src: PropTypes.string.isRequired,
};

export default ImageProjects;
