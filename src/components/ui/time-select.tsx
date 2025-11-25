import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const timeSelectVariants = cva(
  'flex items-center justify-center w-[78.5px] cursor-pointer transition-colors',
  {
    variants: {
      variant: {
        primary:
          'text-gray-200 bg-gray-600 border border-solid border-gray-500 hover:bg-gray-500 peer-checked:border-yellow peer-checked:bg-gray-600 peer-checked:hover:bg-gray-600 peer-checked:text-yellow peer-disabled:border-gray-600 peer-disabled:bg-transparent peer-disabled:text-gray-500 peer-disabled:pointer-events-none',
      },
      size: {
        md: 'h-10 px-5 rounded-lg text-base/6',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

interface TimeSelectProps
  extends Omit<React.ComponentProps<'input'>, 'size'>,
    VariantProps<typeof timeSelectVariants> {
  id: string
  value: string
}

export function TimeSelect({
  variant,
  size,
  id,
  value,
  className,
  ...props
}: TimeSelectProps) {
  return (
    <div className="inline-flex">
      <input
        type="radio"
        name="time"
        value={value}
        id={id}
        className="peer sr-only"
        {...props}
      />
      <label
        htmlFor={id}
        className={timeSelectVariants({ variant, size, className })}
      >
        {value}
      </label>
    </div>
  )
}
