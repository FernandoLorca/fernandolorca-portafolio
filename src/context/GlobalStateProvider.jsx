import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const GlobalStatesContext = createContext();

const GlobalStateProvider = ({ children }) => {
  const [hamburguerBars, setHamburguerBars] = useState({
    topBars: '',
    bottomBars: '',
    opacityClass: 'opacity-100',
  });
  const [openMobileMenu, setOpenMobileMenu] = useState({
    mobileMenu: 'hidden',
    appearNavbar: '',
  });
  const [opacity, setOpacity] = useState('block');

  const handleNavBarClick = () => {
    if (
      hamburguerBars.topBars === '' ||
      hamburguerBars.topBars === 'transition-all'
    ) {
      setHamburguerBars(prevState => ({
        ...prevState,
        topBars: 'rotate-45 translate-y-2 transition-all delay-100',
        bottomBars: '-rotate-45 -translate-y-2.5 transition-all delay-100',
        opacityClass: 'opacity-0 transition-all delay-100',
      }));

      setOpenMobileMenu(prevState => ({
        ...prevState,
        mobileMenu: 'block absolute z-30',
        appearNavbar: 'sticky top-0 z-30',
      }));

      setOpacity('hidden');
    } else {
      setHamburguerBars(prevState => ({
        ...prevState,
        topBars: 'transition-all',
        bottomBars: 'transition-all delay-100',
        opacityClass: 'transition-all',
      }));

      setOpenMobileMenu(prevState => ({
        ...prevState,
        mobileMenu: 'hidden',
      }));

      setOpacity('block');
    }
  };

  const handleClickMobileMenu = () => {
    setHamburguerBars(prevState => ({
      ...prevState,
      topBars: 'transition-all',
      bottomBars: 'transition-all delay-100',
      opacityClass: 'transition-all',
    }));

    setOpenMobileMenu(prevState => ({
      ...prevState,
      mobileMenu: 'hidden',
    }));

    setOpacity('block');
  };

  return (
    <GlobalStatesContext.Provider
      value={{
        hamburguerBars,
        openMobileMenu,
        handleNavBarClick,
        opacity,
        handleClickMobileMenu,
      }}
    >
      {children}
    </GlobalStatesContext.Provider>
  );
};

GlobalStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStateProvider;
