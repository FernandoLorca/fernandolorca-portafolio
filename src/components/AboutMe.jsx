import { useGlobalStateContext } from '../context/useGlobalStateContext';

import TitleSection from './TitleSection';
import FuntcionsDetails from './FunctionsDetails/FunctionsDetails';

const AboutMe = () => {
  const { opacity } = useGlobalStateContext();

  return (
    <div
      className={`px-5 lg:px-20 lg:my-24 lg:w-10/12 ${
        opacity === 'hidden' ? 'hidden' : 'block'
      }`}
      id="aboutme"
    >
      <TitleSection text="Conóce más sobre mí" />
      <div className="my-10">
        <FuntcionsDetails
          positionLeft="left-44 -top-10"
          positionTop="left-24 top-4"
          rotate="-rotate-45"
          textSize="text-xs"
          text="avatar(image, size, format);"
          responsive="md:hidden"
        />
        <FuntcionsDetails
          positionLeft="left-96 -top-10"
          positionTop="left-72 top-4"
          rotate="-rotate-45"
          textSize="text-lg"
          text="avatar(image, size, format);"
          responsive="hidden md:block lg:hidden"
        />
        <FuntcionsDetails
          positionLeft="left-52 -top-8"
          positionTop="left-32 top-4"
          rotate="-rotate-45"
          textSize="text-lg"
          text="avatar(image, size, format);"
          responsive="hidden lg:block"
        />
        <img
          src="/florca.png"
          alt="Imagen de Fernando Lorca"
          className="relative z-20 w-2/4 lg:w-56 lg:h-56"
        />
      </div>
      <p className="md:text-lg md:leading-relaxed xl:w-3/4">
        Soy diseñador gráfico; no obstante, a raíz de dinstitas circunstancias
        laborales, he incorporado la programación en mis tareas profesionales,
        permitiéndome añadir funcionalidad a las distintas ideas gráficas en las
        organizaciones en las que he colaborado. Me he convertido en un
        desarrollador Full Stack autodidacta, gracias a cursos en línea y
        bootcamps. Me especializo en HTML, CSS, JavaScript, Node.js, React.js y
        SQL. Para mis aplicaciones, utilizo la gestión de versiones con Git y he
        llevado a cabo numerosos proyectos personales con el objetivo de
        construir un sólido portafolio y abrirme camino en el competitivo
        mercado laboral. Comprometido con la innovación y el trabajo en equipo,
        me esfuerzo estar en un constante aprendizaje de nuevas tecnologías para
        estar preparado a la hora de ofrecer soluciones innovadoras
      </p>
    </div>
  );
};

export default AboutMe;
