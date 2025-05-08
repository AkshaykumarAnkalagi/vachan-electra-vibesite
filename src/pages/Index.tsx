
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Zap, Battery, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import PageLayout from '@/components/layout/PageLayout';
import ResponsiveImage from '@/components/shared/ResponsiveImage';
import { useIsMobile, useIsTablet } from '@/hooks/use-mobile';

const statsData = [
  { id: 1, label: 'Range Per Charge', value: '200', unit: 'KM' },
  { id: 2, label: 'Dealers Nationwide', value: '150', unit: '+' },
  { id: 3, label: 'Cities Covered', value: '50', unit: '+' }
];

const featuresData = [
  {
    id: 1,
    title: 'Fast Charging',
    description: 'Go from 0 to 80% in just 45 minutes with our quick charge technology.',
    icon: <Zap className="h-6 w-6 md:h-8 md:w-8 text-electricLime" />
  },
  {
    id: 2,
    title: 'Extended Battery Life',
    description: 'Our batteries are designed to last 2000+ charging cycles, giving you years of reliable service.',
    icon: <Battery className="h-6 w-6 md:h-8 md:w-8 text-electricLime" />
  },
  {
    id: 3,
    title: 'Low Running Cost',
    description: 'Save up to ₹400 per day compared to conventional fuel vehicles.',
    icon: <Clock className="h-6 w-6 md:h-8 md:w-8 text-electricLime" />
  },
  {
    id: 4,
    title: 'Award Winning Design',
    description: 'Recognized for innovation and ergonomics with multiple industry awards.',
    icon: <Award className="h-6 w-6 md:h-8 md:w-8 text-electricLime" />
  }
];

const productsData = [
  {
    id: 1,
    name: 'PASS 1+3',
    description: 'Perfect for passenger transport in urban environments',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['200 KM Range', 'Fast Charging', 'Comfortable Seating', 'Advanced Safety']
  },
  {
    id: 2,
    name: 'PASS 1+6',
    description: 'Designed for maximum capacity and comfort',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['180 KM Range', 'Enhanced Suspension', 'Spacious Interior', 'High Durability']
  }
];

// Counter animation hook
const useCounterAnimation = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return { count, ref: elementRef };
};

const Index = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <PageLayout>
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[80vh] md:min-h-screen flex items-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
            poster="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          >
            <source src="https://cdn.coverr.co/videos/coverr-electric-vehicles-charging-1559/1080p.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-jetBlack opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Electrifying India, 
              <span className="text-electricLime block mt-2">One Ride at a Time</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 opacity-90">
              Experience the future of transportation with our premium electric three-wheelers.
              Eco-friendly, cost-effective, and designed for the Indian roads.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Button 
                asChild
                className="bg-electricLime text-jetBlack hover:bg-neonEmerald hover:text-white flex items-center gap-2 text-base md:text-lg px-5 py-5 md:px-8 md:py-6"
              >
                <Link to="/products">
                  Explore Models <ArrowRight size={isMobile ? 16 : 18} />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border-white text-white hover:bg-white/10 flex items-center gap-2 text-base md:text-lg px-5 py-5 md:px-8 md:py-6"
              >
                <Link to="/contact">
                  Dealer Enquiry
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            {statsData.map((stat) => {
              const { count, ref } = useCounterAnimation(parseInt(stat.value));
              return (
                <div 
                  key={stat.id} 
                  ref={ref}
                  className="p-4 md:p-8 rounded-lg hover-scale"
                >
                  <div className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-electricLime to-neonEmerald">
                    {count}{stat.unit}
                  </div>
                  <p className="text-base md:text-lg text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Preview Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2 md:mb-4">Our Premium Electric Vehicles</h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-8 md:mb-12 max-w-3xl mx-auto">
            Designed for Indian roads and conditions, our vehicles offer the perfect blend of performance, comfort, and efficiency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {productsData.map((product) => (
              <Card 
                key={product.id} 
                className="overflow-hidden border-0 shadow-lg hover-scale"
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <ResponsiveImage 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4 md:p-6 text-white">
                      <h3 className="text-xl md:text-2xl font-bold">{product.name}</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4 md:p-6">
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="mb-5 md:mb-6">
                    <h4 className="text-sm uppercase font-semibold text-gray-500 mb-2">Key Features</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-700 text-sm md:text-base">
                          <Check size={isMobile ? 14 : 16} className="text-neonEmerald" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    asChild
                    className="w-full bg-gradient-to-r from-electricLime to-neonEmerald text-jetBlack"
                  >
                    <Link to={`/products#${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      View Details
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2 md:mb-4">Why Choose Us</h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-8 md:mb-12 max-w-3xl mx-auto">
            Our electric vehicles are packed with innovative features designed to make your ride smoother, safer, and more economical.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuresData.map((feature, index) => (
              <div 
                key={feature.id}
                className="p-4 md:p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-electricLime"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-3 md:mb-4">{feature.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-jetBlack to-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Ready to Make the Switch?</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied drivers who have already made the smart choice for their business and the environment.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <Button 
              asChild
              className="bg-electricLime text-jetBlack hover:bg-neonEmerald hover:text-white text-base md:text-lg px-5 py-5 md:px-8 md:py-6"
            >
              <Link to="/contact">
                Book a Test Drive
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-base md:text-lg px-5 py-5 md:px-8 md:py-6"
            >
              <Link to="/service-centers">
                Find Nearest Dealer
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
