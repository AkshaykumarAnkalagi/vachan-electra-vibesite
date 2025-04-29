
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import TestimonialBar from '../shared/TestimonialBar';

interface PageLayoutProps {
  children: ReactNode;
  hideTestimonials?: boolean;
}

const PageLayout = ({ children, hideTestimonials = false }: PageLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        {children}
      </main>
      {!hideTestimonials && <TestimonialBar />}
      <Footer />
    </div>
  );
};

export default PageLayout;
