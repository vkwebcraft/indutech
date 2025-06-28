
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Users, TrendingUp, Globe, Code } from 'lucide-react';
import Layout from '@/components/Layout';

const Careers = () => {
  const openPositions = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Join our development team to build scalable web applications using modern technologies.',
      requirements: [
        'Expert knowledge of React, Node.js, and database technologies',
        'Experience with cloud platforms (AWS, Azure, or GCP)',
        'Strong problem-solving and communication skills',
        'Bachelor\'s degree in Computer Science or equivalent experience'
      ],
      responsibilities: [
        'Develop and maintain web applications and APIs',
        'Collaborate with cross-functional teams on project requirements',
        'Mentor junior developers and conduct code reviews',
        'Participate in architecture decisions and technical planning'
      ]
    },
    {
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Remote / On-site',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Drive digital marketing initiatives and help our clients achieve their growth objectives.',
      requirements: [
        'Proven experience in SEO, PPC, and social media marketing',
        'Proficiency with Google Analytics, Google Ads, and marketing automation tools',
        'Strong analytical skills and data-driven mindset',
        'Excellent written and verbal communication skills'
      ],
      responsibilities: [
        'Develop and execute digital marketing strategies for clients',
        'Manage and optimize PPC campaigns across multiple platforms',
        'Create compelling content for various digital channels',
        'Analyze campaign performance and provide actionable insights'
      ]
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Create intuitive and visually appealing user interfaces for web and mobile applications.',
      requirements: [
        'Proficiency in Figma, Adobe Creative Suite, and prototyping tools',
        'Strong portfolio demonstrating UX/UI design skills',
        'Understanding of design systems and accessibility principles',
        'Experience with user research and usability testing'
      ],
      responsibilities: [
        'Design user interfaces for web and mobile applications',
        'Conduct user research and create user personas',
        'Develop wireframes, prototypes, and design systems',
        'Collaborate with development teams to ensure design implementation'
      ]
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Build and maintain CI/CD pipelines and cloud infrastructure for our applications.',
      requirements: [
        'Experience with AWS, Docker, Kubernetes, and CI/CD tools',
        'Knowledge of Infrastructure as Code (Terraform, CloudFormation)',
        'Strong scripting skills (Python, Bash, or PowerShell)',
        'Understanding of monitoring and logging solutions'
      ],
      responsibilities: [
        'Design and implement CI/CD pipelines',
        'Manage cloud infrastructure and deployment processes',
        'Monitor application performance and system health',
        'Implement security best practices and compliance measures'
      ]
    },
    {
      title: 'Business Development Manager',
      department: 'Sales',
      location: 'Hybrid / On-site',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Drive business growth by identifying opportunities and building client relationships.',
      requirements: [
        'Proven track record in B2B sales and client relationship management',
        'Understanding of IT services and technology solutions',
        'Excellent presentation and negotiation skills',
        'MBA or equivalent business experience preferred'
      ],
      responsibilities: [
        'Identify and pursue new business opportunities',
        'Build and maintain relationships with key clients',
        'Develop proposals and negotiate contracts',
        'Collaborate with technical teams on solution design'
      ]
    },
    {
      title: 'Quality Assurance Engineer',
      department: 'Engineering',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Ensure the quality of our software products through comprehensive testing strategies.',
      requirements: [
        'Experience with manual and automated testing methodologies',
        'Knowledge of testing tools (Selenium, Cypress, Jest)',
        'Understanding of API testing and performance testing',
        'Strong attention to detail and analytical skills'
      ],
      responsibilities: [
        'Develop and execute comprehensive test plans',
        'Perform manual and automated testing of applications',
        'Identify, document, and track software defects',
        'Collaborate with development teams on quality improvements'
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Competitive Compensation',
      description: 'Market competitive salaries with performance-based bonuses and annual reviews'
    },
    {
      icon: Users,
      title: 'Professional Growth',
      description: 'Continuous learning opportunities, certifications, and career advancement paths'
    },
    {
      icon: Globe,
      title: 'Flexible Work Environment',
      description: 'Remote work options, flexible hours, and modern collaborative tools'
    },
    {
      icon: Code,
      title: 'Cutting-edge Technology',
      description: 'Work with the latest technologies and tools in the industry'
    }
  ];

  const companyPerks = [
    'Health, dental, and vision insurance',
    'Flexible PTO and holidays',
    'Professional development budget',
    'Home office setup allowance',
    'Team building events and retreats',
    'Wellness programs and gym membership',
    '401(k) retirement plan with matching',
    'Parental leave and family support'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-brand-secondary to-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Build your career with a dynamic team of innovators, working on cutting-edge projects that make a real impact
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-blue-100">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-blue-100">Employee Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Work at Indutech?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Indutech IT Solution, we believe that our people are our greatest asset. We foster a culture of innovation, collaboration, and continuous learning where every team member can thrive and make a meaningful impact.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Join a team that values creativity, embraces challenges, and celebrates success together. Whether you're just starting your career or are an experienced professional, we provide the environment and opportunities for you to grow.
              </p>
              <div className="space-y-4">
                {[
                  'Collaborative and inclusive work environment',
                  'Opportunities to work on diverse, challenging projects',
                  'Mentorship and professional development programs',
                  'Work-life balance and flexible arrangements',
                  'Recognition and rewards for outstanding performance'
                ].map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=500&fit=crop"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits & Perks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive benefits and perks designed to support your professional and personal well-being
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 group">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                    <benefit.icon className="h-8 w-8 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl">Additional Perks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {companyPerks.map((perk, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{perk}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities and find the perfect role to advance your career
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <CardTitle className="text-xl font-bold mb-2">{position.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 text-sm">
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded">{position.department}</span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded">{position.location}</span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded">{position.type}</span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded">{position.experience}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{position.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="text-sm text-gray-600 flex items-start space-x-2">
                            <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        {position.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="text-sm text-gray-600 flex items-start space-x-2">
                            <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t">
                      <Link to={`/careers/apply/${encodeURIComponent(position.title)}`}>
                        <Button className="w-full bg-primary hover:bg-brand-secondary">
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Hiring Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've designed our hiring process to be transparent, efficient, and focused on finding the right fit for both parties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Application Review',
                description: 'We carefully review your application and portfolio to understand your background and experience.'
              },
              {
                step: '02',
                title: 'Initial Interview',
                description: 'A friendly conversation with our HR team to discuss your career goals and our company culture.'
              },
              {
                step: '03',
                title: 'Technical Assessment',
                description: 'Role-specific evaluation to assess your technical skills and problem-solving abilities.'
              },
              {
                step: '04',
                title: 'Final Interview',
                description: 'Meet with team leads and discuss how you\'ll contribute to our projects and company growth.'
              }
            ].map((process, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
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
            Don't See the Perfect Role?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and tell us how you can contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg">
                Send Your Resume
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
