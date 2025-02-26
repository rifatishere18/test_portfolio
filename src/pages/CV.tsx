
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const CV = () => {
  const handleDownload = () => {
    // In a real application, this would download the actual CV file
    alert("CV download would start here");
  };

  return (
    <div className="min-h-screen section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Curriculum Vitae</h1>
        <div className="glass p-8 rounded-xl">
          <FileText className="w-16 h-16 mx-auto mb-4 text-accent" />
          <h2 className="text-2xl font-semibold mb-4">Download My CV</h2>
          <p className="text-gray-600 mb-6">
            Get a detailed overview of my skills, experience, and qualifications.
            Download my CV in PDF format.
          </p>
          <Button size="lg" onClick={handleDownload} className="group">
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CV;
