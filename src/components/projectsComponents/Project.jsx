import PropTypes from 'prop-types';
import { DiGithubAlt } from 'react-icons/di';
import { BsGlobe } from 'react-icons/bs';

import ImageProjects from './ImageProjects';
import ButtonProjects from './ButtonProjects';

const Project = ({ title, imgDesktop, imgMobile, link }) => {
  return (
    <div className="w-4/12 py-10">
      <h3 className="pb-10 text-xl">{title}</h3>
      <div className="flex gap-10">
        <div className="">
          <ImageProjects src={imgDesktop} />
        </div>
        <div className="w-screen">
          <ImageProjects src={imgMobile} />
        </div>
      </div>
      <div className="flex gap-5 mt-10">
        <ButtonProjects
          text="Ver repositorio"
          icon={<DiGithubAlt className="text-2xl" />}
          link={link}
        />
        <ButtonProjects
          text="Ver sitio"
          icon={
            <div>
              <BsGlobe className="text-xl" />
            </div>
          }
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
  link: PropTypes.string.isRequired,
};

export default Project;
