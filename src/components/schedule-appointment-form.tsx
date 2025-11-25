import { useState, type ChangeEvent, type FormEvent } from 'react'
import { format, parse, parseISO } from 'date-fns'
import { useAppointments } from '../hooks/useAppointments'

import { DatePicker } from './ui/date-picker'
import { Button } from './ui/button'
import { TimeSelect } from './ui/time-select'
import { Input } from './ui/input'
import { Text } from './ui/text'

import { UserSquareIcon } from '@phosphor-icons/react'

const hoursList = [
  {
    period: 'Manhã',
    hours: ['09:00', '10:00', '11:00', '12:00'],
  },
  {
    period: 'Tarde',
    hours: ['13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
  },
  {
    period: 'Noite',
    hours: ['19:00', '20:00', '21:00'],
  },
]

export function ScheduleAppointmentForm() {
  const { appointments, addAppointment } = useAppointments()

  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [clientName, setClientName] = useState('')

  const isSubmitButtonDisabled = !selectedDate || !selectedTime || !clientName

  function isUnavaliableHour(hour: string) {
    return appointments.some((appointment) => {
      const datetimeObject = parseISO(appointment.datetime)

      const appointmentDate = format(datetimeObject, 'yyyy-MM-dd')
      const appointmentTime = format(datetimeObject, 'HH:mm')

      return appointmentDate === selectedDate && appointmentTime === hour
    })
  }

  function handleScheduleAppointment(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const parsedDate = parse(
      `${selectedDate} ${selectedTime}`,
      'yyyy-MM-dd HH:mm',
      new Date()
    ).toISOString()

    addAppointment({
      id: crypto.randomUUID(),
      client: clientName,
      datetime: parsedDate,
    })

    setSelectedDate('')
    setSelectedTime('')
    setClientName('')
  }

  function handleDatePickerChange(e: ChangeEvent<HTMLInputElement>) {
    setSelectedDate(e.target.value)
  }

  function handleTimeSelectChange(e: ChangeEvent<HTMLInputElement>) {
    setSelectedTime(e.target.value)
  }

  function handleTextInputChange(e: ChangeEvent<HTMLInputElement>) {
    setClientName(e.target.value)
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleScheduleAppointment}>
      <div className="flex flex-col gap-8">
        <DatePicker
          label="Data"
          onChange={handleDatePickerChange}
          value={selectedDate}
          required
        />

        <div className="flex flex-col gap-2">
          <Text variant="title-md" className="text-gray-200">
            Horários
          </Text>

          <div className="flex flex-col gap-3">
            {hoursList.map((item, i) => (
              <div key={`${item.period}-${i}`} className="flex flex-col gap-2">
                <Text>{item.period}</Text>

                <div className="flex flex-wrap gap-2">
                  {item.hours.map((hour) => {
                    const disabled = isUnavaliableHour(hour)

                    return (
                      <TimeSelect
                        key={hour}
                        id={hour}
                        value={hour}
                        onChange={handleTimeSelectChange}
                        disabled={!selectedDate || disabled}
                      />
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <label className="flex flex-col gap-2">
          <Text variant="title-md" className="text-gray-200">
            Cliente
          </Text>
          <Input
            placeholder="Nome do cliente"
            icon={UserSquareIcon}
            className="w-full"
            onChange={handleTextInputChange}
            value={clientName}
            required
          />
        </label>
      </div>

      <Button disabled={isSubmitButtonDisabled}>Agendar</Button>
    </form>
  )
}
