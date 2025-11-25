import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { type IconProps } from '@phosphor-icons/react'

const inputVariants = cva('border border-solid transition-colors', {
  variants: {
    variant: {
      primary:
        'text-gray-200 border-gray-500 placeholder:text-gray-400 focus-visible:outline-none focus-visible:border-yellow-dark',
    },
    size: {
      md: 'py-3 pr-3 pl-10 rounded-lg text-md leading-none',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

const inputIconVariants = cva('absolute top-4 left-3 pointer-events-none', {
  variants: {
    variant: {
      primary: 'text-yellow',
    },
    size: {
      md: 'size-5',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

interface InputProps
  extends Omit<React.ComponentProps<'input'>, 'size'>,
    VariantProps<typeof inputVariants> {
  icon: React.ComponentType<IconProps>
}

export function Input({
  variant,
  size,
  icon: Icon,
  className,
  type,
  ...props
}: InputProps) {
  return (
    <div className="relative flex">
      <Icon weight="bold" className={inputIconVariants({ variant, size })} />
      <input
        type={type}
        className={inputVariants({ variant, size, className })}
        {...props}
      />
    </div>
  )
}
