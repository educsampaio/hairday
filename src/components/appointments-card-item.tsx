import { Text } from './ui/text'

import { TrashIcon } from '@phosphor-icons/react'

import { ButtonIcon } from './ui/button-icon'
import { convertDatetime } from '../utils/convert-datetime'

interface AppointmentsCardItemProps {
  appointmentDatetime: string
  client: string
}

export function AppointmentsCardItem({
  appointmentDatetime,
  client,
}: AppointmentsCardItemProps) {
  const { appointmentTime } = convertDatetime(appointmentDatetime)

  return (
    <div className="flex items-center gap-5 py-1">
      <Text variant="title-md" className="text-gray-200">
        {appointmentTime}
      </Text>
      <Text variant="text-md" className="flex-1 text-gray-200">
        {client}
      </Text>
      <ButtonIcon icon={TrashIcon} />
    </div>
  )
}
