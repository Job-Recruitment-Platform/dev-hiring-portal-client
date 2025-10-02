import { Checkbox } from '@/components/ui/checkbox'
import clsx from 'clsx'
import { ChevronRight } from 'lucide-react'

type SearchItemProps = {
   type: 'province' | 'district'
   name: string
}

export default function SearchItem({ type, name }: SearchItemProps) {
   return (
      <div
         className={clsx(
            'group flex items-center justify-between rounded-lg p-2.5',
            'hover:cursor-pointer hover:bg-gray-100'
         )}
      >
         <div className='flex items-center gap-x-3 text-[14px] font-semibold text-black/80 group-hover:text-[#00b14f]'>
            <Checkbox
               className={clsx(
                  'h-[20px] w-[20px] rounded border-[2px] border-gray-300',
                  'data-[state=checked]:border-[#00b14f] data-[state=checked]:bg-[#00b14f]',
                  'group-hover:border-[#00b14f]'
               )}
            />
            {name}
         </div>
         {type === 'province' && <ChevronRight size={16} className='group-hover:text-[#00b14f]' />}
      </div>
   )
}
