import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const containerVariants = cva('mx-auto flex flex-col md:flex-row', {
  variants: {
    size: {
      md: 'max-w-360 px-3',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

interface ContainerProps
  extends VariantProps<typeof containerVariants>,
    React.ComponentProps<'div'> {
  as?: keyof React.JSX.IntrinsicElements
}

export function Container({
  as = 'div',
  size,
  className,
  children,
  ...props
}: ContainerProps) {
  return React.createElement(
    as,
    {
      className: containerVariants({ size, className }),
      ...props,
    },
    children
  )
}
