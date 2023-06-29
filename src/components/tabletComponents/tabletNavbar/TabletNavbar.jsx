import LogoFernando from '../LogoFernando';
import TabletNavbarAnchor from './TabletNavbarAnchor';

const TabletNavbar = () => {
  return (
    <div
      className="px-5 lg:px-20 items-center justify-between hidden md:flex"
      id="start"
    >
      <LogoFernando />
      <ul className="flex gap-10 text-lg">
        <TabletNavbarAnchor href="#inicio" text="Inicio" />
        <TabletNavbarAnchor href="#aboutme" text="Sobre mí" />
        <TabletNavbarAnchor href="#skills" text="Habilidades" />
        <TabletNavbarAnchor href="#projects" text="Proyectos" />
        <TabletNavbarAnchor href="#contact" text="Contacto" />
      </ul>
    </div>
  );
};

export default TabletNavbar;
