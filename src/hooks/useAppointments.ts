import { useState } from 'react'

interface Appointment {
  id: string
  client: string
  datetime: string
}

export function useAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([])

  function addAppointment(newAppointment: Appointment) {
    setAppointments([...appointments, newAppointment])
  }

  return {
    appointments,
    addAppointment,
  }
}
