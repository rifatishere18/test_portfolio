
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <span className="px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full">
              Welcome to my portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              Hi, I'm <span className="text-accent">Rifat Hasan Rabbi</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
            Pursuing B.Sc.AgS(Hons.), DIU | Agricultural Enthusiast | Aspiring Researcher | Music Producer | Wikipedian
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="group"
              >
                Hire Me
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
              >
                View Projects
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://i.ibb.co.com/NgKk2SLg/ab6761610000e5ebe69b34d0b77021b689580cb1.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stats Card */}
            <div className="glass p-6 rounded-xl absolute -bottom-6 -left-6 animate-slide-in">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-4xl font-bold text-accent">3+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-accent">125+</p>
                  <p className="text-sm text-gray-600">Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
