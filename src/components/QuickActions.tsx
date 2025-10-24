'use client'

import React from 'react'
import { Plus, Calendar, Users, FileText, MessageSquare, Settings, Bell, Download } from 'lucide-react'

export function QuickActions() {
  const actions = [
    {
      title: 'New Appointment',
      description: 'Schedule a new patient appointment',
      icon: Plus,
      color: 'bg-blue-100 text-blue-600',
      href: '/dashboard/appointments/new'
    },
    {
      title: 'Add Patient',
      description: 'Register a new patient',
      icon: Users,
      color: 'bg-green-100 text-green-600',
      href: '/dashboard/patients/new'
    },
    {
      title: 'Send Message',
      description: 'Contact patients or staff',
      icon: MessageSquare,
      color: 'bg-purple-100 text-purple-600',
      href: '/dashboard/messages/new'
    },
    {
      title: 'Generate Report',
      description: 'Create analytics report',
      icon: FileText,
      color: 'bg-orange-100 text-orange-600',
      href: '/dashboard/reports/new'
    }
  ]

  const quickStats = [
    { label: 'Pending Reviews', value: '3', icon: Bell },
    { label: 'Upcoming Appointments', value: '8', icon: Calendar },
    { label: 'New Messages', value: '5', icon: MessageSquare },
    { label: 'Reports Ready', value: '2', icon: Download }
  ]

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="space-y-3">
          {actions.map((action, index) => {
            const Icon = action.icon
            return (
              <button
                key={index}
                className="w-full flex items-center p-3 text-left hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                <div className={`p-2 rounded-lg ${action.color} mr-3`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">{action.title}</div>
                  <div className="text-sm text-gray-600">{action.description}</div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h2>
        <div className="space-y-3">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                <div className="flex items-center">
                  <div className="p-2 bg-gray-100 rounded-lg mr-3">
                    <Icon className="w-4 h-4 text-gray-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">{stat.label}</span>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                  {stat.value}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* System Status */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">System Status</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">API Status</span>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-green-600">Online</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Database</span>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-green-600">Healthy</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Backup</span>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-green-600">Up to date</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Security</span>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-green-600">Protected</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
