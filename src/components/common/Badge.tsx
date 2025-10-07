type BadgeVariant = 'primary' | 'outline' | 'ghost'

type BadgeProps = {
   children: React.ReactNode
   variant?: BadgeVariant
   className?: string
}

const variantStyles = {
   primary: 'bg-primary-green text-white',
   outline: 'border border-primary-green text-primary-green bg-white',
   ghost: 'text-primary-green bg-green-50'
}

export default function Badge({ children, variant = 'primary', className }: BadgeProps) {
   return (
      <span
         className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${variantStyles[variant]} ${className || ''}`}
      >
         {children}
      </span>
   )
}
