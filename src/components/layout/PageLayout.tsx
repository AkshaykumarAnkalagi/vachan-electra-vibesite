
import { ReactNode, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import TestimonialBar from '../shared/TestimonialBar';
import { useIsMobile } from '@/hooks/use-mobile';

interface PageLayoutProps {
  children: ReactNode;
  hideTestimonials?: boolean;
}

const PageLayout = ({ children, hideTestimonials = false }: PageLayoutProps) => {
  const isMobile = useIsMobile();
  
  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`flex-grow ${isMobile ? 'pt-14' : 'pt-16'}`}>
        {children}
      </main>
      {!hideTestimonials && <TestimonialBar />}
      <Footer />
    </div>
  );
};

export default PageLayout;
