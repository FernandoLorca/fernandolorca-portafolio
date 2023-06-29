import TitleSection from '../TitleSection';
import Project from './Project';

const Projects = () => {
  return (
    <div
      className="px-5 lg:px-20"
      id="projects"
    >
      <TitleSection text="Projectos" />
      <div className="lg:grid lg:grid-cols-2">
        <Project
          title="Google clone - Vanilla javascript"
          imgDesktop="projects/googleClone-desktop.png"
        />
        <Project
          title="Rating component - Vanilla javascript"
          imgDesktop="projects/ratingComponent-desktop.png"
          imgMobile="projects/ratingComponent-mobile.png"
        />
        <Project
          title="Space traveling agency - ReactJs"
          imgDesktop="projects/space-desktop.png"
          imgMobile="projects/space-mobile.png"
        />
        <Project
          title="Pomodoro app - ReactJs"
          imgDesktop="projects/pomodoro-desktop.png"
          imgMobile="projects/pomodoro-mobile.png"
        />
        <Project
          title="Age calculator app - ReactJs"
          imgDesktop="projects/ageCalculator-desktop.png"
          imgMobile="projects/ageCalculator-mobile.png"
        />
        <Project
          title="NFT preview Component - Html y Css"
          imgDesktop="projects/nftCard-desktop.png"
          imgMobile="projects/nftCard-mobile.png"
        />
        <Project
          title="Fernando Lorca Portafolio - ReactJs"
          imgDesktop="projects/portafolio-desktop.png"
          imgMobile="projects/portafolio-mobile.png"
        />
      </div>
    </div>
  );
};

export default Projects;
