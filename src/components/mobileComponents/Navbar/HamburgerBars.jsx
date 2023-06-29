import { useGlobalStateContext } from '../../../context/useGlobalStateContext';

const HamburgerBars = () => {
  const { hamburguerBars, openMobileMenu, handleNavBarClick } =
    useGlobalStateContext();

  return (
    <div
      className={`w-8 h-10 flex flex-col justify-center gap-2 cursor-pointer hover:opacity-75 ${openMobileMenu.appearNavbar}`}
      onClick={handleNavBarClick}
    >
      <div
        className={`w-full horizontalBars bg-white ${
          hamburguerBars.topBars ? hamburguerBars.topBars : ''
        }`}
      ></div>
      <div
        className={`w-full horizontalBars bg-white ${
          hamburguerBars.topBars ? hamburguerBars.opacityClass : ''
        }`}
      ></div>
      <div
        className={`w-full horizontalBars bg-white ${
          hamburguerBars.bottomBars ? hamburguerBars.bottomBars : ''
        }`}
      ></div>
    </div>
  );
};

export default HamburgerBars;
