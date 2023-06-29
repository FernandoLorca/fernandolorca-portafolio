import PropTypes from 'prop-types';

const TabletNavbarAnchor = ({ href, text }) => {
  return (
    <li>
      <a
        className=" text-xl hover:text-fucsia-500 transition-colors duration-300"
        href={href}
      >
        {text}
      </a>
    </li>
  );
};

TabletNavbarAnchor.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default TabletNavbarAnchor;
