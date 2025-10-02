import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import type { OptionType } from '@/types/common.type'
import { ChevronDownIcon } from 'lucide-react'
import { useState } from 'react'

type ShowPriorityProps = {
   options: OptionType[]
   defaultOption?: OptionType
}

export default function ShowPriority({ options, defaultOption }: ShowPriorityProps) {
   const [selectedOption] = useState<OptionType>(defaultOption || options[0])

   return (
      <Popover>
         <PopoverTrigger>
            <button className='flex items-center gap-x-28 rounded-full bg-white px-2 py-1.5'>
               <div>{selectedOption.label}</div>
               <ChevronDownIcon size={16} />
            </button>
         </PopoverTrigger>
         <PopoverContent>
            {options.map((option) => (
               <div key={option.value} className='p-2'>
                  {option.label}
               </div>
            ))}
         </PopoverContent>
      </Popover>
   )
}
