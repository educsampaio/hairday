import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const textVariants = cva('font-sans', {
  variants: {
    variant: {
      'title-lg': 'text-2xl leading-6 font-bold',
      'title-md': 'text-base leading-6 font-bold',
      'title-sm': 'text-sm leading-5 font-bold',
      'text-md': 'text-base leading-6',
      'text-sm': 'text-sm leading-5',
    },
  },
  defaultVariants: {
    variant: 'text-sm',
  },
})

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements
  className?: string
  children: React.ReactNode
}

export function Text({
  as = 'span',
  variant,
  className,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    { className: textVariants({ variant, className }), ...props },
    children
  )
}
