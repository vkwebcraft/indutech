
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Code, Globe, Database, Users, TrendingUp, Mail, CheckCircle, Star } from 'lucide-react';
import Layout from '@/components/Layout';

const Index = () => {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs with cutting-edge technologies'
    },
    {
      icon: Globe,
      title: 'Web Design',
      description: 'Modern, responsive websites that convert visitors to customers and drive growth'
    },
    {
      icon: Database,
      title: 'IT Consultancy',
      description: 'Strategic IT guidance to optimize your technology infrastructure and processes'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to grow your online presence and revenue'
    },
    {
      icon: Globe,
      title: 'E-commerce Solutions',
      description: 'Complete online store solutions with seamless payment integration'
    },
    {
      icon: Database,
      title: 'Web Hosting & Server Management',
      description: 'Reliable hosting and server management for optimal performance'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects' },
    { number: '200+', label: 'Developers' },
    { number: '18+', label: 'Industries' },
    { number: '10', label: 'Years of experience' },
    { number: '500+', label: 'Technologies' }
  ];

  const whyChooseUs = [
    'Expert Team with 10+ Years Experience',
    '24/7 Customer Support',
    'Proven Track Record with 500+ Projects',
    'Agile Development Methodology',
    'Competitive Pricing & Transparent Costs',
    'End-to-End Solution Provider'
  ];

  const testimonials = [
    {
      name: 'David Wilson',
      company: 'TechStart Inc.',
      text: 'Indutech transformed our business with their innovative software solution. Our productivity increased by 300%!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face'
    },
    {
      name: 'Lisa Brown',
      company: 'Global Retail Co.',
      text: 'Outstanding e-commerce platform development. Sales increased by 150% within the first quarter.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612e5d2?w=80&h=80&fit=crop&crop=face'
    },
    {
      name: 'Robert Lee',
      company: 'Manufacturing Pro',
      text: 'Excellent IT consultancy services. They optimized our entire infrastructure and reduced costs by 40%.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face'
    }
  ];

  const blogPosts = [
    {
      title: '10 Digital Transformation Trends for 2024',
      excerpt: 'Discover the latest trends shaping digital transformation and how your business can stay ahead.',
      date: 'Dec 15, 2024',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop',
      link: '/blog/digital-transformation-trends-2024'
    },
    {
      title: 'How AI is Revolutionizing Business Operations',
      excerpt: 'Explore how artificial intelligence is transforming business processes and driving innovation.',
      date: 'Dec 10, 2024',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
      link: '/blog/ai-business-trends-2024'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/9c1fd618-51dc-4d1e-8fbe-75359d93afab.png"
            alt="Team working in modern office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Build Smarter.{' '}
              <span className="text-primary">Evolve Faster</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed max-w-xl">
              Whether you need traditional product development or AI-driven transformation, our 200+ developers deliver end-to-end engineering, cloud, and data expertise—backed by 500-plus launches across 18 industries.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-brand-secondary px-8 py-6 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Talk to an expert
            </Button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm md:text-base font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From software development to digital marketing, we provide comprehensive solutions to accelerate your business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gray-50 hover:bg-white hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <service.icon className="h-8 w-8 text-primary group-hover:text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold mb-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/services">
              <Button className="bg-primary hover:bg-brand-secondary px-10 py-4 text-lg rounded-full">
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Driving Digital Innovation Since 2014
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Indutech IT Solution is your trusted partner in digital transformation. We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business results.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {whyChooseUs.slice(0, 4).map((reason, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{reason}</span>
                  </div>
                ))}
              </div>
              <Link to="/about">
                <Button className="bg-primary hover:bg-brand-secondary px-8 py-4 rounded-full">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform rotate-6"></div>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=500&fit=crop"
                alt="Team working on innovative solutions"
                className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from businesses that have transformed their operations with our solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-0 bg-gray-50">
                <CardContent className="pt-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-8 text-lg leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-primary text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with our latest articles on technology trends and business strategies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 group">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-8">
                  <p className="text-primary text-sm font-semibold mb-4">{post.date}</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                  <Link to={post.link}>
                    <Button variant="ghost" className="p-0 h-auto text-primary hover:text-brand-secondary font-semibold">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/blog">
              <Button className="bg-primary hover:bg-brand-secondary px-10 py-4 text-lg rounded-full">
                View All Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-brand-secondary to-primary opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how our innovative IT solutions can drive your business forward. Get a free consultation today and discover the possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-10 py-6 text-lg rounded-full shadow-lg">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-6 text-lg rounded-full">
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
