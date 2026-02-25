import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Interested in this research or looking to collaborate? Let's connect.
          </p>

          <div className="card-elevated p-8 rounded-2xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="mailto:contact@example.com" 
                className="flex items-center gap-3 px-6 py-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors group"
              >
                <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span>Email</span>
              </a>
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2026 Brain Disease Detection Project. Built with Python & Deep Learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
