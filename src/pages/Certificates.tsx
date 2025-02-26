
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certificates = () => {
  const certificates = [
    {
      title: "Agriculture, Economics and Nature",
      organization: "The University of Western Australia",
      date: "2023",
      credentialUrl: "https://www.futurelearn.com/certificates/4w0o9d0",
      image: "https://usercontent.one/wp/studyoptions.com/wp-content/uploads/2021/09/The-University-of-Western-Australia-logo-profile.jpg",
    },
    {
      title: "Google Cloud Professional Developer",
      organization: "Google Cloud",
      date: "2023",
      credentialUrl: "https://example.com",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    },
    {
      title: "Meta Frontend Developer",
      organization: "Meta",
      date: "2023",
      credentialUrl: "https://example.com",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166",
    },
  ];

  return (
    <div className="min-h-screen section-padding">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Certificates</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="glass rounded-xl overflow-hidden card-hover">
              <div className="aspect-video relative">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Award className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-gray-600 mb-1">{cert.organization}</p>
                <p className="text-gray-500 text-sm mb-4">Issued: {cert.date}</p>
                <Button className="w-full group">
                  View Credential
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
