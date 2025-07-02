
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const services = [
    'Software Development',
    'Web Design',
    'IT Consultancy',
    'Digital Marketing',
    'E-commerce Solutions',
    'Web Hosting',
    'Server Management'
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-8">
              <img 
                src="/lovable-uploads/35e03803-1007-4e96-a728-f20cfb7c7287.png" 
                alt="Indutech IT Solution" 
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Empowering businesses through innovative IT solutions and digital transformation services that drive growth and success.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@indutechit.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-primary" />
                <span>123 Tech Street, Digital City, DC 12345</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-8">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-8">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-xl font-bold mb-8">Stay Connected</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Subscribe to our newsletter for the latest tech insights and updates.
            </p>
            <div className="flex mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 text-gray-900 bg-white rounded-l-full border-0 focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <button className="px-6 py-3 bg-primary hover:bg-brand-secondary text-white rounded-r-full transition-colors duration-200">
                Subscribe
              </button>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 Indutech IT Solution. All rights reserved.
            </p>
            <div className="flex space-x-8 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-primary transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="hover:text-primary transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
