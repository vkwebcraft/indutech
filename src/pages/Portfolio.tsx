
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Globe, Code, TrendingUp } from 'lucide-react';
import Layout from '@/components/Layout';

const Portfolio = () => {
  const projects = [
    {
      title: 'TechStart E-commerce Platform',
      industry: 'E-commerce',
      description: 'Complete e-commerce solution with inventory management, payment processing, and customer analytics.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      results: '300% increase in online sales, 150% improvement in conversion rate',
      testimonial: 'Indutech delivered an exceptional e-commerce platform that transformed our business.',
      client: 'TechStart Inc.'
    },
    {
      title: 'Healthcare Management System',
      industry: 'Healthcare',
      description: 'Comprehensive patient management system with appointment scheduling and medical records.',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      results: '60% reduction in administrative time, improved patient satisfaction',
      testimonial: 'The system streamlined our operations and improved patient care significantly.',
      client: 'MediCare Plus'
    },
    {
      title: 'Financial Analytics Dashboard',
      industry: 'Finance',
      description: 'Real-time financial analytics platform with advanced reporting and data visualization.',
      technologies: ['Angular', 'C#', 'SQL Server', 'Power BI'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      results: '40% faster reporting, 200% improvement in data accuracy',
      testimonial: 'This dashboard revolutionized how we analyze and present financial data.',
      client: 'FinanceFlow Corp'
    },
    {
      title: 'Educational Learning Platform',
      industry: 'Education',
      description: 'Interactive online learning platform with video streaming and progress tracking.',
      technologies: ['React', 'Django', 'AWS', 'WebRTC'],
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
      results: '500+ active students, 95% completion rate',
      testimonial: 'The platform exceeded our expectations and delivered outstanding learning outcomes.',
      client: 'EduTech Academy'
    },
    {
      title: 'Restaurant Chain Management',
      industry: 'Food & Beverage',
      description: 'Multi-location restaurant management system with POS integration and inventory tracking.',
      technologies: ['PHP', 'Laravel', 'MySQL', 'Vue.js'],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      results: '25% cost reduction, 180% efficiency improvement',
      testimonial: 'Our restaurant operations have never been more efficient and profitable.',
      client: 'Gourmet Restaurants'
    },
    {
      title: 'Real Estate CRM Platform',
      industry: 'Real Estate',
      description: 'Customer relationship management system with property listings and lead tracking.',
      technologies: ['Next.js', 'Express.js', 'MongoDB', 'Mapbox'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      results: '45% increase in lead conversion, 300% growth in listings',
      testimonial: 'This CRM system transformed our real estate business operations.',
      client: 'Prime Properties'
    }
  ];

  const industries = [
    { name: 'E-commerce', count: 50, icon: Globe },
    { name: 'Healthcare', count: 35, icon: Code },
    { name: 'Finance', count: 40, icon: TrendingUp },
    { name: 'Education', count: 25, icon: Code },
    { name: 'Manufacturing', count: 30, icon: Code },
    { name: 'Real Estate', count: 20, icon: Globe }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-brand-secondary to-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Showcasing successful projects across various industries. Each solution is crafted to drive business growth and innovation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-blue-100">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-blue-100">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations and achieve remarkable results
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {project.industry}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t pt-4 mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Results Achieved:</h4>
                    <p className="text-green-600 font-medium">{project.results}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 italic mb-2">"{project.testimonial}"</p>
                    <p className="text-sm text-gray-600">- {project.client}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise spans across multiple industries, delivering tailored solutions for diverse business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 group">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                    <industry.icon className="h-8 w-8 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-3xl font-bold text-primary mb-2">{industry.count}+</p>
                  <p className="text-gray-600">Projects Delivered</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Success Formula
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What makes our projects successful? A proven methodology combined with deep technical expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                {[
                  {
                    title: 'Requirements Analysis',
                    description: 'We dive deep into your business needs and technical requirements to ensure perfect alignment.'
                  },
                  {
                    title: 'Agile Development',
                    description: 'Our iterative approach ensures regular feedback and flexibility throughout the development process.'
                  },
                  {
                    title: 'Quality Assurance',
                    description: 'Rigorous testing at every stage ensures robust, reliable, and secure solutions.'
                  },
                  {
                    title: 'Ongoing Support',
                    description: 'We provide continuous support and maintenance to ensure your solution evolves with your business.'
                  }
                ].map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=500&fit=crop"
                alt="Our development process"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join our growing list of satisfied clients. Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
