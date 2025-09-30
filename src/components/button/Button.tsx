type ButtonProps = {
   children: React.ReactNode
   onClick?: () => void
   className?: string
}

export default function Button({ children, onClick, className }: ButtonProps) {
   return (
      <button
         className={`content-baseline rounded-full bg-[#00b14f] px-4 py-2 font-semibold text-white hover:cursor-pointer hover:brightness-105 ${className}`}
         onClick={onClick}
      >
         {children}
      </button>
   )
}
