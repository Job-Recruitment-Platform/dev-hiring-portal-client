import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import type { OptionType } from '@/types/common.type'
import { ChevronDownIcon } from 'lucide-react'
import { useState } from 'react'

type SelectionBoxProps = {
   className?: string
   options: OptionType[]
   defaultOption?: OptionType
}

export default function SelectionBox({ className, options, defaultOption }: SelectionBoxProps) {
   const [selectedOption, setSelectedOption] = useState<OptionType>(defaultOption || options?.[0])

   return (
      <Popover>
         <PopoverTrigger asChild>
            <button
               className={`flex items-center justify-between border-white bg-white px-3 py-1.5 hover:border-[#00b14f] ${className}`}
            >
               <div className='ml-2 font-semibold'>{selectedOption?.label}</div>
               <ChevronDownIcon size={16} />
            </button>
         </PopoverTrigger>
         <PopoverContent className='w-[var(--radix-popover-trigger-width)] p-1.5'>
            {options.map((option) => (
               <div
                  key={option.value}
                  className='p-2 hover:cursor-pointer hover:bg-gray-100'
                  onClick={() => setSelectedOption(option)}
               >
                  {option.label}
               </div>
            ))}
         </PopoverContent>
      </Popover>
   )
}
