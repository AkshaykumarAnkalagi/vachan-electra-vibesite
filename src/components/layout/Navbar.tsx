
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Service Centers', path: '/service-centers' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-md backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-sora font-bold bg-clip-text text-transparent bg-gradient-to-r from-electricLime to-neonEmerald">
            VACHAN MOTORS
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map(item => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`font-medium transition-all duration-300 relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-electricLime before:scale-x-0 before:origin-left before:transition-transform hover:before:scale-x-100 ${
                location.pathname === item.path 
                  ? 'text-black before:scale-x-100' 
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <Button 
            variant="outline" 
            className="border-electricLime text-jetBlack hover:bg-electricLime hover:text-jetBlack"
          >
            Dealer Login
          </Button>
          <Button 
            className="bg-gradient-to-r from-electricLime to-neonEmerald text-jetBlack hover:shadow-lg hover:shadow-electricLime/20"
          >
            Test Drive
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute w-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto py-4 px-6 flex flex-col space-y-4">
          {navItems.map(item => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`p-2 font-medium ${
                location.pathname === item.path 
                  ? 'text-electricLime' 
                  : 'text-gray-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex flex-col space-y-2 pt-4">
            <Button 
              variant="outline" 
              className="border-electricLime text-jetBlack hover:bg-electricLime"
            >
              Dealer Login
            </Button>
            <Button 
              className="bg-gradient-to-r from-electricLime to-neonEmerald text-jetBlack"
            >
              Test Drive
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
