
import { useState } from 'react';
import { Check, ArrowRight, Zap, Battery, Shield, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PageLayout from '@/components/layout/PageLayout';

const productsData = [
  {
    id: 'pass-1-3',
    name: 'PASS 1+3',
    tagline: 'Urban Mobility Redefined',
    description: 'Perfect for city travel, the PASS 1+3 offers exceptional range and comfort for your passengers with compact dimensions for easy maneuverability.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: {
      range: '200 KM',
      topSpeed: '45 KM/H',
      chargingTime: '45 mins (Fast) / 3 hrs (Regular)',
      motorPower: '1200W',
      batteryCapacity: '4.2 kWh',
      loadCapacity: '400 KG',
      dimensions: '2800 × 1400 × 1800 mm',
      seating: 'Driver + 3 Passengers',
    },
    features: [
      'Quick-swap battery system',
      'All-weather cabin protection',
      'Digital instrument cluster',
      'Regenerative braking system',
      'GPS tracking and fleet management integration',
      'Reinforced chassis for Indian roads',
      'Customizable exteriors for branding',
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    price: 'Starting from ₹1.5 Lakhs*'
  },
  {
    id: 'pass-1-6',
    name: 'PASS 1+6',
    tagline: 'Maximum Capacity, Minimum Footprint',
    description: 'Designed for high-capacity transport needs, the PASS 1+6 delivers exceptional value with increased seating without compromising on performance.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: {
      range: '180 KM',
      topSpeed: '40 KM/H',
      chargingTime: '60 mins (Fast) / 3.5 hrs (Regular)',
      motorPower: '1500W',
      batteryCapacity: '5.2 kWh',
      loadCapacity: '600 KG',
      dimensions: '3200 × 1500 × 1900 mm',
      seating: 'Driver + 6 Passengers',
    },
    features: [
      'Enhanced suspension system',
      'Spacious cabin with improved ventilation',
      'Rear passenger infotainment system',
      'Advanced battery management system',
      'Reinforced steel frame for safety',
      'Higher ground clearance for rough terrain',
      'Optional solar panel roof extension',
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    price: 'Starting from ₹1.8 Lakhs*'
  }
];

const benefitsData = [
  {
    icon: <Zap size={24} className="text-electricLime" />,
    title: 'Lower Running Costs',
    description: 'Save up to 70% on daily operational expenses compared to traditional fuel vehicles.'
  },
  {
    icon: <Battery size={24} className="text-electricLime" />,
    title: 'Minimal Maintenance',
    description: 'Electric motors have fewer moving parts, reducing service needs and downtime.'
  },
  {
    icon: <Shield size={24} className="text-electricLime" />,
    title: 'Government Incentives',
    description: 'Take advantage of subsidies and tax benefits for electric commercial vehicles.'
  },
  {
    icon: <Truck size={24} className="text-electricLime" />,
    title: 'Future-Proof Investment',
    description: 'Stay ahead of emission regulations and fuel price fluctuations.'
  }
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(productsData[0]);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Electric vehicles technology"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <div className="w-20 h-1 bg-electricLime mb-8"></div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Electric <span className="text-electricLime">Vehicles</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Cutting-edge three-wheelers designed for the future of urban mobility.
            </p>
          </div>
        </div>
      </section>

      {/* Product Selection Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-6 mb-12 justify-center">
            {productsData.map((product) => (
              <div 
                key={product.id}
                className={`cursor-pointer p-6 rounded-xl transition-all duration-300 ${
                  selectedProduct.id === product.id 
                    ? 'bg-electricLime text-jetBlack shadow-lg' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedProduct(product)}
              >
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className={selectedProduct.id === product.id ? 'text-jetBlack/80' : 'text-gray-600'}>
                  {product.tagline}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative group">
              <div className="overflow-hidden rounded-xl">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-electricLime text-jetBlack px-6 py-3 rounded-lg font-bold shadow-lg">
                {selectedProduct.name}
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">{selectedProduct.name}</h2>
              <p className="text-xl text-gray-600 mb-6">{selectedProduct.tagline}</p>
              <p className="text-gray-700 mb-8">{selectedProduct.description}</p>
              
              <div className="text-2xl font-sora font-bold mb-6 text-neonEmerald">
                {selectedProduct.price}
              </div>

              <div className="space-y-2 mb-8">
                {['Eco-friendly', '3-Year Warranty', 'Low Maintenance', 'High Performance'].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="text-electricLime" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-electricLime text-jetBlack hover:bg-neonEmerald hover:text-white"
                >
                  Book Test Ride
                </Button>
                <Button 
                  variant="outline" 
                  className="border-electricLime text-jetBlack hover:bg-electricLime"
                >
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <Tabs 
            defaultValue="overview" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full md:w-[400px] grid-cols-3 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="animate-fade-in">
              <div className="aspect-w-16 aspect-h-9 mb-8 rounded-xl overflow-hidden">
                <iframe 
                  src={selectedProduct.videoUrl}
                  title={`${selectedProduct.name} video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-[400px] md:h-[500px]"
                ></iframe>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                The {selectedProduct.name} represents the pinnacle of electric three-wheeler technology, 
                combining efficiency, comfort, and reliability in a package designed specifically for 
                Indian roads and conditions.
              </p>
              <p className="text-lg text-gray-700">
                With its advanced battery system and thoughtful design features, the {selectedProduct.name} 
                offers a smooth, quiet ride for both driver and passengers while significantly reducing 
                operational costs compared to traditional fuel vehicles.
              </p>
            </TabsContent>
            
            <TabsContent value="specs" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(selectedProduct.specs).map(([key, value]) => (
                  <div key={key} className="flex space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-3 bg-electricLime rounded-full"></div>
                    <div>
                      <h4 className="text-sm font-medium uppercase text-gray-500">
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </h4>
                      <p className="text-lg font-semibold">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="features" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedProduct.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4">
                    <div className="rounded-full p-2 bg-electricLime/20 text-electricLime">
                      <Check size={18} />
                    </div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-3">Why Go Electric?</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Discover the many advantages of switching to electric vehicles for your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefitsData.map((benefit, index) => (
              <div 
                key={index} 
                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:border-electricLime border border-transparent"
              >
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-jetBlack text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to Experience the Future of Mobility?</h2>
              <p className="text-lg opacity-80 mb-8">
                Schedule a test drive today and see how our electric three-wheelers can transform your business operations.
              </p>
              <Button 
                asChild
                className="bg-electricLime text-jetBlack hover:bg-neonEmerald hover:text-white flex items-center gap-2"
              >
                <Link to="/contact">
                  Schedule Now <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Electric vehicle charging"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Products;
