import { type LucideProps } from 'lucide-react'

type BasicInfoBoxProps = {
   label: string
   value: string
   icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
   >
}

export default function BasicInfoBox({ label, value, icon: Icon }: BasicInfoBoxProps) {
   return (
      <div className='flex w-full items-center gap-x-3'>
         <div className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[linear-gradient(11deg,rgb(0,191,93),rgb(0,144,124))]'>
            <Icon size={20} color='white' strokeWidth={3} />
         </div>
         <div className='flex flex-col text-[14px]'>
            <div className='text-gray-400'>{label}</div>
            <div className='font-semibold'>{value}</div>
         </div>
      </div>
   )
}
