import PropTypes from 'prop-types';

const ImageProjects = ({ src }) => {
  return (
    <div className="w-full">
      <img
        src={src}
        alt=""
      />
    </div>
  );
};

ImageProjects.propTypes = {
  src: PropTypes.string.isRequired,
};

export default ImageProjects;
