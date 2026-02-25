import { CheckCircle2, TrendingUp } from "lucide-react";

const tumorResults = [
  { class: "Glioma", precision: 96.8, recall: 97.2, f1: 97.0 },
  { class: "Meningioma", precision: 97.5, recall: 96.9, f1: 97.2 },
  { class: "Pituitary", precision: 98.1, recall: 98.4, f1: 98.2 },
  { class: "No Tumor", precision: 97.9, recall: 97.5, f1: 97.7 },
];

const alzheimerResults = [
  { class: "Non-Demented", precision: 95.2, recall: 96.1, f1: 95.6 },
  { class: "Very Mild", precision: 93.8, recall: 92.4, f1: 93.1 },
  { class: "Mild", precision: 94.5, recall: 93.9, f1: 94.2 },
  { class: "Moderate", precision: 96.7, recall: 97.2, f1: 96.9 },
];

const Results = () => {
  return (
    <section id="results" className="py-24 relative">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Key <span className="gradient-text">Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our models achieve state-of-the-art performance on benchmark medical imaging datasets
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Brain Tumor Results */}
          <div className="card-elevated p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold font-display">Brain Tumor Detection</h3>
                <p className="text-sm text-muted-foreground">Overall Accuracy: 97.3%</p>
              </div>
            </div>

            <div className="space-y-4">
              {tumorResults.map((result, index) => (
                <div key={index} className="p-4 rounded-lg bg-secondary/30 border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{result.class}</span>
                    <span className="text-primary font-bold">{result.f1}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                      style={{ width: `${result.f1}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>Precision: {result.precision}%</span>
                    <span>Recall: {result.recall}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Alzheimer's Results */}
          <div className="card-elevated p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold font-display">Alzheimer's Classification</h3>
                <p className="text-sm text-muted-foreground">Overall Accuracy: 94.9%</p>
              </div>
            </div>

            <div className="space-y-4">
              {alzheimerResults.map((result, index) => (
                <div key={index} className="p-4 rounded-lg bg-secondary/30 border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{result.class}</span>
                    <span className="text-accent font-bold">{result.f1}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-accent to-primary transition-all duration-1000"
                      style={{ width: `${result.f1}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>Precision: {result.precision}%</span>
                    <span>Recall: {result.recall}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
          <h3 className="text-2xl font-bold font-display mb-4 text-center">Key Insights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">97%+</div>
              <p className="text-muted-foreground text-sm">Average F1 Score for tumor detection across all classes</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">&lt;3%</div>
              <p className="text-muted-foreground text-sm">False negative rate for critical diagnoses</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">50ms</div>
              <p className="text-muted-foreground text-sm">Average inference time per MRI scan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
