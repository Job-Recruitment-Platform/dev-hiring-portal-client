import clsx from 'clsx'

const variantStyles = {
   primary: 'bg-[#00b14f] text-white hover:brightness-105',
   secondary: 'bg-white border border-[#00b14f] text-[#00b14f]',
   ghost: 'bg-gray-200/60 hover:bg-gray-300/70'
}

type ButtonProps = {
   children: React.ReactNode
   onClick?: () => void
   className?: string
   variant?: 'primary' | 'ghost' | 'secondary'
}

export default function Button({ children, onClick, className, variant = 'primary' }: ButtonProps) {
   return (
      <button
         className={clsx(
            `flex items-center gap-x-1 rounded-full px-4 py-2 text-[15px] font-semibold hover:cursor-pointer`,
            `${className}`,
            `${variantStyles[variant]}`
         )}
         onClick={onClick}
      >
         {children}
      </button>
   )
}
