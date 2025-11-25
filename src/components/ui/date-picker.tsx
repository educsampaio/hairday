import { useRef } from 'react'
import { CalendarBlankIcon, CaretDownIcon } from '@phosphor-icons/react'
import { format } from 'date-fns'

type DatePickerProps = React.ComponentProps<'input'>

export function DatePicker({ ...props }: DatePickerProps) {
  const today = format(new Date(), 'yyyy-MM-dd')
  const inputRef = useRef<HTMLInputElement>(null)

  function showPicker() {
    inputRef.current?.showPicker()
  }
  return (
    <button
      type="button"
      onClick={showPicker}
      className="border border-solid border-gray-500 p-3 rounded-lg cursor-pointer flex items-center gap-2 focus-within:border-yellow transition-colors"
    >
      <CalendarBlankIcon weight="bold" className="size-5 text-yellow" />
      <input
        ref={inputRef}
        type="date"
        min={today}
        className="[&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden outline-none cursor-pointer text-base/6 flex-1"
        {...props}
      />
      <CaretDownIcon weight="bold" className="size-4 text-gray-300" />
    </button>
  )
}
