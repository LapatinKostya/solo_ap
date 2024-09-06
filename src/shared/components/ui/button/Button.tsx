import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/shared/utils'

const buttonVariants = cva(
  [
    'rounded-sm',
    'inline-flex',
    'items-center',
    'justify-center',
    'px-6',
    'py-1.5',
    'focus:border-2',
    'focus:border-accent-500',
    'disabled:pointer-events-none',
    'disabled:text-light-900',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-accent-500',
          'hover:bg-accent-100',
          'active:bg-accent-700',
          'disabled:bg-accent-900',
        ],
        secondary: ['bg-dark-300', 'hover:bg-dark-100', 'active:bg-[#212121]'],
        outline: [
          'border',
          'border-accent-500',
          'text-accent-500',
          'hover:border-accent-100',
          'hover:text-accent-100',
          'active:border-accent-700',
          'active:text-accent-700',
          'disabled:text-accent-900',
          'disabled:border-accent-900',
        ],
        text: [
          'text-accent-500',
          'hover:text-accent-100',
          'active:text-accent-700',
          'disabled:text-accent-900',
        ],
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : 'button'
    return (
      <Component
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
