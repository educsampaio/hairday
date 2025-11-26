import { useContext } from 'react'
import { AppointmentsContext } from '../contexts/appointments-context'

export function useAppointmentsContext() {
  return useContext(AppointmentsContext)
}
