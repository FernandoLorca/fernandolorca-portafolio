import PropTypes from 'prop-types';

const TitleSection = ({ text }) => {
  return (
    <>
      <h2 className="mb-2 lg:text-3xl font-bold">{text}</h2>
      <div className="w-1/3 bg-white horizontalBars"></div>
    </>
  );
};

TitleSection.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TitleSection;
