const technologies = [
  {
    category: "Core ML",
    items: [
      { name: "Python", description: "Primary programming language" },
      { name: "TensorFlow", description: "Deep learning framework" },
      { name: "Keras", description: "High-level neural network API" },
      { name: "Scikit-learn", description: "Machine learning utilities" },
    ],
  },
  {
    category: "Image Processing",
    items: [
      { name: "OpenCV", description: "Computer vision library" },
      { name: "Pillow", description: "Image manipulation" },
      { name: "NumPy", description: "Numerical computing" },
      { name: "SciPy", description: "Scientific computing" },
    ],
  },
  {
    category: "Visualization",
    items: [
      { name: "Matplotlib", description: "Plotting library" },
      { name: "Seaborn", description: "Statistical visualization" },
      { name: "Plotly", description: "Interactive charts" },
      { name: "Gradio", description: "ML web interface" },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      { name: "Google Colab", description: "GPU-accelerated training" },
      { name: "Kaggle", description: "Dataset source" },
      { name: "GitHub", description: "Version control" },
      { name: "Jupyter", description: "Interactive notebooks" },
    ],
  },
];

const TechStack = () => {
  return (
    <section id="tech" className="py-24 relative neural-pattern">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Technology <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built with industry-standard tools and libraries for machine learning and medical imaging
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div key={index} className="card-elevated p-6 rounded-xl">
              <h3 className="text-lg font-semibold font-display mb-4 gradient-text">{tech.category}</h3>
              <ul className="space-y-3">
                {tech.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex flex-col">
                    <span className="font-medium text-foreground">{item.name}</span>
                    <span className="text-xs text-muted-foreground">{item.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
