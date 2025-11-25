import { format } from 'date-fns'
import { DatePicker } from './ui/date-picker'
import { Text } from './ui/text'
import { AppointmentsCard } from './appointments-card'

export function Appointments() {
  const today = format(new Date(), 'yyyy-MM-dd')

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

        <DatePicker value={today} />
      </div>

      <div className="space-y-3">
        <AppointmentsCard period="morning" />
        <AppointmentsCard period="afternoon" />
        <AppointmentsCard period="evening" />
      </div>
    </div>
  )
}
