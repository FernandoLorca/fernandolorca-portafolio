import PropTypes from 'prop-types';

import './Input.css';

const Input = ({
  text,
  inputName,
  inputType,
  inputValues,
  handleNameValueChange,
  handleEmailValueChange,
  label,
  handleFocus,
  handleBlur,
}) => {
  return (
    <div>
      <p
        className={`inputLabel ${
          label || inputValues.nameValue !== '' ? 'move' : 'default'
        }`}
      >
        {text}
      </p>
      <input
        className="border-b h-10 border-white bg-white bg-opacity-0 w-full mb-5 relative z-20 focus:outline-none focus:border-b-2 focus:border-fucsia-500 transition-colors duration-300"
        type={inputType}
        name={inputName}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={
          inputType === 'text' ? handleNameValueChange : handleEmailValueChange
        }
        value={
          inputType === 'text' ? inputValues.nameValue : inputValues.emailValue
        }
      />
    </div>
  );
};

Input.propTypes = {
  text: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputValues: PropTypes.object.isRequired,
  handleNameValueChange: PropTypes.func.isRequired,
  handleEmailValueChange: PropTypes.func.isRequired,
  label: PropTypes.bool.isRequired,
  handleFocus: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
};

export default Input;
