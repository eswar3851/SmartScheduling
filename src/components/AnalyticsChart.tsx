'use client'

import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

export function AnalyticsChart() {
  const appointmentData = [
    { name: 'Mon', appointments: 12, revenue: 2400 },
    { name: 'Tue', appointments: 19, revenue: 3800 },
    { name: 'Wed', appointments: 15, revenue: 3000 },
    { name: 'Thu', appointments: 22, revenue: 4400 },
    { name: 'Fri', appointments: 18, revenue: 3600 },
    { name: 'Sat', appointments: 8, revenue: 1600 },
    { name: 'Sun', appointments: 5, revenue: 1000 }
  ]

  const patientData = [
    { name: 'Jan', new: 45, returning: 120 },
    { name: 'Feb', new: 52, returning: 135 },
    { name: 'Mar', new: 48, returning: 142 },
    { name: 'Apr', new: 61, returning: 158 },
    { name: 'May', new: 55, returning: 165 },
    { name: 'Jun', new: 67, returning: 172 }
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Analytics Overview</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm bg-primary-100 text-primary-700 rounded-lg">
            7 Days
          </button>
          <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
            30 Days
          </button>
          <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
            90 Days
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Appointments Chart */}
        <div>
          <h3 className="text-md font-medium text-gray-900 mb-4">Weekly Appointments</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={appointmentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#6b7280" fontSize={12} />
              <YAxis stroke="#6b7280" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="appointments" 
                stroke="#3b82f6" 
                strokeWidth={2}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue Chart */}
        <div>
          <h3 className="text-md font-medium text-gray-900 mb-4">Weekly Revenue</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={appointmentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#6b7280" fontSize={12} />
              <YAxis stroke="#6b7280" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                formatter={(value) => [`$${value}`, 'Revenue']}
              />
              <Bar dataKey="revenue" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Patient Growth Chart */}
      <div className="mt-8">
        <h3 className="text-md font-medium text-gray-900 mb-4">Patient Growth (Last 6 Months)</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={patientData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" stroke="#6b7280" fontSize={12} />
            <YAxis stroke="#6b7280" fontSize={12} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Bar dataKey="new" stackId="a" fill="#10b981" radius={[0, 0, 0, 0]} />
            <Bar dataKey="returning" stackId="a" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <div className="flex items-center justify-center space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span className="text-sm text-gray-600">New Patients</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-primary-500 rounded"></div>
            <span className="text-sm text-gray-600">Returning Patients</span>
          </div>
        </div>
      </div>
    </div>
  )
}
