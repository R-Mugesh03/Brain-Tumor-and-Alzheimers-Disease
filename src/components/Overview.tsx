import { Activity, Brain, Cpu, Database } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Brain Tumor Detection",
    description: "Classify MRI scans into glioma, meningioma, pituitary tumors, or healthy brain tissue with high precision.",
  },
  {
    icon: Activity,
    title: "Alzheimer's Classification",
    description: "Detect stages of Alzheimer's disease from MRI scans: Non-Demented, Very Mild, Mild, and Moderate Dementia.",
  },
  {
    icon: Cpu,
    title: "Deep Learning Models",
    description: "Powered by Convolutional Neural Networks (CNNs) with transfer learning using VGG16 and ResNet architectures.",
  },
  {
    icon: Database,
    title: "Comprehensive Dataset",
    description: "Trained on validated datasets including Kaggle brain tumor MRI dataset and OASIS Alzheimer's dataset.",
  },
];

const Overview = () => {
  return (
    <section id="overview" className="py-24 relative">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Project <span className="gradient-text">Overview</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive machine learning solution for neurological disease detection, 
            combining state-of-the-art deep learning with medical imaging analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card-elevated p-6 rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-display mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
