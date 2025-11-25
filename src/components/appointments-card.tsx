import {
  CloudSunIcon,
  MoonStarsIcon,
  SunHorizonIcon,
  TrashIcon,
} from '@phosphor-icons/react'

import { ButtonIcon } from './ui/button-icon'
import { Text } from './ui/text'

interface AppointmentsCardProps {
  period: 'morning' | 'afternoon' | 'evening'
}

export function AppointmentsCard({ period }: AppointmentsCardProps) {
  return (
    <div className="border border-solid border-gray-600 rounded-lg">
      <header className="flex items-center justify-between border-b border-solid border-gray-600 px-5 py-3">
        <div className="flex gap-3 items-center">
          {period === 'morning' ? (
            <SunHorizonIcon weight="bold" className="size-5 text-yellow" />
          ) : period === 'afternoon' ? (
            <CloudSunIcon weight="bold" className="size-5 text-yellow" />
          ) : (
            <MoonStarsIcon weight="bold" className="size-5 text-yellow" />
          )}

          <Text>
            {period === 'morning'
              ? 'Manhã'
              : period === 'afternoon'
              ? 'Tarde'
              : 'Noite'}
          </Text>
        </div>
        <Text>
          {period === 'morning'
            ? '09h-12h'
            : period === 'afternoon'
            ? '13h-18h'
            : '19h-21h'}
        </Text>
      </header>

      <div className="p-5">
        <div className="flex items-center gap-5 py-1">
          <Text variant="title-md" className="text-gray-200">
            11:00
          </Text>
          <Text variant="text-md" className="flex-1 text-gray-200">
            Ryan Dorwart
          </Text>
          <ButtonIcon icon={TrashIcon} />
        </div>
      </div>
    </div>
  )
}
