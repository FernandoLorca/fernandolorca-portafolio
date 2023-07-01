import PropTypes from 'prop-types';
import { DiGithubAlt } from 'react-icons/di';
import { BsGlobe } from 'react-icons/bs';

import ImageProjects from './ImageProjects';
import ButtonProjects from './ButtonProjects';

const Project = ({ title, imgDesktop, imgMobile, linkRepo, linkSite }) => {
  return (
    <div className="py-10">
      <h3 className="pb-10 text-xl text-center md:text-start">{title}</h3>
      <div className="flex flex-col items-center md:flex-row gap-10">
        <div className="w-1/2 md:w-72">
          <ImageProjects src={imgDesktop} />
        </div>
        <div className="w-1/2 md:w-28">
          <ImageProjects src={imgMobile} />
        </div>
      </div>
      <div className="flex justify-center md:justify-start gap-5 mt-10">
        <ButtonProjects
          text="Repositorio"
          icon={<DiGithubAlt className="text-2xl" />}
          link={linkRepo}
        />
        <ButtonProjects
          text="Sitio"
          icon={<BsGlobe className="text-xl" />}
          link={linkSite}
        />
      </div>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  imgDesktop: PropTypes.string.isRequired,
  imgMobile: PropTypes.string,
  linkRepo: PropTypes.string.isRequired,
  linkSite: PropTypes.string.isRequired,
};

export default Project;
