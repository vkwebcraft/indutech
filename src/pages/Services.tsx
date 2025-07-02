
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Code, Globe, Database, TrendingUp, Users, CheckCircle, Sparkles, Zap, Target } from 'lucide-react';
import Layout from '@/components/Layout';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      subtitle: 'Custom Solutions',
      description: 'Tailored software solutions built with cutting-edge technologies to transform your business operations.',
      features: ['Custom Web Applications', 'Mobile App Development', 'API Integration', 'Legacy Modernization'],
      gradient: 'from-blue-500 to-purple-600',
      delay: '0ms'
    },
    {
      icon: Globe,
      title: 'Web Design & Development',
      subtitle: 'Digital Experiences',
      description: 'Modern, responsive websites that captivate users and drive conversions for your business.',
      features: ['Responsive Design', 'E-commerce Platforms', 'CMS Development', 'Progressive Web Apps'],
      gradient: 'from-emerald-500 to-teal-600',
      delay: '100ms'
    },
    {
      icon: Database,
      title: 'IT Consultancy',
      subtitle: 'Strategic Guidance',
      description: 'Expert IT consulting to optimize your technology infrastructure and accelerate digital transformation.',
      features: ['IT Strategy Planning', 'Cloud Migration', 'System Integration', 'Security Assessment'],
      gradient: 'from-orange-500 to-red-600',
      delay: '200ms'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      subtitle: 'Growth Strategies',
      description: 'Data-driven marketing strategies to boost your online presence and accelerate business growth.',
      features: ['SEO Optimization', 'PPC Campaigns', 'Social Media Marketing', 'Analytics & Reporting'],
      gradient: 'from-pink-500 to-rose-600',
      delay: '300ms'
    }
  ];

  const approaches = [
    {
      icon: Target,
      title: 'Fixed Scope Projects',
      subtitle: 'Defined & Delivered',
      description: 'Well-structured projects with clear deliverables, timelines, and budgets.',
      features: ['Clear Requirements', 'Fixed Timeline', 'Defined Budget', 'Quality Assurance'],
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      icon: Users,
      title: 'Dedicated Teams',
      subtitle: 'Your Extended Team',
      description: 'Skilled professionals working exclusively on your projects with complete dedication.',
      features: ['Exclusive Focus', 'Team Consistency', 'Direct Communication', 'Long-term Partnership'],
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      icon: Zap,
      title: 'Talent Augmentation',
      subtitle: 'Scale Your Team',
      description: 'Experienced developers who integrate seamlessly with your existing team.',
      features: ['Quick Integration', 'Flexible Scaling', 'Skill Enhancement', 'Cost Effective'],
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      subtitle: 'Perfect for Small Projects',
      price: '$2,000',
      period: '/month',
      description: 'Ideal for companies starting their digital transformation journey.',
      features: ['Code Review', 'Basic Support', 'Monthly Reports', '1 Developer'],
      popular: false,
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      name: 'Growth',
      subtitle: 'Scaling Your Operations',
      price: '$5,000',
      period: '/month',
      description: 'Perfect for companies looking to scale their development operations.',
      features: ['Dedicated Developer', '24/7 Support', 'Weekly Reports', 'Code Quality Assurance', 'Priority Support'],
      popular: true,
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      name: 'Enterprise',
      subtitle: 'Complete Solutions',
      price: 'Custom',
      period: 'Pricing',
      description: 'Fully customizable solutions for large-scale enterprise needs.',
      features: ['Full Team Access', 'Dedicated Manager', 'Daily Reports', 'Advanced Analytics', 'SLA Guarantee'],
      popular: false,
      gradient: 'from-emerald-600 to-teal-600'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              Transform Your Business Today
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight">
              Craft Your
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              Comprehensive IT solutions designed for the modern digital landscape. 
              We transform businesses with innovative technology and strategic expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm rounded-full px-10 py-4 text-lg font-semibold">
                Get Consultation
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: '500+', label: 'Projects Delivered' },
                { number: '200+', label: 'Expert Developers' },
                { number: '98%', label: 'Client Satisfaction' },
                { number: '24/7', label: 'Support Available' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.number}</div>
                  <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <Code className="w-4 h-4 mr-2" />
              Our Core Services
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Solutions That Drive
              <span className="block text-transparent bg-gradient-to-r from-primary to-brand-secondary bg-clip-text">
                Real Results
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From concept to deployment, we deliver comprehensive solutions that transform your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white rounded-3xl"
                style={{ animationDelay: service.delay }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-500 mb-1">{service.subtitle}</div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full mt-8 bg-gray-900 hover:bg-gray-800 rounded-xl py-3 font-semibold">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approaches Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
              <Users className="w-4 h-4 mr-2" />
              Our Approach
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Flexible Engagement
              <span className="block text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text">
                Models
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the engagement model that best fits your project requirements and business goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approaches.map((approach, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 ${approach.bg} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <approach.icon className={`h-10 w-10 ${approach.color}`} />
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-500 mb-2">{approach.subtitle}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{approach.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {approach.description}
                  </p>
                  
                  <div className="space-y-3">
                    {approach.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center">
                        <CheckCircle className={`h-4 w-4 ${approach.color} mr-2 flex-shrink-0`} />
                        <span className="text-gray-700 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-6">
              <Database className="w-4 h-4 mr-2" />
              Pricing Plans
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Choose Your
              <span className="block text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                Perfect Plan
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Flexible pricing options designed to scale with your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`group relative border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden ${
                  plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 text-sm font-bold">
                    Most Popular
                  </div>
                )}
                
                <CardContent className={`p-8 ${plan.popular ? 'pt-16' : ''}`}>
                  <div className="text-center mb-8">
                    <div className="text-sm font-medium text-gray-500 mb-2">{plan.subtitle}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-4">
                      <span className="text-4xl font-black text-gray-900">{plan.price}</span>
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{plan.description}</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full py-3 font-semibold rounded-xl ${
                      plan.popular 
                        ? `bg-gradient-to-r ${plan.gradient} hover:shadow-lg hover:shadow-blue-500/25` 
                        : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Ready to Transform
            <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
              Your Business?
            </span>
          </h2>
          <p className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your project requirements and explore how our innovative solutions can accelerate your growth
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm rounded-full px-10 py-4 text-lg font-semibold">
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
