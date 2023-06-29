import GlobalStateProvider from './context/GlobalStateProvider';

import MobileNavbar from './components/mobileComponents/Navbar/MobileNavbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Habilities from './components/mobileComponents/HabilitiesComponent/Habilities';
import ContactForm from './components/mobileComponents/ContactForm/ContactForm';
import MobileMenu from './components/mobileComponents/Navbar/MobileMenu';

import TabletNavbar from './components/tabletComponents/tabletNavbar/TabletNavbar';

function App() {
  return (
    <GlobalStateProvider>
      <div className="bg01">
        <div className="bg02">
          <MobileMenu />
          <MobileNavbar />
          <TabletNavbar />
          <Hero />
          <AboutMe />
          <Habilities />
          <div className="flex justify-center items-center py-8">
            <img
              src="/logo-florca.svg"
              alt="Logo Fernando Lorca"
              className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36"
            />
          </div>
          <ContactForm />
          <div className="mt-10">
            <img
              src="/bg-footer.png"
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </div>
    </GlobalStateProvider>
  );
}

export default App;
