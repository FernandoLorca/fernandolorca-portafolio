import PropTypes from 'prop-types';
import { useState } from 'react';

import './Input.css';

const Input = ({ text, inputName }) => {
  const [value, setValue] = useState('');
  const [label, setLabel] = useState(false);

  const handleFocus = () => setLabel(true);
  const handleBlur = () => setLabel(false);
  const handleChangeValue = e => setValue(e.target.value);

  return (
    <div>
      <p className={`inputLabel ${label || value !== '' ? 'move' : 'default'}`}>
        {text}
      </p>
      <input
        type="text"
        className="border-b h-10 border-white bg-white bg-opacity-0 w-full mb-5 relative z-20 focus:outline-none focus:border-b-2 focus:border-fucsia-500 transition-colors duration-300"
        name={inputName}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChangeValue}
        value={value}
      />
    </div>
  );
};

Input.propTypes = {
  text: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
};

export default Input;
