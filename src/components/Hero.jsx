import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { useGlobalStateContext } from '../context/useGlobalStateContext';

import Button from '../components/Button';
import TitleSection from '../components/TitleSection';

import './Hero.css';

const Hero = () => {
  const { opacity } = useGlobalStateContext();

  return (
    <div
      className={`px-5 lg:px-20 lg:w-10/12 mt-5 ${
        opacity === 'hidden' ? 'hidden' : 'block'
      }`}
      id="hero"
    >
      <TitleSection text="Desarrollador full stack" />
      <div className="my-5">
        <h1 className="text-6xl lg:text-8xl leading-tight lg:leading-snug font-bold mb-5">
          <span className="highlight">Creando soluciones</span> <br />
          tecnológicas innovadoras
        </h1>
        <p className="mb-10 lg:text-2xl lg:leading-snug">
          Mi nombre es Fernando Lorca, un comprometido desarrollador Full Stack
          dedicado a convertir ideas en soluciones digitales tangibles. Con una
          sólida experiencia en diversas tecnologías, mi objetivo es crear
          aplicaciones web eficientes y atractivas, siempre en la búsqueda de
          nuevas oportunidades para aprender y crecer en mi campo.
        </p>
      </div>
      <Button
        text="Descubre mis proyectos"
        link="#projects"
      />
      <div className="flex mt-5 gap-5">
        <a
          href="https://github.com/FernandoLorca"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 flex justify-center items-center hover:opacity-75"
        >
          <BsGithub className="text-3xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/fernandolorcapinto/"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 flex justify-center items-center hover:opacity-75"
        >
          <BsLinkedin className="text-3xl" />
        </a>
      </div>
      <div className="h-64 flex items-center">
        <div className="w-3/4 horizontalBars bg-white"></div>
      </div>
    </div>
  );
};

export default Hero;
