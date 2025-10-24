'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react'
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday, isPast } from 'date-fns'

interface AppointmentCalendarProps {
  selectedDate: Date | null
  onDateSelect: (date: Date) => void
}

export function AppointmentCalendar({ selectedDate, onDateSelect }: AppointmentCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(currentMonth)
  const calendarDays = eachDayOfInterval({ start: monthStart, end: monthEnd })

  // Add empty cells for days before month start
  const startDate = monthStart
  const startDayOfWeek = startDate.getDay()
  const emptyCells = Array.from({ length: startDayOfWeek }, (_, i) => i)

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1))
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1))

  const isDateAvailable = (date: Date) => {
    // Simple availability logic - you can make this more sophisticated
    const dayOfWeek = date.getDay()
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
    const isPastDate = isPast(date) && !isToday(date)
    return !isWeekend && !isPastDate
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevMonth}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-blue-600" />
          {format(currentMonth, 'MMMM yyyy')}
        </h3>
        
        <button
          onClick={nextMonth}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {/* Empty cells for days before month start */}
        {emptyCells.map((_, index) => (
          <div key={`empty-${index}`} className="p-2"></div>
        ))}

        {/* Calendar days */}
        {calendarDays.map((day) => {
          const isSelected = selectedDate && isSameDay(day, selectedDate)
          const isCurrentMonth = isSameMonth(day, currentMonth)
          const isTodayDate = isToday(day)
          const isAvailable = isDateAvailable(day)

          return (
            <button
              key={day.toISOString()}
              onClick={() => isAvailable && onDateSelect(day)}
              disabled={!isAvailable}
              className={`
                p-2 text-sm rounded-lg transition-all duration-200
                ${!isCurrentMonth ? 'text-gray-300' : ''}
                ${isTodayDate ? 'bg-primary-100 text-primary-600 font-semibold' : ''}
                ${isSelected ? 'bg-primary-600 text-white font-semibold' : ''}
                ${!isSelected && !isTodayDate && isCurrentMonth && isAvailable 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : ''}
                ${!isAvailable ? 'text-gray-300 cursor-not-allowed' : ''}
              `}
            >
              {format(day, 'd')}
            </button>
          )
        })}
      </div>

      {/* Legend */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-center space-x-6 text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-primary-600 rounded"></div>
            <span>Selected</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-primary-100 rounded"></div>
            <span>Today</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-gray-200 rounded"></div>
            <span>Unavailable</span>
          </div>
        </div>
      </div>
    </div>
  )
}
