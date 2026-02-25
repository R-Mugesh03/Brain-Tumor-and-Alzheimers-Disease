import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Methodology from "@/components/Methodology";
import Results from "@/components/Results";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Overview />
      <Methodology />
      <Results />
      <TechStack />
      <Contact />
    </div>
  );
};

export default Index;
