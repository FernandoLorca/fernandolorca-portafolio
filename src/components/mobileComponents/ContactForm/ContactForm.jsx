// import emailjs from '@emailjs/browser';

import { useState, useRef } from 'react';
import { useGlobalStateContext } from '../../../context/useGlobalStateContext';

import TitleSection from '../../TitleSection';

import './Input.css';

const ContactForm = () => {
  const { opacity } = useGlobalStateContext();
  const [inputValues, setInputValues] = useState({
    nameValue: '',
    emailValue: '',
    textareaValue: '',
  });
  const [labelName, setLabelName] = useState(false);
  const [labelEmail, setLabelEmail] = useState(false);
  const [labelTextarea, setLabelTextarea] = useState(false);
  const form = useRef();

  const handleLabelNameFocus = () => setLabelName(true);
  const handleLabelNameBlur = () => setLabelName(false);

  const handleLabelEmailFocus = () => setLabelEmail(true);
  const handleLabelEmailBlur = () => setLabelEmail(false);

  const handleLabelTextareaFocus = () => setLabelTextarea(true);
  const handleLabelTextareaBlur = () => setLabelTextarea(false);

  const handleInputsValuesChanges = {
    handleNameValueChange: e =>
      setInputValues({
        ...inputValues,
        nameValue: e.target.value,
      }),
    handleEmailValueChange: e =>
      setInputValues({
        ...inputValues,
        emailValue: e.target.value,
      }),
    handleTextAreaChange: e =>
      setInputValues({
        ...inputValues,
        textareaValue: e.target.value,
      }),
  };

  const sendEmail = e => {
    e.preventDefault();

    console.log(e.target[0].value);

    // emailjs
    //   .sendForm(
    //     'service_r93p53r',
    //     'template_ejemplo',
    //     form.current,
    //     'o7GLP__RAarSPldH-'
    //   )
    //   .then(
    //     result => {
    //       console.log(result);
    //     },
    //     error => {
    //       console.log(error);
    //     }
    //   );
  };

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
          <div>
            <p
              className={`inputLabel ${
                labelName || inputValues.nameValue !== '' ? 'move' : 'default'
              }`}
            >
              Nombre
            </p>
            <input
              className="border-b h-10 border-white bg-white bg-opacity-0 w-full mb-5 relative z-20 focus:outline-none focus:border-b-2 focus:border-fucsia-500 transition-colors duration-300"
              type="text"
              name="user_name"
              onFocus={handleLabelNameFocus}
              onBlur={handleLabelNameBlur}
              onChange={handleInputsValuesChanges.handleNameValueChange}
              value={inputValues.nameValue}
            />
          </div>
          <div>
            <p
              className={`inputLabel ${
                labelEmail || inputValues.emailValue !== '' ? 'move' : 'default'
              }`}
            >
              Email
            </p>
            <input
              className="border-b h-10 border-white bg-white bg-opacity-0 w-full mb-5 relative z-20 focus:outline-none focus:border-b-2 focus:border-fucsia-500 transition-colors duration-300"
              type="text"
              name="user_name"
              onFocus={handleLabelEmailFocus}
              onBlur={handleLabelEmailBlur}
              onChange={handleInputsValuesChanges.handleEmailValueChange}
              value={inputValues.nameValue}
            />
          </div>
          <div>
            <p
              className={`inputLabel ${
                labelTextarea || inputValues.textareaValue !== ''
                  ? 'move'
                  : 'default'
              }`}
            >
              Mensaje
            </p>
            <textarea
              className="w-full h-40 bg-white bg-opacity-0 border-b border-white focus:outline-none focus:border-b-2 focus:border-fucsia-500 transition-colors duration-300"
              z
              type="text"
              name="message"
              onFocus={handleLabelTextareaFocus}
              onBlur={handleLabelTextareaBlur}
              onChange={handleInputsValuesChanges.handleTextAreaChange}
              value={inputValues.textareaValue}
            />
          </div>
          <button
            type="submit"
            className="px-8 py-3 mt-5 rounded-full lg:text-xl bg-gradient-to-tl from-rose-600 to-orange-300"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
