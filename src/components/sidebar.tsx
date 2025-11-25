import { Text } from './ui/text'
import { ScheduleAppointmentForm } from './schedule-appointment-form'

export function Sidebar() {
  return (
    <aside className="p-20 bg-gray-700 space-y-6 max-w-124.5 rounded-xl">
      <div className="space-y-1">
        <Text as="h2" variant="title-lg" className="text-gray-100">
          Agende um atendimento
        </Text>
        <Text>
          Selecione data, horário e informe o nome do cliente para criar o
          agendamento
        </Text>
      </div>

      <ScheduleAppointmentForm />
    </aside>
  )
}
