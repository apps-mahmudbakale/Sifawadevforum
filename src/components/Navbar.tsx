import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Logo from '../logo.png';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isAdmin = location.pathname === '/admin';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (isAdmin) {
      navigate('/');
      // Wait for re-render before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(sectionId);
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      }
    }
    setIsOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'team', label: 'Our Team' },
    { id: 'activities', label: 'Activities' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 cursor-pointer">
            <div className="w-12 h-12">
              <img
                src={Logo}
                alt="SDF Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-bold text-xl text-gray-800">Sifawa Development Forum</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-medium transition-colors duration-200 ${!isAdmin && activeSection === link.id
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
                  }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => navigate(isAdmin ? '/' : '/admin')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${isAdmin
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {isAdmin ? 'Exit Admin' : 'Admin'}
            </button>
          </div>

          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left py-3 px-4 font-medium transition-colors duration-200 ${!isAdmin && activeSection === link.id
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:bg-gray-50'
                  }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                navigate(isAdmin ? '/' : '/admin');
                setIsOpen(false);
              }}
              className="block w-full text-left py-3 px-4 font-bold text-blue-600 hover:bg-blue-50"
            >
              {isAdmin ? 'Exit Admin' : 'Admin Dashboard'}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
