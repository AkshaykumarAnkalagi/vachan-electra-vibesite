
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile, useIsTablet } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

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

  // Close mobile menu when escape key is pressed
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'bg-white/95 shadow-md backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <Link to="/" className="flex items-center z-20">
          <span className={`text-xl md:text-2xl font-sora font-bold bg-clip-text text-transparent bg-gradient-to-r from-electricLime to-neonEmerald ${
            (!isScrolled && !mobileMenuOpen) ? '' : 'text-jetBlack'
          }`}>
            VACHAN MOTORS
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
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
            className="border-electricLime text-jetBlack hover:bg-electricLime hover:text-jetBlack rounded-full px-6"
          >
            Dealer Login
          </Button>
          <Button 
            className="bg-gradient-to-r from-electricLime to-neonEmerald text-jetBlack hover:shadow-lg hover:shadow-electricLime/20 rounded-full px-6"
          >
            Test Drive
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 z-20 rounded-full hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-electricLime active:scale-95 transition-transform" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X size={24} className="text-jetBlack" />
          ) : (
            <Menu size={24} className={isScrolled ? 'text-jetBlack' : 'text-white'} />
          )}
        </button>
      </nav>

      {/* Mobile Menu - Full Screen */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white z-10 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-6 pt-24 pb-8 h-full flex flex-col">
          <div className="flex-grow overflow-auto">
            <nav className="flex flex-col space-y-4">
              {navItems.map(item => (
                <Link 
                  key={item.path} 
                  to={item.path}
                  className={`p-3 text-xl font-sora font-medium rounded-lg transition-colors ${
                    location.pathname === item.path 
                      ? 'text-white bg-electricLime' 
                      : 'text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="mt-8 space-y-4">
            <Button 
              variant="outline" 
              className="w-full border-electricLime text-jetBlack hover:bg-electricLime py-6 rounded-full text-base"
            >
              Dealer Login
            </Button>
            <Button 
              className="w-full bg-gradient-to-r from-electricLime to-neonEmerald text-jetBlack py-6 rounded-full text-base"
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
