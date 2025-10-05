import { type LucideProps } from 'lucide-react'

type FilledIconProps = {
   icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
   >
   fill: string
   size?: number
   strokeWidth?: number
}

export default function FilledIcons({ icon: Icon, fill, size, strokeWidth }: FilledIconProps) {
   return (
      <div className='relative'>
         <div>
            <Icon fill={fill} color='white' size={size} />
         </div>
         <div className='absolute top-0'>
            <Icon color='white' size={size} strokeWidth={strokeWidth} />
         </div>
      </div>
   )
}
