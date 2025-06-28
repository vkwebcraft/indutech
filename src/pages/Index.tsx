
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Code, Globe, Database, Users, TrendingUp, Mail } from 'lucide-react';
import Layout from '@/components/Layout';

const Index = () => {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs'
    },
    {
      icon: Globe,
      title: 'Web Design',
      description: 'Modern, responsive websites that convert visitors to customers'
    },
    {
      icon: Database,
      title: 'IT Consultancy',
      description: 'Strategic IT guidance to optimize your technology infrastructure'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to grow your online presence'
    },
    {
      icon: Globe,
      title: 'E-commerce Solutions',
      description: 'Complete online store solutions with payment integration'
    },
    {
      icon: Database,
      title: 'Web Hosting & Server Management',
      description: 'Reliable hosting and server management for optimal performance'
    }
  ];

  const whyChooseUs = [
    'Expert Team with 10+ Years Experience',
    '24/7 Customer Support',
    'Proven Track Record with 500+ Projects',
    'Agile Development Methodology',
    'Competitive Pricing & Transparent Costs',
    'End-to-End Solution Provider'
  ];

  const teamMembers = [
    {
      name: 'John Smith',
      title: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in IT industry, driving innovation and business growth.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Sarah Johnson',
      title: 'CTO',
      bio: 'Technology expert specializing in scalable software architecture and cloud solutions.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612e5d2?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Mike Davis',
      title: 'Lead Developer',
      bio: 'Full-stack developer with expertise in modern web technologies and mobile apps.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Emily Chen',
      title: 'Marketing Director',
      bio: 'Digital marketing strategist focused on ROI-driven campaigns and brand growth.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
    }
  ];

  const testimonials = [
    {
      name: 'David Wilson',
      company: 'TechStart Inc.',
      text: 'Indutech transformed our business with their innovative software solution. Our productivity increased by 300%!',
      rating: 5
    },
    {
      name: 'Lisa Brown',
      company: 'Global Retail Co.',
      text: 'Outstanding e-commerce platform development. Sales increased by 150% within the first quarter.',
      rating: 5
    },
    {
      name: 'Robert Lee',
      company: 'Manufacturing Pro',
      text: 'Excellent IT consultancy services. They optimized our entire infrastructure and reduced costs by 40%.',
      rating: 5
    }
  ];

  const blogPosts = [
    {
      title: '10 Digital Transformation Trends for 2024',
      excerpt: 'Discover the latest trends shaping digital transformation and how your business can stay ahead.',
      date: 'Dec 15, 2024',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop'
    },
    {
      title: 'The Future of Cloud Computing in Small Business',
      excerpt: 'How cloud solutions are revolutionizing small business operations and reducing IT costs.',
      date: 'Dec 10, 2024',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop'
    },
    {
      title: 'Cybersecurity Best Practices for Remote Teams',
      excerpt: 'Essential security measures to protect your business in the remote work era.',
      date: 'Dec 5, 2024',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-brand-secondary to-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Take Your Business to the Next Level
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Innovative IT solutions that drive growth, efficiency, and digital transformation for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                View Our Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive IT Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From software development to digital marketing, we provide end-to-end solutions to accelerate your business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="bg-primary hover:bg-brand-secondary px-8 py-3">
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Driving Digital Innovation Since 2014
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Indutech IT Solution is your trusted partner in digital transformation. We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business results.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team of certified professionals has successfully completed over 500 projects, helping businesses of all sizes achieve their digital goals and stay competitive in today's fast-paced market.
              </p>
              <Link to="/about">
                <Button className="bg-primary hover:bg-brand-secondary">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
                alt="Team working on innovative solutions"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Indutech IT Solution?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional results through proven expertise, innovative solutions, and unwavering commitment to client success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-gray-800 font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of technology experts and business strategists work together to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.title}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from businesses that have transformed their operations with our solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-primary text-sm">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Insights & Updates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with our latest articles on technology trends, business strategies, and industry insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="pt-6">
                  <p className="text-primary text-sm font-medium mb-2">{post.date}</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-brand-secondary">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/blog">
              <Button className="bg-primary hover:bg-brand-secondary px-8 py-3">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Let's discuss how our innovative IT solutions can drive your business forward. Get a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
