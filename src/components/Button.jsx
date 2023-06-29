import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ text, link }) => {
  return (
    <a
      href={link}
      className="backgroundGradient rounded-full px-8 py-3 border-white cursor-pointer"
    >
      <button className="my-5 lg:text-xl">{text}</button>
    </a>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default Button;
