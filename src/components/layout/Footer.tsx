
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-jetBlack text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-electricLime to-neonEmerald">
              VACHAN MOTORS
            </h3>
            <p className="text-gray-300">
              Electrifying India, One Ride at a Time. Premium electric three-wheeler manufacturer focused on sustainability and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-electricLime transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-electricLime transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-electricLime transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-electricLime transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-electricLime transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-electricLime transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-electricLime transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/service-centers" className="text-gray-300 hover:text-electricLime transition-colors">
                  Service Centers
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-electricLime transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-electricLime transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-electricLime transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-electricLime mt-1" />
                <span className="text-gray-300">123 EV Lane, Tech Park, Bangalore, Karnataka 560001, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-electricLime" />
                <a href="tel:+917889123454" className="text-gray-300 hover:text-electricLime transition-colors">
                  +91 7889 123 454
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-electricLime" />
                <a href="mailto:contact@vachanmotors.com" className="text-gray-300 hover:text-electricLime transition-colors">
                  contact@vachanmotors.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates on new models, features, and company news.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-electricLime"
                required
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

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Vachan Motors Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-electricLime transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-electricLime transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-electricLime transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
