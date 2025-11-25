import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { type IconProps } from '@phosphor-icons/react'

const ButtonIconVariants = cva(
  'flex items-center justify-center cursor-pointer group',
  {
    variants: {
      variant: {
        primary: '',
      },
      size: {
        sm: 'size-4',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'sm',
    },
  }
)

const ButtonIconIconVariants = cva('', {
  variants: {
    variant: {
      primary: 'text-yellow group-hover:text-yellow-dark transition-colors',
    },
    size: {
      sm: 'size-4',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'sm',
  },
})

interface ButtonIconProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof ButtonIconVariants> {
  icon: React.ComponentType<IconProps>
}

export function ButtonIcon({
  variant,
  size,
  icon: Icon,
  className,
  ...props
}: ButtonIconProps) {
  return (
    <button
      className={ButtonIconVariants({ variant, size, className })}
      {...props}
    >
      <Icon className={ButtonIconIconVariants({ variant, size })} />
    </button>
  )
}
