import GlobalStateProvider from './context/GlobalStateProvider';

import MobileNavbar from './components/mobileComponents/Navbar/MobileNavbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Habilities from './components/mobileComponents/HabilitiesComponent/Habilities';
import Projects from './components/projectsComponents/Projects';
import ContactForm from './components/mobileComponents/ContactForm/ContactForm';
import MobileMenu from './components/mobileComponents/Navbar/MobileMenu';
import TabletNavbar from './components/tabletComponents/tabletNavbar/TabletNavbar';
import GoTop from './components/GoTop';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

function App() {
  return (
    <>
      <GlobalStateProvider>
        <GoTop />
        <div className="bg01">
          <div className="bg02">
            <MobileMenu />
            <MobileNavbar />
            <TabletNavbar />
            <Hero />
            <AboutMe />
            <Habilities />
            <Projects />
            <div className="flex flex-col justify-center items-center py-16">
              <img
                src="/logo-florca.svg"
                alt="Logo Fernando Lorca"
                className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36"
              />
              <div className="flex gap-2">
                <a
                  href="https://github.com/FernandoLorca"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 flex justify-center items-center hover:opacity-75"
                >
                  <BsGithub className="text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/fernandolorcapinto/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 flex justify-center items-center hover:opacity-75"
                >
                  <BsLinkedin className="text-2xl" />
                </a>
              </div>
            </div>
            <ContactForm />
            <div className="mt-10">
              <img
                src="/bg-footer.webp"
                alt=""
                className="w-full opacity-40"
              />
            </div>
          </div>
        </div>
      </GlobalStateProvider>
    </>
  );
}

export default App;
