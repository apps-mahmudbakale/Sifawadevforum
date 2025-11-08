import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Our Team', id: 'team' },
    { label: 'Activities', id: 'activities' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">YDF</span>
              </div>
              <span className="font-bold text-lg">Youth Development Forum</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering the next generation of leaders through education, mentorship, and community engagement.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">info@youthdevelopmentforum.org</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Youth Center Drive<br />Community City, ST 12345</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Our Mission</h4>
            <p className="text-gray-400 leading-relaxed mb-6">
              To cultivate leadership, foster innovation, and create opportunities for youth to thrive and make positive impact.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Get Involved
            </button>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Youth Development Forum. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center space-x-2">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>for the youth</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
