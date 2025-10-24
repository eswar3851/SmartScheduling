'use client'

import React from 'react'
import { 
  Calendar, 
  BarChart3, 
  Users, 
  Smartphone, 
  Shield, 
  Zap, 
  Clock, 
  MessageSquare,
  FileText,
  Bell,
  Globe,
  Database
} from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Calendar,
      title: 'Smart Appointment Booking',
      description: 'AI-powered scheduling that optimizes time slots and reduces no-shows with intelligent reminders.',
      category: 'Core Features'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive dashboard with real-time insights, patient trends, and performance metrics.',
      category: 'Analytics'
    },
    {
      icon: Users,
      title: 'Patient Management',
      description: 'Complete patient profiles, medical history, and communication tools in one place.',
      category: 'Patient Care'
    },
    {
      icon: Smartphone,
      title: 'Mobile Responsive',
      description: 'Fully responsive design that works perfectly on all devices and screen sizes.',
      category: 'Accessibility'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'Built with healthcare security standards in mind, ensuring patient data protection.',
      category: 'Security'
    },
    {
      icon: Zap,
      title: 'AI-Powered Insights',
      description: 'Machine learning algorithms provide predictive analytics and optimization suggestions.',
      category: 'AI Features'
    },
    {
      icon: Clock,
      title: 'Real-time Updates',
      description: 'Live synchronization across all devices with instant notifications and updates.',
      category: 'Real-time'
    },
    {
      icon: MessageSquare,
      title: 'Communication Hub',
      description: 'Integrated messaging system for patient-provider communication and appointment reminders.',
      category: 'Communication'
    },
    {
      icon: FileText,
      title: 'Document Management',
      description: 'Secure storage and management of patient documents, forms, and medical records.',
      category: 'Documentation'
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Automated reminders, alerts, and notifications to keep everyone informed.',
      category: 'Notifications'
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Support for multiple languages to serve diverse patient populations.',
      category: 'Accessibility'
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Seamless integration with existing healthcare systems and third-party applications.',
      category: 'Integration'
    }
  ]

  const categories = ['Core Features', 'Analytics', 'Patient Care', 'AI Features', 'Security', 'Accessibility']

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Healthcare
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to streamline your clinic operations, enhance patient experience, 
            and grow your practice with cutting-edge technology.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors duration-200">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <span className="ml-3 text-sm font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                    {feature.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Practice?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of healthcare providers who have already modernized their scheduling 
              and patient management with SmartScheduling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/demo"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                Start Free Trial
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
