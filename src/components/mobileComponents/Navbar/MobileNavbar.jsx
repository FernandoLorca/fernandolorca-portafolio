import LogoFernando from './LogoFernando';
import HamburgerBars from './HamburgerBars';

const MobileNavbar = () => {
  return (
    <div
      className="px-5 flex items-center justify-between md:hidden"
      id="start"
    >
      <LogoFernando />
      <HamburgerBars />
    </div>
  );
};

export default MobileNavbar;
