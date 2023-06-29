import { useGlobalStateContext } from '../../../context/useGlobalStateContext';

import TitleSection from '../../TitleSection';
import ImgComponent from './ImgComponent';

const Habilities = () => {
  const { opacity } = useGlobalStateContext();

  return (
    <div
      className={`px-5 lg:px-20 lg:mt-24 lg:w-10/12 ${
        opacity === 'hidden' ? 'hidden' : 'block'
      }`}
      id="skills"
    >
      <div className="mt-5">
        <TitleSection text="Habilidades y tecnologías" />
      </div>
      <div className="grid grid-cols-4 grid-rows-3 justify-items-center py-28 gap-5">
        <ImgComponent
          imgPath="/habilities-icons/1-html.svg"
          text="HTML"
          alt="Html icon"
        />
        <ImgComponent
          imgPath="/habilities-icons/2-css.svg"
          text="CSS"
          alt="Css icon"
        />
        <ImgComponent
          imgPath="/habilities-icons/3-javascript.svg"
          text="Javascript"
          alt="Javascript icon"
        />
        <ImgComponent
          imgPath="/habilities-icons/4-react.svg"
          text="ReactJs"
          alt="React icon"
        />
        <ImgComponent
          imgPath="/habilities-icons/5-vite.svg"
          text="ViteJs"
          alt="Vite js icon"
        />
        <ImgComponent
          imgPath="/habilities-icons/6-node.svg"
          text="NodeJs"
          alt="Nodejs icon"
        />
        <ImgComponent
          imgPath="/habilities-icons/7-npm.svg"
          text="Npm"
          alt="Npm icon"
        />
        <ImgComponent
          imgPath="/habilities-icons/8-postgres.svg"
          text="PostgreSQL"
          alt="Postgresql icon"
        />
        <ImgComponent
          imgPath="/habilities-icons/9-vscode.svg"
          text="Vscode"
          alt="Vscode icon"
        />
        <ImgComponent
          imgPath="/habilities-icons/10-git.svg"
          text="Git"
          alt="Git icon"
        />
        <ImgComponent
          imgPath="/habilities-icons/11-adobexd.svg"
          text="Adobe Xd"
          alt="Adobe xd icon"
        />
      </div>
    </div>
  );
};

export default Habilities;
