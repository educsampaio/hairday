import { Text } from './ui/text'
import { DatePicker } from './ui/date-picker'
import { Button } from './ui/button'
import { TimeSelect } from './ui/time-select'
import { Input } from './ui/input'

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

      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-8">
          <DatePicker />

          <div className="flex flex-col gap-2">
            <Text variant="title-md" className="text-gray-200">
              Horários
            </Text>

            <div className="flex flex-col gap-3">
              {hoursList.map((item, i) => (
                <div
                  key={`${item.period}-${i}`}
                  className="flex flex-col gap-2"
                >
                  <Text>{item.period}</Text>

                  <div className="flex flex-wrap gap-2">
                    {item.hours.map((hour) => (
                      <TimeSelect key={hour} id={hour} value={hour} />
                    ))}
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
            />
          </label>
        </div>

        <Button>Agendar</Button>
      </form>
    </aside>
  )
}
