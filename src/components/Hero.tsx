'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Calendar, BarChart3, Users, Zap, Shield, Clock } from 'lucide-react'

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-8">
            <Zap className="w-4 h-4 mr-2" />
            AI-Powered Healthcare Scheduling
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Smart Appointment
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              & Patient Dashboard
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your clinic with our AI-driven scheduling system. Streamline appointments, 
            enhance patient experience, and gain valuable insights with our comprehensive dashboard.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/demo"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Try Live Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
            >
              View Features
            </Link>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
              <Calendar className="w-8 h-8 text-primary-600" />
              <div className="text-left">
                <div className="font-semibold text-gray-900">Smart Booking</div>
                <div className="text-sm text-gray-600">AI-powered scheduling</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
              <BarChart3 className="w-8 h-8 text-purple-600" />
              <div className="text-left">
                <div className="font-semibold text-gray-900">Analytics</div>
                <div className="text-sm text-gray-600">Real-time insights</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
              <Users className="w-8 h-8 text-green-600" />
              <div className="text-left">
                <div className="font-semibold text-gray-900">Patient Portal</div>
                <div className="text-sm text-gray-600">Seamless experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
