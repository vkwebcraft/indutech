
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Upload, CheckCircle } from 'lucide-react';
import Layout from '@/components/Layout';

const CareerApplication = () => {
  const { jobTitle } = useParams();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    coverLetter: '',
    resume: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <div className="py-20 bg-gray-50 min-h-screen flex items-center justify-center">
          <Card className="max-w-md w-full mx-4">
            <CardContent className="pt-8 text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Submitted!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for your interest in joining our team. We'll review your application and get back to you within 5-7 business days.
              </p>
              <div className="space-y-3">
                <Link to="/careers">
                  <Button className="w-full bg-primary hover:bg-brand-secondary">
                    View Other Positions
                  </Button>
                </Link>
                <Link to="/">
                  <Button variant="outline" className="w-full">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/careers" className="inline-flex items-center text-primary hover:text-brand-secondary mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Careers
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Apply for Position</CardTitle>
                  {jobTitle && (
                    <p className="text-primary font-medium">{decodeURIComponent(jobTitle)}</p>
                  )}
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                          Years of Experience *
                        </label>
                        <select
                          id="experience"
                          name="experience"
                          required
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select experience</option>
                          <option value="0-1">0-1 years</option>
                          <option value="2-3">2-3 years</option>
                          <option value="4-5">4-5 years</option>
                          <option value="6-10">6-10 years</option>
                          <option value="10+">10+ years</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                        Resume/CV *
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <input
                          type="file"
                          id="resume"
                          name="resume"
                          accept=".pdf,.doc,.docx"
                          required
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        <label htmlFor="resume" className="cursor-pointer">
                          <span className="text-sm text-gray-600">
                            {formData.resume ? formData.resume.name : 'Click to upload or drag and drop'}
                          </span>
                          <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX up to 10MB</p>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                        Cover Letter
                      </label>
                      <textarea
                        id="coverLetter"
                        name="coverLetter"
                        rows={6}
                        value={formData.coverLetter}
                        onChange={handleInputChange}
                        placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-brand-secondary">
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Application Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Resume Guidelines</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Keep it concise (1-2 pages)</li>
                      <li>• Highlight relevant experience</li>
                      <li>• Include specific achievements</li>
                      <li>• Use professional formatting</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Cover Letter</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Explain your interest in the role</li>
                      <li>• Highlight key qualifications</li>
                      <li>• Show enthusiasm for our company</li>
                      <li>• Keep it under 300 words</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Application Review</p>
                      <p className="text-xs text-gray-600">We review your application within 2-3 days</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Initial Interview</p>
                      <p className="text-xs text-gray-600">Phone/video call with our HR team</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Final Decision</p>
                      <p className="text-xs text-gray-600">We'll notify you within 5-7 business days</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CareerApplication;
