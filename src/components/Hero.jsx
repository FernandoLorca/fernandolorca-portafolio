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
        <h1 className="text-6xl lg:text-8xl xl:w-3/4 leading-tight lg:leading-snug font-bold mb-5">
          <span className="highlight">Creando soluciones</span> <br />
          tecnológicas innovadoras
        </h1>
        <p className="mb-10 lg:text-2xl lg:leading-snug xl:w-2/4">
          Mi nombre es Fernando Lorca, un comprometido desarrollador Full Stack
          dedicado a convertir ideas en soluciones digitales tangibles. Con una
          sólida experiencia en diversas tecnologías, mi objetivo es crear
          aplicaciones web eficientes y atractivas, siempre en la búsqueda de
          nuevas oportunidades para aprender y crecer en mi campo.
        </p>
      </div>
      <Button
        text="Descubre mis proyectos"
        link="https://google.com"
      />
      <div className="h-64 flex items-center">
        <div className="w-3/4 horizontalBars bg-white"></div>
      </div>
    </div>
  );
};

export default Hero;
