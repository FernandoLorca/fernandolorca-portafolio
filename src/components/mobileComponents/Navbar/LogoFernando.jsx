import { useGlobalStateContext } from '../../../context/useGlobalStateContext';

const LogoFernando = () => {
  const { openMobileMenu } = useGlobalStateContext();

  return (
    <div
      className={`w-12 h-12 my-8 flex justify-center items-center ${openMobileMenu.appearNavbar}`}
    >
      <img src="./logo.svg" alt="logo" />
    </div>
  );
};

export default LogoFernando;
