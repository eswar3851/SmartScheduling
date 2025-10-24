'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Calendar, BarChart3, Users, Settings, Zap, Crown } from 'lucide-react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { BookingForm } from './BookingForm'
import { AppointmentCalendar } from './AppointmentCalendar'
import { DashboardOverview } from './DashboardOverview'

export function DemoInterface() {
  const [activeTab, setActiveTab] = useState<'booking' | 'dashboard'>('booking')
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [showBookingForm, setShowBookingForm] = useState(false)

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ]

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    setShowBookingForm(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link 
                href="/"
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">SmartScheduling Demo</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <ThemeSwitcher />
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('booking')}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    activeTab === 'booking'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Zap className="w-4 h-4 inline mr-2" />
                  Lite Version
                </button>
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    activeTab === 'dashboard'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Crown className="w-4 h-4 inline mr-2" />
                  Pro Version
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Demo Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'booking' ? (
          <div className="space-y-8">
            {/* Lite Version Header */}
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-4">
                <Zap className="w-4 h-4 mr-2" />
                Lite Version - Booking Frontend
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Patient Booking Experience
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience our streamlined booking system designed for patients. 
                Simple, intuitive, and mobile-friendly appointment scheduling.
              </p>
            </div>

            {/* Booking Interface */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Calendar */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Select Your Appointment
                  </h3>
                  <p className="text-gray-600">
                    Choose a date and time that works for you
                  </p>
                </div>

                <div className="mb-8">
                  <AppointmentCalendar 
                    selectedDate={selectedDate}
                    onDateSelect={setSelectedDate}
                  />
                </div>

                {/* Time Slots */}
                {selectedDate && (
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Available Time Slots
                    </h4>
                    <div className="grid grid-cols-3 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => handleTimeSelect(time)}
                          className={`p-3 text-sm font-medium rounded-lg border transition-all duration-200 ${
                            selectedTime === time
                              ? 'bg-primary-600 text-white border-primary-600'
                              : 'bg-white text-gray-700 border-gray-300 hover:border-primary-500 hover:bg-primary-50'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Booking Form */}
                {showBookingForm && (
                  <div className="border-t pt-6">
                    <BookingForm 
                      selectedDate={selectedDate}
                      selectedTime={selectedTime}
                      onClose={() => setShowBookingForm(false)}
                    />
                  </div>
                )}
              </div>

              {/* Features Showcase */}
              <div className="space-y-8">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Lite Version Features
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <Calendar className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Smart Calendar
                        </h4>
                        <p className="text-gray-600">
                          Real-time availability with intelligent time slot suggestions
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <Users className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Patient Management
                        </h4>
                        <p className="text-gray-600">
                          Simple patient registration and information collection
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Settings className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Easy Setup
                        </h4>
                        <p className="text-gray-600">
                          Quick configuration with minimal technical requirements
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Perfect for Small Practices
                  </h3>
                  <p className="text-primary-100 mb-6">
                    The Lite version provides everything you need to get started with 
                    online appointment booking without the complexity.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold mb-1">$29</div>
                      <div className="text-primary-100 text-sm">per month</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold mb-1">14-day</div>
                      <div className="text-primary-100 text-sm">free trial</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Pro Version Header */}
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-4">
                <Crown className="w-4 h-4 mr-2" />
                Pro Version - Full Dashboard
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Complete Practice Management
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience our comprehensive dashboard with advanced analytics, 
                patient management, and AI-powered insights for growing practices.
              </p>
            </div>

            {/* Dashboard Preview */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-sm text-gray-600">Dashboard Preview</span>
                </div>
              </div>
              <div className="p-8">
                <DashboardOverview />
              </div>
            </div>

            {/* Pro Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="p-3 bg-primary-100 rounded-lg w-fit mb-4">
                  <BarChart3 className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Advanced Analytics
                </h3>
                <p className="text-gray-600">
                  Comprehensive insights with AI-powered recommendations and predictive analytics.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="p-3 bg-green-100 rounded-lg w-fit mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Patient Portal
                </h3>
                <p className="text-gray-600">
                  Complete patient management with medical history, documents, and communication.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="p-3 bg-purple-100 rounded-lg w-fit mb-4">
                  <Settings className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Custom Branding
                </h3>
                <p className="text-gray-600">
                  White-label solution with custom colors, logos, and domain integration.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Upgrade?
              </h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                Unlock the full potential of your practice with our Pro version. 
                Advanced features, priority support, and unlimited possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  Start Pro Trial
                </button>
                <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-200">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
