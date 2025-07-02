
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import GetQuoteModal from './GetQuoteModal';
import ConsultationModal from './ConsultationModal';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Clients', href: '/clients' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/35e03803-1007-4e96-a728-f20cfb7c7287.png" 
                alt="Indutech IT Solution" 
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:bg-gray-100 ${
                    isActive(item.href) 
                      ? 'text-primary bg-primary/10' 
                      : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                variant="outline" 
                className="rounded-full border-2 hover:border-primary hover:text-primary"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                Get Quote
              </Button>
              <Button 
                className="bg-primary hover:bg-brand-secondary rounded-full px-6"
                onClick={() => setIsConsultationModalOpen(true)}
              >
                Free Consultation
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-full"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden border-t border-gray-200 py-6 bg-white/95 backdrop-blur-md">
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-4 py-3 text-base font-medium transition-all duration-200 hover:bg-gray-50 rounded-xl ${
                      isActive(item.href) ? 'text-primary bg-primary/10' : 'text-gray-700'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-6 space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full rounded-full border-2"
                    onClick={() => {
                      setIsQuoteModalOpen(true);
                      setIsOpen(false);
                    }}
                  >
                    Get Quote
                  </Button>
                  <Button 
                    className="bg-primary hover:bg-brand-secondary w-full rounded-full"
                    onClick={() => {
                      setIsConsultationModalOpen(true);
                      setIsOpen(false);
                    }}
                  >
                    Free Consultation
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <GetQuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
      <ConsultationModal 
        isOpen={isConsultationModalOpen} 
        onClose={() => setIsConsultationModalOpen(false)} 
      />
    </>
  );
};

export default Header;
