import { createContext, useState, type ReactNode } from 'react'

interface Appointment {
  id: string
  client: string
  datetime: string
}

interface AppointmentsContextType {
  appointments: Appointment[]
  addAppointment: (newAppointment: Appointment) => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const AppointmentsContext = createContext({} as AppointmentsContextType)

export function AppointmentsProvider({ children }: { children: ReactNode }) {
  const [appointments, setAppointments] = useState<Appointment[]>([])

  function addAppointment(newAppointment: Appointment) {
    setAppointments([...appointments, newAppointment])
  }

  return (
    <AppointmentsContext.Provider
      value={{
        appointments,
        addAppointment,
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  )
}
