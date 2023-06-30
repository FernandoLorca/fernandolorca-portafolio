import emailjs from '@emailjs/browser';

import { useState, useRef } from 'react';
import { useGlobalStateContext } from '../../../context/useGlobalStateContext';

import TitleSection from '../../TitleSection';
import Input from './Input';

import './Input.css';

const ContactForm = () => {
  const [value, setValue] = useState('');
  const [label, setLabel] = useState(false);

  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_r93p53r',
        'template_ejemplo',
        form.current,
        'o7GLP__RAarSPldH-'
      )
      .then(
        result => {
          console.log(result);
        },
        error => {
          console.log(error);
        }
      );
  };

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
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full"
        >
          <Input
            text="Nombre"
            inputName="user_name"
          />
          <Input
            text="Email"
            inputName="user_email"
          />
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
              name="message"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChangeValue}
              value={value}
            />
          </div>
          <button className="px-8 py-3 mt-5 rounded-full lg:text-xl bg-gradient-to-tl from-rose-600 to-orange-300">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
