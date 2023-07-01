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
          linkRepo="https://github.com/FernandoLorca/space-tourism-website"
          linkSite="https://roaring-squirrel-d947aa.netlify.app/"
        />
        <Project
          title="Pomodoro app - ReactJs"
          imgDesktop="projects/pomodoro-desktop.webp"
          imgMobile="projects/pomodoro-mobile.webp"
          linkRepo="https://github.com/FernandoLorca/pomodoro-app-frontend"
          linkSite="https://boisterous-pie-97ebbc.netlify.app/"
        />
        <Project
          title="Rating component - Vanilla javascript"
          imgDesktop="projects/ratingcomponent-desktop.webp"
          imgMobile="projects/ratingcomponent-mobile.webp"
          linkRepo="https://github.com/FernandoLorca/interactive-rating-component"
          linkSite="https://relaxed-croissant-b5e04f.netlify.app/"
        />
        <Project
          title="Age calculator app - ReactJs"
          imgDesktop="projects/agecalculator-desktop.webp"
          imgMobile="projects/agecalculator-mobile.webp"
          linkRepo="https://github.com/FernandoLorca/age-calculator-app"
          linkSite="https://age-calculator-app-florca.netlify.app/"
        />
        <Project
          title="NFT preview Component - Html y Css"
          imgDesktop="projects/nftcard-desktop.webp"
          imgMobile="projects/nftcard-mobile.webp"
          linkRepo="https://github.com/FernandoLorca/nft-preview-card-component"
          linkSite="https://gorgeous-malabi-343347.netlify.app/"
        />
        <Project
          title="Fernando Lorca Portafolio - ReactJs"
          imgDesktop="projects/portafolio-desktop.webp"
          imgMobile="projects/portafolio-mobile.webp"
          linkRepo="https://github.com/FernandoLorca/fernandolorca-portafolio"
          linkSite="https://fernando-lorca.netlify.app/"
        />
        <Project
          title="Google clone - Vanilla javascript"
          imgDesktop="projects/googleclone-desktop.webp"
          linkRepo="https://github.com/FernandoLorca/google-clone"
          linkSite="https://taupe-caramel-1ac184.netlify.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
