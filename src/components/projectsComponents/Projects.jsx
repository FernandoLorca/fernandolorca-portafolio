import TitleSection from '../TitleSection';
import Project from './Project';

const Projects = () => {
  return (
    <div className="px-5 lg:px-20">
      <TitleSection text="Projects" />
      <Project
        title="Google clone - Vanilla javascript"
        imgDesktop="projects/googleClone-desktop.png"
        link="https://google.com"
      />
      <Project
        title="Pomodoro app - ReactJs"
        imgDesktop="projects/pomodoro-desktop.png"
        imgMobile="projects/pomodoro-mobile.png"
        link="https://google.com"
      />
      <Project
        title="Age calculator app - ReactJs"
        imgDesktop="projects/ageCalculator-desktop.png"
        imgMobile="projects/ageCalculator-mobile.png"
        link="https://google.com"
      />
      <Project
        title="NFT preview Component - Html y Css"
        imgDesktop="projects/nftCard-desktop.png"
        imgMobile="projects/nftCard-mobile.png"
        link="https://google.com"
      />
      <Project
        title="Fernando Lorca Portafolio - ReactJs"
        imgDesktop="projects/portafolio-desktop.png"
        imgMobile="projects/portafolio-mobile.png"
        link="https://google.com"
      />
      <Project
        title="Rating component - Vanilla javascript"
        imgDesktop="projects/ratingComponent-desktop.png"
        imgMobile="projects/ratingComponent-mobile.png"
        link="https://google.com"
      />
      <Project
        title="Space traveling agency - ReactJs"
        imgDesktop="projects/space-desktop.png"
        imgMobile="projects/space-mobile.png"
        link="https://google.com"
      />
    </div>
  );
};

export default Projects;
