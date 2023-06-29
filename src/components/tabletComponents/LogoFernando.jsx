import { useGlobalStateContext } from '../../context/useGlobalStateContext';

const LogoFernando = () => {
  const { openMobileMenu } = useGlobalStateContext();

  return (
    <div
      className={`w-14 h-14 my-8 flex justify-center items-center ${openMobileMenu.appearNavbar}`}
    >
      <img
        src="./logo.svg"
        alt="logo"
      />
    </div>
  );
};

export default LogoFernando;
