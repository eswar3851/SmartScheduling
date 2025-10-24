'use client'

import React, { useState } from 'react'
import { User, Phone, Mail, MessageSquare, X, CheckCircle } from 'lucide-react'
import { format } from 'date-fns'
import toast from 'react-hot-toast'

interface BookingFormProps {
  selectedDate: Date | null
  selectedTime: string | null
  onClose: () => void
}

export function BookingForm({ selectedDate, selectedTime, onClose }: BookingFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    reason: '',
    notes: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    toast.success('Appointment booked successfully!')
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Appointment Confirmed!
        </h3>
        <p className="text-gray-600 mb-4">
          Your appointment has been successfully booked for{' '}
          <span className="font-semibold">
            {selectedDate && format(selectedDate, 'MMMM d, yyyy')} at {selectedTime}
          </span>
        </p>
        <p className="text-sm text-gray-500">
          You will receive a confirmation email shortly.
        </p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 text-primary-600 hover:text-primary-700 font-medium"
        >
          Book Another Appointment
        </button>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Book Your Appointment
        </h3>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      {/* Appointment Summary */}
      <div className="bg-primary-50 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-gray-900 mb-2">Appointment Details</h4>
        <div className="text-sm text-gray-600">
          <div>Date: {selectedDate && format(selectedDate, 'EEEE, MMMM d, yyyy')}</div>
          <div>Time: {selectedTime}</div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="form-label">
              <User className="w-4 h-4 inline mr-2" />
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="form-input"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="form-input"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        {/* Contact Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="form-label">
              <Mail className="w-4 h-4 inline mr-2" />
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="form-input"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="phone" className="form-label">
              <Phone className="w-4 h-4 inline mr-2" />
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="form-input"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        {/* Reason for Visit */}
        <div>
          <label htmlFor="reason" className="form-label">
            Reason for Visit
          </label>
          <select
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleInputChange}
            required
            className="form-input"
          >
            <option value="">Select a reason</option>
            <option value="consultation">General Consultation</option>
            <option value="follow-up">Follow-up Appointment</option>
            <option value="checkup">Routine Checkup</option>
            <option value="emergency">Urgent Care</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Additional Notes */}
        <div>
          <label htmlFor="notes" className="form-label">
            <MessageSquare className="w-4 h-4 inline mr-2" />
            Additional Notes (Optional)
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            rows={3}
            className="form-input"
            placeholder="Any additional information you'd like to share..."
          />
        </div>

        {/* Submit Button */}
        <div className="flex space-x-4 pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary flex-1 flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Booking...
              </>
            ) : (
              'Confirm Appointment'
            )}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="btn-secondary px-6"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
