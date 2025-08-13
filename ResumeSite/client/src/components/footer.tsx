import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-4">
          <h4 className="text-lg font-semibold font-inter">Abhijeet Bangade</h4>
          <p className="text-blue-200">Senior Technical Program Manager | Delivery Manager | Digital Transformation | BFSI Expert</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm">
          <span>© 2024 Professional Resume Portfolio</span>
          <div className="flex gap-4">
            <span className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              abhijit.b3@gmail.com
            </span>
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              +91-7387785204
            </span>
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              Pune, India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}