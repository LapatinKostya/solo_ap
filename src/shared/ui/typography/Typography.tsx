import * as React from 'react'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '@/shared/utils'

const typographyVariants = cva([], {
  variants: {
    variant: {
      large: ['text-xxl', 'font-semibold', 'leading-l'],
      h1: ['text-xl', 'font-semibold', 'leading-l'],
      h2: ['text-l', 'font-bold', 'leading-m'],
      h3: ['text-m', 'font-semibold', 'leading-m'],
      regular_text_16: ['text-m', 'font-regular', 'leading-m'],
      bold_text_16: ['text-m', 'font-bold', 'leading-m'],
      regular_text_14: ['text-s', 'font-regular', 'leading-m'],
      medium_text_14: ['text-s', 'font-medium', 'leading-m'],
      bold_text_14: ['text-s', 'font-bold', 'leading-m'],
      small_text: ['text-xs', 'font-regular', 'leading-s'],
      semibold_small_text: ['text-xs', 'font-semibold', 'leading-s'],
      regular_link: [
        'text-s',
        'font-regular',
        'leading-m',
        'cursor: pointer',
        'text-accent-500',
        'underline',
      ],
      small_link: [
        'text-xs',
        'font-regular',
        'leading-s',
        'cursor: pointer',
        'text-accent-500',
        'underline',
      ],
    },
  },
  defaultVariants: {
    variant: 'regular_text_14',
  },
})

type Props = {
  asChild?: boolean
} & ComponentPropsWithoutRef<'p'> &
  VariantProps<typeof typographyVariants>

const Typography = forwardRef<ElementRef<'p'>, Props>(
  ({ asChild, variant, className, ...props }, ref) => {
    const Component = asChild ? Slot : 'p'

    return (
      <Component
        ref={ref}
        className={cn(typographyVariants({ variant, className }))}
        {...props}
      />
    )
  }
)

Typography.displayName = 'Typography'

export { Typography, typographyVariants }
