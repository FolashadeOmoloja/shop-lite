import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <main
      className={cn(
        'mx-auto w-full max-w-[1440px] px-2.5 md:px-20',
        className
      )}>
      {children}
    </main>
  )
}

export default MaxWidthWrapper