
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Users, Globe } from 'lucide-react';
import Layout from '@/components/Layout';

const Clients = () => {
  const clientLogos = [
    { name: 'TechStart Inc.', logo: 'https://via.placeholder.com/200x80/017ee1/FFFFFF?text=TechStart' },
    { name: 'Global Retail Co.', logo: 'https://via.placeholder.com/200x80/017ee1/FFFFFF?text=GlobalRetail' },
    { name: 'FinanceFlow Corp', logo: 'https://via.placeholder.com/200x80/017ee1/FFFFFF?text=FinanceFlow' },
    { name: 'EduTech Academy', logo: 'https://via.placeholder.com/200x80/017ee1/FFFFFF?text=EduTech' },
    { name: 'MediCare Plus', logo: 'https://via.placeholder.com/200x80/017ee1/FFFFFF?text=MediCare' },
    { name: 'Prime Properties', logo: 'https://via.placeholder.com/200x80/017ee1/FFFFFF?text=PrimeProps' },
    { name: 'Manufacturing Pro', logo: 'https://via.placeholder.com/200x80/017ee1/FFFFFF?text=MfgPro' },
    { name: 'Gourmet Restaurants', logo: 'https://via.placeholder.com/200x80/017ee1/FFFFFF?text=Gourmet' },
    { name: 'Digital Marketing Hub', logo: 'https://via.placeholder.com/200x80/017ee1/FFFFFF?text=DigitalHub' },
    { name: 'Innovation Labs', logo: 'https://via.placeholder.com/200x80/017ee1/FFFFFF?text=InnoLabs' },
    { name: 'Smart Solutions', logo: 'https://via.placeholder.com/200x80/017ee1/FFFFFF?text=SmartSol' },
    { name: 'Enterprise Systems', logo: 'https://via.placeholder.com/200x80/017ee1/FFFFFF?text=EntSystems' }
  ];

  const testimonials = [
    {
      name: 'David Wilson',
      title: 'CEO',
      company: 'TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      text: 'Indutech transformed our business with their innovative software solution. Our productivity increased by 300% and we saw immediate ROI. Their team\'s expertise and dedication to our success has been exceptional.',
      rating: 5,
      project: 'E-commerce Platform Development'
    },
    {
      name: 'Lisa Brown',
      title: 'Marketing Director',
      company: 'Global Retail Co.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612e5d2?w=150&h=150&fit=crop&crop=face',
      text: 'Outstanding e-commerce platform development. Sales increased by 150% within the first quarter. The team understood our vision perfectly and delivered beyond our expectations.',
      rating: 5,
      project: 'Digital Marketing & E-commerce'
    },
    {
      name: 'Robert Lee',
      title: 'CTO',
      company: 'Manufacturing Pro',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      text: 'Excellent IT consultancy services. They optimized our entire infrastructure and reduced costs by 40%. Their strategic approach to technology transformation was exactly what we needed.',
      rating: 5,
      project: 'IT Infrastructure Optimization'
    },
    {
      name: 'Sarah Martinez',
      title: 'Founder',
      company: 'EduTech Academy',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      text: 'The learning platform exceeded our expectations and delivered outstanding learning outcomes. Student engagement increased by 200% and completion rates improved dramatically.',
      rating: 5,
      project: 'Educational Platform Development'
    },
    {
      name: 'Michael Chen',
      title: 'Operations Manager',
      company: 'Prime Properties',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      text: 'The CRM system transformed our real estate business operations. Lead conversion increased by 45% and our team efficiency improved significantly. Indutech delivered exactly what we needed.',
      rating: 5,
      project: 'Real Estate CRM Platform'
    },
    {
      name: 'Jennifer Taylor',
      title: 'CFO',
      company: 'FinanceFlow Corp',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
      text: 'This dashboard revolutionized how we analyze and present financial data. Reporting time reduced by 40% and data accuracy improved by 200%. The ROI was immediate and substantial.',
      rating: 5,
      project: 'Financial Analytics Dashboard'
    }
  ];

  const clientStats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Globe, value: '15+', label: 'Industries Served' },
    { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' },
    { icon: Users, value: '85%', label: 'Client Retention Rate' }
  ];

  const industries = [
    'E-commerce & Retail',
    'Healthcare & Medical',
    'Financial Services',
    'Education & Training',
    'Real Estate',
    'Manufacturing',
    'Food & Beverage',
    'Technology Startups',
    'Professional Services',
    'Non-Profit Organizations',
    'Government Agencies',
    'Entertainment & Media'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-brand-secondary to-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Valued Clients
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Trusted by businesses across industries to deliver innovative technology solutions that drive growth and success
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12">
              {clientStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-blue-100" />
                  <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                  <div className="text-blue-100 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to partner with innovative companies across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear directly from businesses that have transformed their operations with our solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.title}</p>
                      </div>
                    </div>
                    <p className="text-primary font-medium text-sm">{testimonial.company}</p>
                    <p className="text-xs text-gray-500 mt-1">Project: {testimonial.project}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse expertise spans across multiple industries, delivering tailored solutions for unique business challenges
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer group">
                <span className="text-center font-medium group-hover:text-white">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Summary */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Measurable Results for Our Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just deliver projects - we deliver results that make a real impact on your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '300%', description: 'Average productivity increase' },
              { metric: '150%', description: 'Average sales growth' },
              { metric: '40%', description: 'Average cost reduction' },
              { metric: '200%', description: 'Average efficiency improvement' }
            ].map((result, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-8">
                  <div className="text-4xl font-bold text-primary mb-2">{result.metric}</div>
                  <p className="text-gray-600">{result.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Clients Choose to Stay With Us
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Long-term Partnership Focus',
                    description: 'We build lasting relationships, not just one-time projects. Our 85% client retention rate speaks to our commitment to ongoing success.'
                  },
                  {
                    title: 'Proactive Support & Maintenance',
                    description: 'We don\'t disappear after launch. Our team provides continuous monitoring, updates, and improvements to ensure optimal performance.'
                  },
                  {
                    title: 'Scalable Solutions',
                    description: 'Our solutions grow with your business. We design architectures that can adapt and scale as your needs evolve.'
                  },
                  {
                    title: 'Transparent Communication',
                    description: 'Regular updates, clear reporting, and honest communication build trust and ensure alignment throughout every project.'
                  }
                ].map((point, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{point.title}</h3>
                      <p className="text-gray-600">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=500&fit=crop"
                alt="Client partnership"
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
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Let's discuss how we can help your business achieve similar results. Get a free consultation and discover the possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg">
                Start Your Success Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                View Our Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;
