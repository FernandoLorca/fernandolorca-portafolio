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
          title="Space traveling agency - ReactJs"
          imgDesktop="projects/space-desktop-min.webp"
          imgMobile="projects/space-mobile.webp"
        />
        <Project
          title="Pomodoro app - ReactJs"
          imgDesktop="projects/pomodoro-desktop.webp"
          imgMobile="projects/pomodoro-mobile.webp"
        />
        <Project
          title="Rating component - Vanilla javascript"
          imgDesktop="projects/ratingcomponent-desktop.webp"
          imgMobile="projects/ratingcomponent-mobile.webp"
        />
        <Project
          title="Age calculator app - ReactJs"
          imgDesktop="projects/agecalculator-desktop.webp"
          imgMobile="projects/agecalculator-mobile.webp"
        />
        <Project
          title="NFT preview Component - Html y Css"
          imgDesktop="projects/nftcard-desktop.webp"
          imgMobile="projects/nftcard-mobile.webp"
        />
        <Project
          title="Fernando Lorca Portafolio - ReactJs"
          imgDesktop="projects/portafolio-desktop.webp"
          imgMobile="projects/portafolio-mobile.webp"
        />
        <Project
          title="Google clone - Vanilla javascript"
          imgDesktop="projects/googleclone-desktop.webp"
        />
      </div>
    </div>
  );
};

export default Projects;
