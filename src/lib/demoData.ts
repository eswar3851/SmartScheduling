import { Patient, Appointment, DashboardStats, Analytics } from '@/types'

export const demoPatients: Patient[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@email.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: new Date('1985-03-15'),
    address: {
      street: '123 Main St',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94102'
    },
    medicalHistory: 'No significant medical history',
    allergies: ['Penicillin'],
    emergencyContact: {
      name: 'Jane Smith',
      phone: '+1 (555) 123-4568',
      relationship: 'Spouse'
    },
    createdAt: new Date('2023-01-15'),
    updatedAt: new Date('2023-12-01')
  },
  {
    id: '2',
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.j@email.com',
    phone: '+1 (555) 234-5678',
    dateOfBirth: new Date('1990-07-22'),
    address: {
      street: '456 Oak Ave',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94103'
    },
    medicalHistory: 'Hypertension, managed with medication',
    allergies: [],
    emergencyContact: {
      name: 'Mike Johnson',
      phone: '+1 (555) 234-5679',
      relationship: 'Brother'
    },
    createdAt: new Date('2023-02-20'),
    updatedAt: new Date('2023-12-01')
  }
]

export const demoAppointments: Appointment[] = [
  {
    id: '1',
    patientId: '1',
    patient: demoPatients[0],
    date: new Date('2023-12-15'),
    time: '09:00 AM',
    duration: 30,
    type: 'consultation',
    status: 'completed',
    notes: 'Patient reported feeling better after treatment',
    reason: 'Follow-up consultation',
    provider: 'Dr. Sarah Johnson',
    location: 'Main Clinic',
    createdAt: new Date('2023-12-01'),
    updatedAt: new Date('2023-12-15')
  },
  {
    id: '2',
    patientId: '2',
    patient: demoPatients[1],
    date: new Date('2023-12-15'),
    time: '10:30 AM',
    duration: 45,
    type: 'follow-up',
    status: 'in-progress',
    notes: 'Blood pressure check scheduled',
    reason: 'Hypertension follow-up',
    provider: 'Dr. Sarah Johnson',
    location: 'Main Clinic',
    createdAt: new Date('2023-12-01'),
    updatedAt: new Date('2023-12-15')
  }
]

export const demoStats: DashboardStats = {
  todayAppointments: 12,
  totalPatients: 1247,
  monthlyRevenue: 24580,
  averageWaitTime: 8,
  completedToday: 8,
  pendingAppointments: 4,
  cancelledToday: 1,
  noShowsToday: 0
}

export const demoAnalytics: Analytics = {
  totalAppointments: 1247,
  completedAppointments: 1156,
  cancelledAppointments: 67,
  noShowAppointments: 24,
  totalRevenue: 245800,
  averageWaitTime: 8,
  patientSatisfaction: 4.8,
  monthlyGrowth: 12.5
}

export const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
  '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
]

export const appointmentTypes = [
  { value: 'consultation', label: 'General Consultation' },
  { value: 'follow-up', label: 'Follow-up Appointment' },
  { value: 'checkup', label: 'Routine Checkup' },
  { value: 'emergency', label: 'Urgent Care' },
  { value: 'telehealth', label: 'Telehealth Visit' },
  { value: 'other', label: 'Other' }
]
