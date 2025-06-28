
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Code, Globe, Database, TrendingUp, Mail, Server, Users } from 'lucide-react';
import Layout from '@/components/Layout';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your specific business requirements and industry needs.',
      details: 'Our experienced development team creates robust, scalable software applications using the latest technologies and best practices. We specialize in web applications, mobile apps, desktop software, and enterprise solutions that streamline your business processes and improve operational efficiency.',
      features: [
        'Custom Web Applications',
        'Mobile App Development (iOS & Android)',
        'Desktop Software Solutions',
        'API Development & Integration',
        'Legacy System Modernization',
        'Software Maintenance & Support'
      ],
      technologies: ['React', 'Node.js', 'Python', 'Java', 'PHP', '.NET', 'Flutter', 'React Native']
    },
    {
      icon: Globe,
      title: 'Web Design & Development',
      description: 'Modern, responsive websites that convert visitors into customers and represent your brand professionally.',
      details: 'We create stunning, user-friendly websites that not only look great but also perform exceptionally. Our web design process focuses on user experience, search engine optimization, and conversion optimization to ensure your website drives real business results.',
      features: [
        'Responsive Web Design',
        'E-commerce Website Development',
        'Content Management Systems',
        'Landing Page Optimization',
        'Website Redesign & Modernization',
        'Progressive Web Apps (PWA)'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'WordPress', 'Shopify', 'WooCommerce', 'Magento']
    },
    {
      icon: Database,
      title: 'IT Consultancy',
      description: 'Strategic IT guidance to optimize your technology infrastructure and digital transformation journey.',
      details: 'Our IT consultancy services help businesses make informed technology decisions, optimize their IT infrastructure, and develop comprehensive digital strategies. We provide expert advice on technology adoption, system integration, and digital transformation initiatives.',
      features: [
        'IT Strategy & Planning',
        'Digital Transformation Consulting',
        'Technology Assessment & Audits',
        'System Integration Planning',
        'Cloud Migration Strategy',
        'Cybersecurity Consulting'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Ansible']
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to increase your online visibility and grow your customer base.',
      details: 'Our comprehensive digital marketing services help businesses establish a strong online presence, attract qualified leads, and convert prospects into customers. We use advanced analytics and proven strategies to maximize your return on investment.',
      features: [
        'Search Engine Optimization (SEO)',
        'Pay-Per-Click Advertising (PPC)',
        'Social Media Marketing',
        'Content Marketing Strategy',
        'Email Marketing Campaigns',
        'Marketing Analytics & Reporting'
      ],
      technologies: ['Google Ads', 'Facebook Ads', 'Google Analytics', 'SEMrush', 'Mailchimp', 'HubSpot']
    },
    {
      icon: Globe,
      title: 'E-commerce Solutions',
      description: 'Complete online store solutions with payment integration and inventory management.',
      details: 'We build powerful e-commerce platforms that provide seamless shopping experiences for your customers while giving you complete control over your online business. Our solutions include everything from product catalog management to secure payment processing.',
      features: [
        'Custom E-commerce Development',
        'Payment Gateway Integration',
        'Inventory Management Systems',
        'Multi-vendor Marketplace Solutions',
        'B2B E-commerce Platforms',
        'Mobile Commerce Applications'
      ],
      technologies: ['Shopify', 'WooCommerce', 'Magento', 'BigCommerce', 'Stripe', 'PayPal', 'Square']
    },
    {
      icon: Server,
      title: 'Web Hosting & Server Management',
      description: 'Reliable hosting solutions and server management for optimal website performance and security.',
      details: 'Our hosting and server management services ensure your websites and applications run smoothly, securely, and efficiently. We provide comprehensive solutions from shared hosting to dedicated servers with 24/7 monitoring and support.',
      features: [
        'Managed Web Hosting',
        'Cloud Server Solutions',
        'Dedicated Server Management',
        'SSL Certificate Installation',
        'Backup & Disaster Recovery',
        'Performance Optimization'
      ],
      technologies: ['Linux', 'Windows Server', 'cPanel', 'Plesk', 'AWS', 'DigitalOcean', 'Cloudflare']
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Professional database design, optimization, and management services for reliable data storage.',
      details: 'We provide comprehensive database solutions to ensure your business data is stored securely, accessed efficiently, and backed up regularly. Our database experts handle everything from initial design to ongoing maintenance and optimization.',
      features: [
        'Database Design & Architecture',
        'Performance Optimization',
        'Data Migration Services',
        'Backup & Recovery Solutions',
        'Security & Access Control',
        'Database Monitoring & Maintenance'
      ],
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Server', 'Oracle', 'Redis', 'Elasticsearch']
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-brand-secondary to-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Comprehensive IT Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              End-to-end technology solutions designed to accelerate your business growth and digital transformation
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                          <service.icon className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                      <p className="text-gray-700 mb-6">{service.details}</p>
                      
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies We Use:</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <Link to="/contact">
                        <Button className="bg-primary hover:bg-brand-secondary">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={`https://images.unsplash.com/photo-${
                      index === 0 ? '1488590528505-98d2b5aba04b' :
                      index === 1 ? '1461749280684-dccba630e2f6' :
                      index === 2 ? '1486312338219-ce68d2c6f44d' :
                      index === 3 ? '1518770660439-4636190af475' :
                      index === 4 ? '1531297484001-80022131f5a1' :
                      index === 5 ? '1487058792275-0ad4aaf24ca7' :
                      '1605810230434-7631ac76ec81'
                    }?w=600&h=400&fit=crop`}
                    alt={service.title}
                    className="rounded-lg shadow-xl w-full h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and client satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Planning',
                description: 'We analyze your requirements, define project scope, and create a detailed roadmap.'
              },
              {
                step: '02',
                title: 'Design & Architecture',
                description: 'Our team designs the user interface and technical architecture for optimal performance.'
              },
              {
                step: '03',
                title: 'Development & Testing',
                description: 'We build your solution using best practices and conduct thorough testing throughout.'
              },
              {
                step: '04',
                title: 'Deployment & Support',
                description: 'We deploy your solution and provide ongoing support to ensure continuous success.'
              }
            ].map((process, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{process.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Let's discuss your project requirements and explore how our services can help achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
