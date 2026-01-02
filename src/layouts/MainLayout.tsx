import { ReactNode } from 'react';
import { Navbar, Footer } from '@/components/shared';

interface MainLayoutProps {
  children: ReactNode;
  showNavbar?: boolean;
  showFooter?: boolean;
}

/**
 * Main layout wrapper with navbar and footer
 * Used for pages that need the standard header/footer layout
 */
export const MainLayout = ({ 
  children, 
  showNavbar = true, 
  showFooter = true 
}: MainLayoutProps) => {
  return (
    <>
      {showNavbar && <Navbar />}
      {children}
      {showFooter && <Footer />}
    </>
  );
};
