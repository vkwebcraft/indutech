
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
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
    { 
      name: 'Services', 
      href: '/services',
      hasDropdown: true,
      services: [
        { name: 'Software Development', description: 'Custom software solutions tailored to your business needs', href: '/services#software-development' },
        { name: 'Web Design & Development', description: 'Modern, responsive websites that convert visitors', href: '/services#web-development' },
        { name: 'IT Consultancy', description: 'Strategic IT guidance for digital transformation', href: '/services#it-consultancy' },
        { name: 'Digital Marketing', description: 'Data-driven marketing strategies for growth', href: '/services#digital-marketing' },
        { name: 'E-commerce Solutions', description: 'Complete online store solutions with payment integration', href: '/services#ecommerce' },
        { name: 'Web Hosting & Server Management', description: 'Reliable hosting and server management', href: '/services#hosting' },
        { name: 'Database Management', description: 'Professional database design and optimization', href: '/services#database' }
      ]
    },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Clients', href: '/clients' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="bg-white/98 backdrop-blur-xl shadow-sm border-b border-gray-100 sticky top-0 z-40">
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
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="space-x-1">
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.hasDropdown ? (
                      <>
                        <NavigationMenuTrigger className="px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 hover:bg-gray-50 text-gray-700 hover:text-primary data-[state=open]:bg-primary/5 data-[state=open]:text-primary">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-white border border-gray-100 shadow-xl rounded-2xl p-8 w-[650px] z-50">
                          <div className="grid grid-cols-1 gap-6">
                            <div className="mb-4">
                              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Services</h3>
                              <p className="text-sm text-gray-600">Comprehensive IT solutions for your business growth</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              {item.services?.map((service, index) => (
                                <Link
                                  key={index}
                                  to={service.href}
                                  className="group block p-4 rounded-xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-brand-secondary/5 transition-all duration-300 border border-transparent hover:border-primary/10"
                                >
                                  <div className="font-semibold text-gray-900 text-sm mb-2 group-hover:text-primary transition-colors">
                                    {service.name}
                                  </div>
                                  <div className="text-xs text-gray-600 leading-relaxed">
                                    {service.description}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        className={`px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 hover:bg-gray-50 ${
                          isActive(item.href) 
                            ? 'text-primary bg-primary/5' 
                            : 'text-gray-700 hover:text-primary'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                variant="outline" 
                className="rounded-full border-2 hover:border-primary hover:text-primary px-6 py-2.5 font-medium transition-all duration-300"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                Get Quote
              </Button>
              <Button 
                className="bg-gradient-to-r from-primary to-brand-secondary hover:from-brand-secondary hover:to-primary rounded-full px-8 py-2.5 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setIsConsultationModalOpen(true)}
              >
                Contact us
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-full p-2"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden border-t border-gray-200 py-6 bg-white/98 backdrop-blur-xl">
              <nav className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className={`px-4 py-3 text-base font-medium transition-all duration-300 hover:bg-gray-50 rounded-xl flex items-center justify-between ${
                        isActive(item.href) ? 'text-primary bg-primary/5' : 'text-gray-700'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                      {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                    </Link>
                    {item.hasDropdown && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.services?.map((service, index) => (
                          <Link
                            key={index}
                            to={service.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-300"
                            onClick={() => setIsOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-6 space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full rounded-full border-2 font-medium"
                    onClick={() => {
                      setIsQuoteModalOpen(true);
                      setIsOpen(false);
                    }}
                  >
                    Get Quote
                  </Button>
                  <Button 
                    className="bg-gradient-to-r from-primary to-brand-secondary w-full rounded-full font-medium"
                    onClick={() => {
                      setIsConsultationModalOpen(true);
                      setIsOpen(false);
                    }}
                  >
                    Contact us
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
