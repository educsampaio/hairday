import { format, parseISO } from 'date-fns'

export function convertDatetime(datetime: string) {
  const datetimeObject = parseISO(datetime)

  const appointmentDate = format(datetimeObject, 'yyyy-MM-dd')
  const appointmentTime = format(datetimeObject, 'HH:mm')

  return { appointmentDate, appointmentTime }
}
