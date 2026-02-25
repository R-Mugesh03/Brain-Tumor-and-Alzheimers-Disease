import { Brain, ChevronDown } from "lucide-react";
import heroBrain from "@/assets/hero-brain.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden neural-pattern">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBrain} 
          alt="Brain scan visualization" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Floating Glow Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl floating-animation" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl floating-animation" style={{ animationDelay: '2s' }} />

      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-fade-in-up opacity-0">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Machine Learning Research Project</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6 animate-fade-in-up opacity-0 animate-delay-100">
            Detecting{" "}
            <span className="gradient-text">Brain Tumors</span>
            {" "}& <span className="gradient-text">Alzheimer's</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0 animate-delay-200">
            Leveraging deep learning and advanced image classification to enable early detection of neurological conditions using MRI scans
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up opacity-0 animate-delay-300">
            <a 
              href="#methodology" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold transition-all hover:scale-105 glow-effect"
            >
              Explore Methodology
            </a>
            <a 
              href="#results" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-secondary border border-border font-semibold transition-all hover:bg-secondary/80"
            >
              View Results
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up opacity-0 animate-delay-400">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">97.3%</div>
              <div className="text-sm text-muted-foreground mt-1">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">10K+</div>
              <div className="text-sm text-muted-foreground mt-1">MRI Scans</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">4</div>
              <div className="text-sm text-muted-foreground mt-1">Classifications</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#overview" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;
