import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Data Collection",
    description: "Gathered MRI brain scan images from Kaggle and OASIS datasets, ensuring diverse representation of tumor types and Alzheimer's stages.",
    tech: ["Kaggle API", "OASIS", "Medical Imaging"],
  },
  {
    number: "02",
    title: "Preprocessing",
    description: "Applied image normalization, resizing to 224x224, data augmentation (rotation, flip, zoom), and skull stripping for enhanced features.",
    tech: ["OpenCV", "NumPy", "Pillow"],
  },
  {
    number: "03",
    title: "Model Architecture",
    description: "Built CNN models with transfer learning (VGG16, ResNet50). Fine-tuned pre-trained weights on ImageNet for medical imaging domain.",
    tech: ["TensorFlow", "Keras", "Transfer Learning"],
  },
  {
    number: "04",
    title: "Training & Validation",
    description: "Trained models with cross-validation, early stopping, and learning rate scheduling. Monitored loss and accuracy metrics throughout.",
    tech: ["Adam Optimizer", "Cross-Entropy", "GPU Training"],
  },
  {
    number: "05",
    title: "Evaluation",
    description: "Evaluated using precision, recall, F1-score, and confusion matrices. Achieved 97%+ accuracy on test sets for both detection tasks.",
    tech: ["Scikit-learn", "Matplotlib", "Seaborn"],
  },
];

const Methodology = () => {
  return (
    <section id="methodology" className="py-24 relative neural-pattern">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            <span className="gradient-text">Methodology</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A systematic approach combining data science best practices with deep learning techniques
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[15px] top-12 bottom-0 w-px bg-gradient-to-b from-primary to-accent" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center pulse-glow">
                <span className="text-xs font-bold text-primary">{step.number}</span>
              </div>

              <div className="card-elevated p-6 rounded-xl ml-8">
                <h3 className="text-xl font-semibold font-display mb-2 flex items-center gap-2">
                  {step.title}
                  <ArrowRight className="w-4 h-4 text-primary" />
                </h3>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                <div className="flex flex-wrap gap-2">
                  {step.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
