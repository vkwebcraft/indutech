
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Users, Code, Globe } from 'lucide-react';
import Layout from '@/components/Layout';

const About = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      title: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in IT industry. John founded Indutech with a mission to democratize technology for businesses of all sizes. Expert in strategic planning and business development.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      linkedin: '#'
    },
    {
      name: 'Sarah Johnson',
      title: 'Chief Technology Officer',
      bio: 'Technology visionary with expertise in scalable software architecture, cloud solutions, and emerging technologies. Masters in Computer Science from MIT with 12+ years of experience.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612e5d2?w=400&h=400&fit=crop&crop=face',
      linkedin: '#'
    },
    {
      name: 'Mike Davis',
      title: 'Lead Software Developer',
      bio: 'Full-stack developer specializing in modern web technologies, mobile applications, and database architecture. Certified in multiple programming languages and frameworks.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      linkedin: '#'
    },
    {
      name: 'Emily Chen',
      title: 'Marketing Director',
      bio: 'Digital marketing strategist with expertise in SEO, social media marketing, and data analytics. MBA in Marketing with 10+ years of experience in B2B technology marketing.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      linkedin: '#'
    },
    {
      name: 'David Rodriguez',
      title: 'UI/UX Designer',
      bio: 'Creative designer focused on user-centered design principles. Expert in creating intuitive interfaces that enhance user experience and drive business results.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      linkedin: '#'
    },
    {
      name: 'Lisa Wang',
      title: 'Project Manager',
      bio: 'Agile project management expert with PMP certification. Specializes in coordinating complex IT projects and ensuring timely delivery with quality results.',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
      linkedin: '#'
    }
  ];

  const coreValues = [
    {
      icon: TrendingUp,
      title: 'Innovation Excellence',
      description: 'We continuously explore cutting-edge technologies and methodologies to deliver innovative solutions that give our clients a competitive advantage.'
    },
    {
      icon: Users,
      title: 'Client Success Focus',
      description: 'Our success is measured by our clients\' success. We build long-term partnerships and are committed to delivering measurable business value.'
    },
    {
      icon: Code,
      title: 'Technical Expertise',
      description: 'Our team maintains the highest technical standards and stays current with industry best practices to deliver robust, scalable solutions.'
    },
    {
      icon: Globe,
      title: 'Integrity & Transparency',
      description: 'We believe in honest communication, transparent processes, and ethical business practices in all our client relationships and partnerships.'
    }
  ];

  const milestones = [
    { year: '2014', event: 'Founded Indutech IT Solution' },
    { year: '2016', event: 'Reached 50+ successful projects' },
    { year: '2018', event: 'Expanded team to 15+ professionals' },
    { year: '2020', event: 'Launched cloud services division' },
    { year: '2022', event: 'Completed 300+ projects milestone' },
    { year: '2024', event: '500+ projects completed, 50+ team members' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-brand-secondary to-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Indutech IT Solution
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Empowering businesses through innovative technology solutions since 2014. We are your trusted partner in digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story & Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2014 by a team of passionate technologists, Indutech IT Solution began with a simple yet powerful vision: to make advanced technology accessible to businesses of all sizes.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small software development firm has evolved into a comprehensive IT solutions provider, serving clients across various industries with innovative technologies and strategic consulting.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, we're proud to have completed over 500 successful projects, helping businesses achieve digital transformation, improve operational efficiency, and drive sustainable growth.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop"
                alt="Our team at work"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and every solution we deliver
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                    <value.icon className="h-8 w-8 text-primary group-hover:text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in technology, business strategy, and client success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-primary font-medium">{member.title}</p>
                  </div>
                  <p className="text-gray-600 text-sm text-center">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our growth and evolution as a leading IT solutions provider
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="pt-6">
                        <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                        <p className="text-gray-800 font-medium">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Indutech */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"
                alt="Why choose Indutech"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Indutech?
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Proven Track Record</h3>
                    <p className="text-gray-600">Over 500 successful projects delivered across various industries with consistent quality and on-time delivery.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Expert Team</h3>
                    <p className="text-gray-600">Certified professionals with deep expertise in cutting-edge technologies and industry best practices.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Client-Centric Approach</h3>
                    <p className="text-gray-600">We prioritize understanding your business needs and delivering solutions that drive measurable results.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">End-to-End Solutions</h3>
                    <p className="text-gray-600">From initial consultation to ongoing support, we provide comprehensive services under one roof.</p>
                  </div>
                </div>
              </div>
              <Link to="/contact">
                <Button className="bg-primary hover:bg-brand-secondary px-8 py-3">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Let's discuss how our expertise and innovative approach can help transform your business and achieve your digital goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg">
                Get Free Consultation
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

export default About;
