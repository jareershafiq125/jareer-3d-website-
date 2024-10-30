import { Section } from "lucide-react";
import ButtonGradient from "./components/assets/svg/ButtonGradient.jsx";
import Button from "./components/Button.tsx";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Pricing from "./components/Pricing.tsx";
import Roadmap from "./components/Roadmap.tsx";
import Services from "./components/Services.tsx";
import TagLine from "./components/Tagline.tsx";
import Benefits from "./components/Benefits.tsx"
import Generating from "./components/Genrating.tsx";
import CompanyLogos from "./components/CompanyLogos.tsx";
import Notification from "./components/Notification.tsx";
import Collaboration from "./components/Collobrations.tsx";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] hidden ">
       

       <Button>Made By Jareer Shafiq</Button>
      </div>
      <ButtonGradient />
      <Button />
      <Hero />
      <Notification/>
   <Benefits/>
  <Collaboration/>
      <Header />
      <Roadmap />
      <Generating />
      <CompanyLogos />
      <Section />
      <TagLine />
      <Services />
      <Pricing />
 
      <Footer />
      
    </>
  );
};

export default App;
