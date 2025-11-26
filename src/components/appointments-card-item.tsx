import { Text } from './ui/text'

import { TrashIcon } from '@phosphor-icons/react'

import { ButtonIcon } from './ui/button-icon'
import { convertDatetime } from '../utils/convert-datetime'

import type { Appointment } from '../contexts/appointments-context'
import { useAppointmentsContext } from '../hooks/use-appointments-context'

interface AppointmentsCardItemProps {
  appointment: Appointment
}

export function AppointmentsCardItem({
  appointment,
}: AppointmentsCardItemProps) {
  const { deleteAppointment } = useAppointmentsContext()
  const { id, datetime, client } = appointment

  const { appointmentTime } = convertDatetime(datetime)

  function handleDeleteAppointment(id: string) {
    deleteAppointment(id)
  }

  return (
    <div className="flex items-center gap-5 py-1">
      <Text variant="title-md" className="text-gray-200">
        {appointmentTime}
      </Text>
      <Text variant="text-md" className="flex-1 text-gray-200">
        {client}
      </Text>
      <ButtonIcon
        icon={TrashIcon}
        onClick={() => handleDeleteAppointment(id)}
      />
    </div>
  )
}
