import { Mail, Phone, MapPin, Linkedin, Download, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="text-center lg:text-left mb-4 lg:mb-0">
            <h1 className="text-3xl lg:text-4xl font-bold font-inter text-primary">
              Abhijeet Bangade
            </h1>
            <p className="text-lg text-secondary font-medium mt-2">
              Senior Technical Program Manager | Delivery Manager | Digital Transformation | BFSI Expert
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-3">
              <span className="inline-flex items-center text-sm text-gray-600">
                <Mail className="w-4 h-4 mr-2 text-secondary" />
                abhijit.b3@gmail.com
              </span>
              <span className="inline-flex items-center text-sm text-gray-600">
                <Phone className="w-4 h-4 mr-2 text-secondary" />
                +91-7387785204
              </span>
              <span className="inline-flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-2 text-secondary" />
                Pune, India
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-end">
            <div className="flex gap-4 mb-3">
              <Button asChild className="bg-secondary hover:bg-primary transition-colors">
                <a 
                  href="https://www.linkedin.com/in/abhijeetbangade/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button 
                onClick={handlePrint}
                className="bg-accent hover:opacity-90 transition-opacity no-print"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
            <span className="bg-success text-white text-sm px-3 py-1 rounded-full font-medium">
              <Circle className="w-3 h-3 mr-2 text-green-300 animate-pulse inline" />
              Immediate Joiner Available
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}