import { useState, type ChangeEvent } from 'react'
import { format } from 'date-fns'

import { useAppointmentsContext } from '../hooks/use-appointments-context'

import { DatePicker } from './ui/date-picker'
import { Text } from './ui/text'
import { AppointmentsCard } from './appointments-card'
import { AppointmentsCardItem } from './appointments-card-item'

import { convertDatetime } from '../utils/convert-datetime'
import { convertStringTimeToNumber } from '../utils/convert-string-time-to-number'

export function Appointments() {
  const { appointments } = useAppointmentsContext()

  const today = format(new Date(), 'yyyy-MM-dd')
  const [selectedDate, setSelectedDate] = useState(today)

  function handleDatePickerChange(e: ChangeEvent<HTMLInputElement>) {
    setSelectedDate(e.target.value)
  }

  const todayAppointments = appointments.filter((appointment) => {
    const { appointmentDate } = convertDatetime(appointment.datetime)

    return appointmentDate === selectedDate
  })

  const morningAppointments = todayAppointments.filter((appointment) => {
    const { appointmentTime } = convertDatetime(appointment.datetime)

    if (
      convertStringTimeToNumber(appointmentTime) >= 900 &&
      convertStringTimeToNumber(appointmentTime) <= 1200
    ) {
      return true
    }

    return false
  })

  const afternoonAppointments = todayAppointments.filter((appointment) => {
    const { appointmentTime } = convertDatetime(appointment.datetime)

    if (
      convertStringTimeToNumber(appointmentTime) >= 1300 &&
      convertStringTimeToNumber(appointmentTime) <= 1800
    ) {
      return true
    }

    return false
  })

  const eveningAppointments = todayAppointments.filter((appointment) => {
    const { appointmentTime } = convertDatetime(appointment.datetime)

    if (
      convertStringTimeToNumber(appointmentTime) >= 1900 &&
      convertStringTimeToNumber(appointmentTime) <= 2100
    ) {
      return true
    }

    return false
  })

  return (
    <div className="py-20 px-28 flex-1 space-y-8">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <Text as="h2" variant="title-lg" className="text-gray-100">
            Sua agenda
          </Text>
          <Text as="p" variant="text-sm">
            Consulte os seus cortes de cabelo agendados por dia
          </Text>
        </div>

        <DatePicker value={selectedDate} onChange={handleDatePickerChange} />
      </div>

      <div className="space-y-3">
        <AppointmentsCard period="morning">
          {morningAppointments.map((appointment) => (
            <AppointmentsCardItem
              key={appointment.id}
              appointment={appointment}
            />
          ))}

          {morningAppointments.length === 0 && (
            <Text>Nenhum agendamento para este período</Text>
          )}
        </AppointmentsCard>

        <AppointmentsCard period="afternoon">
          {afternoonAppointments.map((appointment) => (
            <AppointmentsCardItem
              key={appointment.id}
              appointment={appointment}
            />
          ))}

          {afternoonAppointments.length === 0 && (
            <Text>Nenhum agendamento para este período</Text>
          )}
        </AppointmentsCard>

        <AppointmentsCard period="evening">
          {eveningAppointments.map((appointment) => (
            <AppointmentsCardItem
              key={appointment.id}
              appointment={appointment}
            />
          ))}

          {eveningAppointments.length === 0 && (
            <Text>Nenhum agendamento para este período</Text>
          )}
        </AppointmentsCard>
      </div>
    </div>
  )
}
