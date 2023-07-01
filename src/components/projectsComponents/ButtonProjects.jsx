import PropTypes from 'prop-types';

const ButtonProjects = ({ link, icon, text }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="backgroundGradient flex items-center gap-1 rounded-full px-4 py-2 border-white cursor-pointer"
    >
      {icon}
      {text}
    </a>
  );
};

ButtonProjects.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  link: PropTypes.string.isRequired,
};

export default ButtonProjects;
