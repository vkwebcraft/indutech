import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Code, Globe } from 'lucide-react';
import Layout from '@/components/Layout';

const Blog = () => {
  const featuredPost = {
    title: 'The Future of AI in Business: Trends and Opportunities for 2024',
    excerpt: 'Artificial Intelligence is reshaping the business landscape. Discover the key AI trends that will drive innovation and competitive advantage in 2024 and beyond.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop',
    date: 'December 20, 2024',
    readTime: '8 min read',
    category: 'AI & Technology',
    author: 'Sarah Johnson'
  };

  const blogPosts = [
    {
      title: '10 Digital Transformation Trends Shaping 2024',
      excerpt: 'Discover the latest trends in digital transformation and how businesses can leverage them for competitive advantage.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
      date: 'December 15, 2024',
      readTime: '6 min read',
      category: 'Digital Transformation',
      author: 'Mike Davis'
    },
    {
      title: 'Cloud Computing ROI: Measuring Success in Your Migration',
      excerpt: 'Learn how to calculate and optimize the return on investment for your cloud computing initiatives.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop',
      date: 'December 10, 2024',
      readTime: '7 min read',
      category: 'Cloud Computing',
      author: 'Emily Chen'
    },
    {
      title: 'Cybersecurity Best Practices for Small Businesses',
      excerpt: 'Essential security measures every small business should implement to protect against cyber threats.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop',
      date: 'December 5, 2024',
      readTime: '5 min read',
      category: 'Cybersecurity',
      author: 'John Smith'
    },
    {
      title: 'The Complete Guide to E-commerce Website Optimization',
      excerpt: 'Proven strategies to increase your online store conversion rates and maximize revenue.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=250&fit=crop',
      date: 'November 30, 2024',
      readTime: '9 min read',
      category: 'E-commerce',
      author: 'Lisa Wang'
    },
    {
      title: 'API Integration: Connecting Your Business Systems',
      excerpt: 'How API integrations can streamline operations and improve data flow between business applications.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop',
      date: 'November 25, 2024',
      readTime: '6 min read',
      category: 'Software Development',
      author: 'David Rodriguez'
    },
    {
      title: 'Mobile-First Design: Why It Matters in 2024',
      excerpt: 'Understanding the importance of mobile-first design and its impact on user experience and SEO.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=250&fit=crop',
      date: 'November 20, 2024',
      readTime: '4 min read',
      category: 'Web Design',
      author: 'Sarah Johnson'
    }
  ];

  const categories = [
    { name: 'Digital Transformation', count: 15, icon: TrendingUp },
    { name: 'Software Development', count: 20, icon: Code },
    { name: 'Web Design', count: 12, icon: Globe },
    { name: 'Cybersecurity', count: 8, icon: Code },
    { name: 'Cloud Computing', count: 10, icon: Globe },
    { name: 'AI & Technology', count: 6, icon: TrendingUp }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-brand-secondary to-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tech Insights & Updates
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Stay ahead with the latest technology trends, industry insights, and expert advice from our team
            </p>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md">
                <h3 className="text-lg font-semibold mb-2">Subscribe to our newsletter</h3>
                <p className="text-blue-100 text-sm mb-4">Get weekly insights delivered to your inbox</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 text-gray-900 bg-white rounded-l-md border-0 focus:ring-2 focus:ring-white"
                  />
                  <Button className="bg-brand-secondary hover:bg-primary text-white rounded-l-none">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Featured Article
            </h2>
          </div>
          
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2">
                <CardContent className="p-8 h-full flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-500 text-sm">{featuredPost.date}</span>
                    <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {featuredPost.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-gray-700 font-medium">{featuredPost.author}</span>
                    </div>
                    <Link to="/blog/ai-business-trends-2024">
                      <Button className="bg-primary hover:bg-brand-secondary">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-xs">{post.date}</span>
                        <span className="text-gray-500 text-xs">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-xs">
                              {post.author.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <span className="text-gray-600 text-sm">{post.author}</span>
                        </div>
                        <Link to={index === 0 ? "/blog/digital-transformation-trends-2024" : "#"}>
                          <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-brand-secondary">
                            Read More <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-8 space-y-8">
                {/* Categories */}
                <Card>
                  <CardHeader>
                    <CardTitle>Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {categories.map((category, index) => (
                        <div key={index} className="flex items-center justify-between py-2 hover:bg-gray-50 rounded px-2 cursor-pointer">
                          <div className="flex items-center space-x-3">
                            <category.icon className="h-4 w-4 text-primary" />
                            <span className="text-gray-700">{category.name}</span>
                          </div>
                          <span className="text-gray-500 text-sm">({category.count})</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter Signup */}
                <Card>
                  <CardHeader>
                    <CardTitle>Stay Updated</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Get the latest tech insights and industry updates delivered to your inbox.
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-3 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                      <Button className="w-full bg-primary hover:bg-brand-secondary">
                        Subscribe Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Popular Posts */}
                <Card>
                  <CardHeader>
                    <CardTitle>Popular Posts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {blogPosts.slice(0, 3).map((post, index) => (
                        <div key={index} className="flex space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-gray-900 line-clamp-2">{post.title}</h4>
                            <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have a Technology Question?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Our experts are here to help. Get personalized advice and solutions for your technology challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg">
                Ask Our Experts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
