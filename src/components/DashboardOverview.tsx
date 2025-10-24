'use client'

import React from 'react'
import { 
  Calendar, 
  Users, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  DollarSign,
  Activity
} from 'lucide-react'
import { StatsCard } from './StatsCard'
import { RecentAppointments } from './RecentAppointments'
import { AnalyticsChart } from './AnalyticsChart'
import { QuickActions } from './QuickActions'

export function DashboardOverview() {
  const stats = [
    {
      title: 'Today&apos;s Appointments',
      value: '12',
      change: '+2 from yesterday',
      changeType: 'positive' as const,
      icon: Calendar,
      color: 'blue' as const
    },
    {
      title: 'Total Patients',
      value: '1,247',
      change: '+15 this week',
      changeType: 'positive' as const,
      icon: Users,
      color: 'green' as const
    },
    {
      title: 'Revenue This Month',
      value: '$24,580',
      change: '+12% from last month',
      changeType: 'positive' as const,
      icon: DollarSign,
      color: 'purple' as const
    },
    {
      title: 'Average Wait Time',
      value: '8 min',
      change: '-3 min from last week',
      changeType: 'positive' as const,
      icon: Clock,
      color: 'orange' as const
    }
  ]

  const quickStats = [
    { label: 'Completed Today', value: '8', icon: CheckCircle, color: 'text-green-600' },
    { label: 'Pending', value: '4', icon: Clock, color: 'text-yellow-600' },
    { label: 'Cancelled', value: '1', icon: AlertCircle, color: 'text-red-600' },
    { label: 'No Shows', value: '0', icon: Activity, color: 'text-gray-600' }
  ]

  return (
    <div className="space-y-8">
      {/* Welcome section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, Dr. Johnson!</h1>
            <p className="text-blue-100 text-lg">
              Here&apos;s what&apos;s happening with your practice today.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="text-right">
              <div className="text-2xl font-bold">Good Morning</div>
              <div className="text-blue-100">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Quick stats */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Today&apos;s Summary</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className={`inline-flex p-3 rounded-full bg-gray-100 mb-2`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Analytics Chart */}
        <div className="lg:col-span-2">
          <AnalyticsChart />
        </div>

        {/* Quick Actions */}
        <div>
          <QuickActions />
        </div>
      </div>

      {/* Recent Appointments */}
      <div>
        <RecentAppointments />
      </div>
    </div>
  )
}
