import { createContext, type ReactNode } from 'react'
import { APPOINTMENT_KEY, type Appointment } from '../models/appointment'
import useLocalStorageState from 'use-local-storage-state'

interface AppointmentsContextType {
  appointments: Appointment[]
  addAppointment: (newAppointment: Appointment) => void
  deleteAppointment: (appointmentToDeleteId: string) => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const AppointmentsContext = createContext({} as AppointmentsContextType)

export function AppointmentsProvider({ children }: { children: ReactNode }) {
  const [appointments, setAppointments] = useLocalStorageState<Appointment[]>(
    APPOINTMENT_KEY,
    { defaultValue: [] }
  )

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
