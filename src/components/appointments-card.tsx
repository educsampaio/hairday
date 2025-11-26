import type { ReactNode } from 'react'
import {
  CloudSunIcon,
  MoonStarsIcon,
  SunHorizonIcon,
} from '@phosphor-icons/react'

import { Text } from './ui/text'

interface AppointmentsCardProps {
  period: 'morning' | 'afternoon' | 'evening'
  children: ReactNode
}

export function AppointmentsCard({ period, children }: AppointmentsCardProps) {
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

      <div className="p-5 space-y-0.5">{children}</div>
    </div>
  )
}
