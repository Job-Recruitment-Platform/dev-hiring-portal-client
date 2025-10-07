import { type LucideProps } from 'lucide-react'

type PrimaryIconProps = {
   icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
   >
   size?: number
   strokeWidth?: number
   className?: string
}

export default function PrimaryIcon({
   icon: Icon,
   size = 16,
   strokeWidth,
   className
}: PrimaryIconProps) {
   return (
      <Icon
         size={size}
         strokeWidth={strokeWidth}
         className={`text-primary-green ${className || ''}`}
      />
   )
}
