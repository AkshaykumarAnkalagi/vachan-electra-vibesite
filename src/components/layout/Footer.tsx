
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <footer className="bg-jetBlack text-white pt-12 md:pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-electricLime to-neonEmerald">
              VACHAN MOTORS
            </h3>
            <p className="text-gray-300 text-sm md:text-base">
              Electrifying India, One Ride at a Time. Premium electric three-wheeler manufacturer focused on sustainability and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-electricLime transition-colors" aria-label="Facebook">
                <Facebook size={isMobile ? 18 : 20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-electricLime transition-colors" aria-label="Instagram">
                <Instagram size={isMobile ? 18 : 20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-electricLime transition-colors" aria-label="Twitter">
                <Twitter size={isMobile ? 18 : 20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-electricLime transition-colors" aria-label="LinkedIn">
                <Linkedin size={isMobile ? 18 : 20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-electricLime transition-colors" aria-label="YouTube">
                <Youtube size={isMobile ? 18 : 20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-electricLime transition-colors text-sm md:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-electricLime transition-colors text-sm md:text-base">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/service-centers" className="text-gray-300 hover:text-electricLime transition-colors text-sm md:text-base">
                  Service Centers
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-electricLime transition-colors text-sm md:text-base">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-electricLime transition-colors text-sm md:text-base">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-electricLime transition-colors text-sm md:text-base">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-3 md:mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={isMobile ? 16 : 18} className="mr-2 text-electricLime mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm md:text-base">123 EV Lane, Tech Park, Bangalore, Karnataka 560001, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={isMobile ? 16 : 18} className="mr-2 text-electricLime flex-shrink-0" />
                <a href="tel:+917889123454" className="text-gray-300 hover:text-electricLime transition-colors text-sm md:text-base">
                  +91 7889 123 454
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={isMobile ? 16 : 18} className="mr-2 text-electricLime flex-shrink-0" />
                <a href="mailto:contact@vachanmotors.com" className="text-gray-300 hover:text-electricLime transition-colors text-sm md:text-base truncate">
                  contact@vachanmotors.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-3 md:mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4 text-sm md:text-base">
              Subscribe to our newsletter for updates on new models, features, and company news.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-electricLime"
                required
                aria-label="Email for newsletter"
              />
              <Button 
                type="submit"
                className="w-full bg-electricLime text-jetBlack hover:bg-neonEmerald hover:text-white transition-colors"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 md:pt-8 mt-6 md:mt-8 text-center">
          <p className="text-gray-400 text-sm md:text-base">© {new Date().getFullYear()} Vachan Motors Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 text-sm">
            <a href="#" className="hover:text-electricLime transition-colors text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-electricLime transition-colors text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-electricLime transition-colors text-gray-400">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
