import { useGlobalStateContext } from '../../../context/useGlobalStateContext';

const MobileMenu = () => {
  const { openMobileMenu, handleClickMobileMenu } = useGlobalStateContext();

  return (
    <ul
      className={`flex flex-col gap-16 text-center pt-40 w-full bg-cyan-500 pb-10 ${
        openMobileMenu.mobileMenu ? openMobileMenu.mobileMenu : 'hidden'
      }`}
    >
      <li className="text-3xl">
        <a href="#start" onClick={handleClickMobileMenu}>
          Inicio
        </a>
      </li>
      <li className="text-3xl">
        <a href="#aboutme" onClick={handleClickMobileMenu}>
          Sobre mí
        </a>
      </li>
      <li className="text-3xl">
        <a href="#skills" onClick={handleClickMobileMenu}>
          Habilidades
        </a>
      </li>
      <li className="text-3xl">
        <a href="#projects" onClick={handleClickMobileMenu}>
          Proyectos
        </a>
      </li>
      <li className="text-3xl">
        <a href="#contact" onClick={handleClickMobileMenu}>
          Contacto
        </a>
      </li>
    </ul>
  );
};

export default MobileMenu;
