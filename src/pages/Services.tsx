
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Code, Globe, Database, TrendingUp, Mail, Server, Users, CheckCircle } from 'lucide-react';
import Layout from '@/components/Layout';

const Services = () => {
  const capabilities = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your specific business requirements and industry needs.',
      features: [
        'Custom Web Applications',
        'Mobile App Development',
        'Desktop Software Solutions',
        'API Development & Integration',
        'Legacy System Modernization',
        'Software Maintenance & Support'
      ],
      technologies: ['React', 'Node.js', 'Python', 'Java', 'PHP', '.NET']
    },
    {
      icon: Globe,
      title: 'Web Design & Development',
      description: 'Modern, responsive websites that convert visitors into customers and represent your brand professionally.',
      features: [
        'Responsive Web Design',
        'E-commerce Development',
        'Content Management Systems',
        'Landing Page Optimization',
        'Website Redesign',
        'Progressive Web Apps'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'WordPress', 'Shopify']
    },
    {
      icon: Database,
      title: 'IT Consultancy',
      description: 'Strategic IT guidance to optimize your technology infrastructure and digital transformation journey.',
      features: [
        'IT Strategy & Planning',
        'Digital Transformation',
        'Technology Assessment',
        'System Integration',
        'Cloud Migration Strategy',
        'Cybersecurity Consulting'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes']
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to increase your online visibility and grow your customer base.',
      features: [
        'Search Engine Optimization',
        'Pay-Per-Click Advertising',
        'Social Media Marketing',
        'Content Marketing',
        'Email Marketing',
        'Analytics & Reporting'
      ],
      technologies: ['Google Ads', 'Facebook Ads', 'Analytics', 'SEMrush']
    }
  ];

  const approaches = [
    {
      icon: CheckCircle,
      title: 'Fixed Scope',
      description: 'Structured solutions for your projects.',
      details: 'Well-defined project scope with clear deliverables, timelines, and budget. Perfect for projects with established requirements.'
    },
    {
      icon: Users,
      title: 'Dedicated Teams',
      description: 'Build your team with top talent, fast.',
      details: 'Get access to skilled professionals who work exclusively on your project, ensuring consistency and deep understanding of your business needs.'
    },
    {
      icon: TrendingUp,
      title: 'Talent Augmentation',
      description: 'Full-time experts committed to your success.',
      details: 'Scale your existing team with our experienced developers who integrate seamlessly with your current processes and culture.'
    }
  ];

  const codeAsAService = [
    {
      title: 'Basic Plan',
      description: 'Companies Initiating Internal Innovation Projects',
      features: ['Code Review', 'Basic Support', 'Monthly Reports'],
      price: 'Starting at $2,000/month'
    },
    {
      title: 'Standard Plan',
      description: 'Companies Scaling Development Operations',
      features: ['Dedicated Developer', '24/7 Support', 'Weekly Reports', 'Code Quality Assurance'],
      price: 'Starting at $5,000/month'
    },
    {
      title: 'Premium Plan',
      description: 'Dedicated DevOps for robust infrastructure',
      features: ['Full Team Access', 'Priority Support', 'Daily Reports', 'Advanced Analytics'],
      price: 'Custom Pricing'
    },
    {
      title: 'Enterprise',
      description: 'Fully customizable team and solutions',
      features: ['Custom Solutions', 'Dedicated Account Manager', 'SLA Guarantee', 'On-site Support'],
      price: 'Contact for Quote'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Craft your User-Centered Digital
                <span className="block text-blue-300">Experiences</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Transform your business with our comprehensive IT solutions designed for the modern digital landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-8">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 rounded-full px-8">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold text-blue-300">20%</div>
                  <div className="text-sm text-blue-100">Faster Delivery</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold text-purple-300">50%</div>
                  <div className="text-sm text-blue-100">Cost Reduction</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold text-green-300">300%</div>
                  <div className="text-sm text-blue-100">ROI Increase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Capabilities Column */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Capabilities</h2>
              </div>
              <div className="space-y-6">
                {capabilities.map((capability, index) => (
                  <div key={index} className="group">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors cursor-pointer">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{capability.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {capability.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Approaches Column */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Approaches</h2>
              </div>
              <div className="space-y-8">
                {approaches.map((approach, index) => (
                  <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <approach.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">{approach.title}</h3>
                          <p className="text-sm text-gray-600 mb-3">{approach.description}</p>
                          <p className="text-xs text-gray-500">{approach.details}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Code As A Service Column */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                  <Database className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Code As A Service</h2>
              </div>
              <div className="space-y-4">
                {codeAsAService.map((plan, index) => (
                  <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-gray-900 mb-2">{plan.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                      <ul className="space-y-2 mb-4">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="text-sm font-semibold text-blue-600">{plan.price}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Work: Our 3-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Analysis',
                description: 'We analyze your requirements and create a comprehensive project roadmap.',
                color: 'bg-blue-500'
              },
              {
                step: '02',
                title: 'Development & Implementation',
                description: 'Our expert team builds your solution using industry best practices.',
                color: 'bg-purple-500'
              },
              {
                step: '03',
                title: 'Launch & Support',
                description: 'We deploy your solution and provide ongoing maintenance and support.',
                color: 'bg-green-500'
              }
            ].map((process, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${process.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <span className="text-white font-bold text-xl">{process.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Let's discuss your project requirements and explore how our services can help achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-full">
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
