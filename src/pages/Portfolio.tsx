
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Globe, Code, TrendingUp, ExternalLink, Award, Users, Star } from 'lucide-react';
import Layout from '@/components/Layout';

const Portfolio = () => {
  const featuredProjects = [
    {
      title: 'TechStart E-commerce Platform',
      category: 'E-commerce',
      description: 'Revolutionary e-commerce solution with AI-powered recommendations and seamless checkout experience.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AI/ML'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      results: ['300% increase in sales', '150% better conversion', '50% faster load times'],
      testimonial: 'Indutech delivered an exceptional platform that transformed our business completely.',
      client: 'TechStart Inc.',
      gradient: 'from-blue-600 to-purple-600',
      delay: '0ms'
    },
    {
      title: 'Healthcare Management System',
      category: 'Healthcare',
      description: 'Comprehensive patient management system with telemedicine capabilities and real-time analytics.',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'WebRTC', 'Docker'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      results: ['60% reduced admin time', '95% patient satisfaction', '40% cost savings'],
      testimonial: 'The system streamlined our operations and significantly improved patient care.',
      client: 'MediCare Plus',
      gradient: 'from-emerald-600 to-teal-600',
      delay: '100ms'
    },
    {
      title: 'Financial Analytics Dashboard',
      category: 'Finance',
      description: 'Real-time financial analytics platform with advanced reporting and predictive insights.',
      technologies: ['Angular', 'C#', 'SQL Server', 'Power BI', 'Azure'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      results: ['40% faster reporting', '200% data accuracy', '80% time savings'],
      testimonial: 'This dashboard revolutionized how we analyze and present financial data.',
      client: 'FinanceFlow Corp',
      gradient: 'from-orange-600 to-red-600',
      delay: '200ms'
    }
  ];

  const industries = [
    { name: 'E-commerce', count: 85, icon: Globe, color: 'bg-blue-500', projects: '85+ Projects' },
    { name: 'Healthcare', count: 62, icon: Code, color: 'bg-emerald-500', projects: '62+ Projects' },
    { name: 'Finance', count: 78, icon: TrendingUp, color: 'bg-orange-500', projects: '78+ Projects' },
    { name: 'Education', count: 45, icon: Code, color: 'bg-purple-500', projects: '45+ Projects' },
    { name: 'Manufacturing', count: 38, icon: Code, color: 'bg-red-500', projects: '38+ Projects' },
    { name: 'Real Estate', count: 29, icon: Globe, color: 'bg-indigo-500', projects: '29+ Projects' }
  ];

  const achievements = [
    { icon: Award, number: '500+', label: 'Successful Projects', color: 'text-blue-600' },
    { icon: Users, number: '200+', label: 'Happy Clients', color: 'text-emerald-600' },
    { icon: Star, number: '98%', label: 'Client Satisfaction', color: 'text-orange-600' },
    { icon: Globe, number: '15+', label: 'Countries Served', color: 'text-purple-600' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.03"%3E%3Cpath d="M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 text-purple-800 text-sm font-semibold mb-8">
                <Award className="w-4 h-4 mr-2" />
                Award-Winning Projects
              </div>
              
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
                Our Success
                <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                  Stories
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Showcasing transformative digital solutions that have driven exceptional business results across diverse industries worldwide.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                  Explore Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 rounded-full px-10 py-4 text-lg font-semibold">
                  Start Your Project
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-white border border-gray-200 rounded-3xl hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mx-auto mb-4`}>
                      <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
                    </div>
                    <div className="text-3xl font-black text-gray-900 mb-2">{achievement.number}</div>
                    <div className="text-gray-600 text-sm font-medium">{achievement.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 text-sm font-semibold mb-6">
              <Star className="w-4 h-4 mr-2" />
              Featured Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Transformative
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                Digital Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses achieve remarkable results through innovative technology solutions
            </p>
          </div>
          
          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl group ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: project.delay }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>
                  
                  <CardContent className="p-12 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-6">
                      <span className={`px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${project.gradient}`}>
                        {project.category}
                      </span>
                      <ExternalLink className="h-6 w-6 text-gray-400 group-hover:text-primary transition-colors cursor-pointer" />
                    </div>
                    
                    <h3 className="text-3xl font-black text-gray-900 mb-4 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Key Results:</h4>
                      <div className="space-y-2">
                        {project.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                            <span className="text-emerald-600 font-semibold">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className={`bg-gradient-to-r ${project.gradient} bg-opacity-5 p-6 rounded-2xl`}>
                      <p className="text-gray-700 italic mb-3 leading-relaxed">
                        "{project.testimonial}"
                      </p>
                      <p className="font-bold text-gray-900">— {project.client}</p>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200 text-emerald-800 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4 mr-2" />
              Industries We Serve
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Expertise Across
              <span className="block text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text">
                Multiple Industries
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our diverse portfolio spans across various industries, delivering tailored solutions for unique business challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 ${industry.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <industry.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {industry.name}
                  </h3>
                  
                  <div className="text-4xl font-black text-primary mb-2">{industry.count}+</div>
                  <p className="text-gray-600 font-medium">{industry.projects}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
            Ready to Create Your
            <span className="block text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
              Success Story?
            </span>
          </h2>
          <p className="text-xl mb-12 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join our growing list of satisfied clients. Let's discuss how we can transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 rounded-full px-10 py-4 text-lg font-semibold">
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
