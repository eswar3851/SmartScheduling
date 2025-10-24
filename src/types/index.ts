export interface Patient {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: Date
  address: {
    street: string
    city: string
    state: string
    zipCode: string
  }
  medicalHistory?: string
  allergies?: string[]
  emergencyContact: {
    name: string
    phone: string
    relationship: string
  }
  createdAt: Date
  updatedAt: Date
}

export interface Appointment {
  id: string
  patientId: string
  patient: Patient
  date: Date
  time: string
  duration: number
  type: AppointmentType
  status: AppointmentStatus
  notes?: string
  reason: string
  provider: string
  location?: string
  createdAt: Date
  updatedAt: Date
}

export type AppointmentType = 
  | 'consultation'
  | 'follow-up'
  | 'checkup'
  | 'emergency'
  | 'telehealth'
  | 'other'

export type AppointmentStatus = 
  | 'scheduled'
  | 'confirmed'
  | 'in-progress'
  | 'completed'
  | 'cancelled'
  | 'no-show'

export interface Provider {
  id: string
  name: string
  email: string
  phone: string
  specialty: string
  availability: Availability[]
  workingHours: WorkingHours
}

export interface Availability {
  dayOfWeek: number // 0 = Sunday, 1 = Monday, etc.
  startTime: string
  endTime: string
  isAvailable: boolean
}

export interface WorkingHours {
  monday: { start: string; end: string }
  tuesday: { start: string; end: string }
  wednesday: { start: string; end: string }
  thursday: { start: string; end: string }
  friday: { start: string; end: string }
  saturday: { start: string; end: string }
  sunday: { start: string; end: string }
}

export interface Analytics {
  totalAppointments: number
  completedAppointments: number
  cancelledAppointments: number
  noShowAppointments: number
  totalRevenue: number
  averageWaitTime: number
  patientSatisfaction: number
  monthlyGrowth: number
}

export interface DashboardStats {
  todayAppointments: number
  totalPatients: number
  monthlyRevenue: number
  averageWaitTime: number
  completedToday: number
  pendingAppointments: number
  cancelledToday: number
  noShowsToday: number
}

export interface Theme {
  name: 'red' | 'blue' | 'purple'
  colors: {
    primary: string
    primaryLight: string
    primaryDark: string
  }
}

export interface NotificationSettings {
  email: boolean
  sms: boolean
  push: boolean
  reminderTime: number // minutes before appointment
}

export interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'provider' | 'staff'
  permissions: string[]
  notificationSettings: NotificationSettings
  createdAt: Date
  lastLogin: Date
}
