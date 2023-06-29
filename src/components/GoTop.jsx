import { useState } from 'react';
import { BiSolidUpArrow } from 'react-icons/bi';

const GoTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <a
      href="#"
      className={`h-12 w-12 backgroundGradient text-white text-2xl flex justify-center items-center rounded-full fixed bottom-5 right-5 cursor-pointer ${
        visible ? 'fixed' : 'hidden'
      }`}
      onClick={scrollToTop}
    >
      <BiSolidUpArrow />
    </a>
  );
};

export default GoTop;
