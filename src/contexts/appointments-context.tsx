import { createContext, useState, type ReactNode } from 'react'

export interface Appointment {
  id: string
  client: string
  datetime: string
}

interface AppointmentsContextType {
  appointments: Appointment[]
  addAppointment: (newAppointment: Appointment) => void
  deleteAppointment: (appointmentToDeleteId: string) => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const AppointmentsContext = createContext({} as AppointmentsContextType)

export function AppointmentsProvider({ children }: { children: ReactNode }) {
  const [appointments, setAppointments] = useState<Appointment[]>([])

  function addAppointment(newAppointment: Appointment) {
    setAppointments([...appointments, newAppointment])
  }

  function deleteAppointment(appointmentToDeleteId: string) {
    setAppointments(
      appointments.filter(
        (appointment) => appointment.id !== appointmentToDeleteId
      )
    )
  }

  return (
    <AppointmentsContext.Provider
      value={{
        appointments,
        addAppointment,
        deleteAppointment,
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  )
}
