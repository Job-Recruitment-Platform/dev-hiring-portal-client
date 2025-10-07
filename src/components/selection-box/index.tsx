import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import type { OptionType } from '@/types/common.type'
import { CheckIcon, ChevronDownIcon } from 'lucide-react'
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
               className={`hover:border-primary-green flex items-center justify-between border-white bg-white px-3 py-1.5 ${className}`}
            >
               <div className='ml-2 font-semibold'>{selectedOption?.label}</div>
               <ChevronDownIcon size={16} />
            </button>
         </PopoverTrigger>
         <PopoverContent className='w-[var(--radix-popover-trigger-width)] rounded-md p-0'>
            {options.map((option) => (
               <div
                  key={option.value}
                  className='flex items-center justify-between px-5 py-3 text-sm font-semibold hover:cursor-pointer hover:bg-gray-100'
                  onClick={() => setSelectedOption(option)}
               >
                  <div
                     className={`${selectedOption?.value === option.value && 'text-primary-green text-[14px] font-semibold'}`}
                  >
                     {option.label}
                  </div>
                  {selectedOption?.value === option.value && (
                     <CheckIcon size={16} className='text-primary-green' />
                  )}
               </div>
            ))}
         </PopoverContent>
      </Popover>
   )
}
