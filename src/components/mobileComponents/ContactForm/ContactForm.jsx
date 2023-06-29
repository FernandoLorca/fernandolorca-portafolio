import { useState } from 'react';
import { useGlobalStateContext } from '../../../context/useGlobalStateContext';

import TitleSection from '../../TitleSection';
import Input from './Input';
import Button from '../../Button';

import './Input.css';

const ContactForm = () => {
  const [value, setValue] = useState('');
  const [label, setLabel] = useState(false);

  const { opacity } = useGlobalStateContext();

  const handleFocus = () => setLabel(true);
  const handleBlur = () => setLabel(false);
  const handleChangeValue = e => setValue(e.target.value);

  return (
    <div
      className={`px-5 lg:px-20 ${
        opacity === 'hidden' ? 'hidden' : 'flex'
      } lg:justify-center`}
      id="contact"
    >
      <div className="w-full lg:w-2/4 lg:flex lg:flex-col lg:items-center">
        <div className="mb-10 w-full">
          <TitleSection text="Contáctate conmigo" />
        </div>
        <form className="w-full">
          <Input text="Nombre" />
          <Input text="Apellido" />
          <Input text="Email" />
          <Input text="Asunto" />
          <div>
            <p
              className={`inputLabel ${
                label || value !== '' ? 'move' : 'default'
              }`}
            >
              Mensaje
            </p>
            <textarea
              className="w-full h-40 bg-white bg-opacity-0 border-b border-white focus:outline-none focus:border-b-2 focus:border-fucsia-500 transition-colors duration-300"
              type="text"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChangeValue}
              value={value}
            />
          </div>
          <Button text="Enviar" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
