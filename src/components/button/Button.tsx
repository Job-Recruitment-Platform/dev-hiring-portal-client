import clsx from 'clsx'

const variantStyles = {
   primary: 'bg-[#00b14f] text-white hover:brightness-105',
   ghost: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100'
}

type ButtonProps = {
   children: React.ReactNode
   onClick?: () => void
   className?: string
   variant?: 'primary' | 'ghost'
}

export default function Button({ children, onClick, className, variant = 'primary' }: ButtonProps) {
   return (
      <button
         className={clsx(
            `content-baseline rounded-full px-4 py-2 text-[15px] font-semibold hover:cursor-pointer`,
            `${className}`,
            `${variantStyles[variant]}`
         )}
         onClick={onClick}
      >
         {children}
      </button>
   )
}
