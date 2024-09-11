import { forwardRef, ComponentPropsWithoutRef, ElementRef } from 'react'

type Props = ComponentPropsWithoutRef<'div'> & {}

const Layout = forwardRef<ElementRef<'div'>, Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
      >
        <header className='bg-dark-300 fixed top-0 py-6 w-full px-16'>
          Header
        </header>
        <main className={'pt-[84px] px-16'}>{children}</main>
      </div>
    )
  }
)

Layout.displayName = 'Layout'

export { Layout }
