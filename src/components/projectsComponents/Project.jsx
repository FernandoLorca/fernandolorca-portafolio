import PropTypes from 'prop-types';
import { DiGithubAlt } from 'react-icons/di';
import { BsGlobe } from 'react-icons/bs';

import ImageProjects from './ImageProjects';
import ButtonProjects from './ButtonProjects';

const Project = ({ title, imgDesktop, imgMobile }) => {
  return (
    <div className="py-10">
      <h3 className="pb-10 text-xl">{title}</h3>
      <div className="flex flex-col items-center md:flex-row gap-10">
        <div className="w-1/2 md:w-72">
          <ImageProjects src={imgDesktop} />
        </div>
        <div className="w-1/2 md:w-28">
          <ImageProjects src={imgMobile} />
        </div>
      </div>
      <div className="flex gap-5 mt-10">
        <ButtonProjects
          text="Ver repositorio"
          icon={<DiGithubAlt className="text-2xl" />}
          link="https://google.com"
        />
        <ButtonProjects
          text="Ver sitio"
          icon={<BsGlobe className="text-xl" />}
          link="https://google.com"
        />
      </div>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  imgDesktop: PropTypes.string.isRequired,
  imgMobile: PropTypes.string,
};

export default Project;
