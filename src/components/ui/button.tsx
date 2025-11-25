import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const ButtonVariants = cva(
  'flex items-center justify-center cursor-pointer uppercase rounded-lg transition-colors font-bold border-solid border-2 border-transparent disabled:opacity-30 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-yellow text-gray-900 hover:border-yellow-light',
      },
      size: {
        md: 'h-14 px-4 text-sm leading-5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof ButtonVariants> {}

export function Button({
  variant,
  size,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={ButtonVariants({ variant, size, className })} {...props}>
      {children}
    </button>
  )
}
