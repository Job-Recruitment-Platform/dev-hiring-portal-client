import Button from '@/components/button/Button'
import type { OptionType } from '@/types/common.type'
import { CheckIcon } from 'lucide-react'
import { useState } from 'react'

type JobFilterProps = {
   options: OptionType[]
}

export default function JobFilter({ options }: JobFilterProps) {
   const [selectedOption, setSelectedOption] = useState<OptionType | null>(null)

   return (
      <div className='flex gap-x-2'>
         {options.map((option) => (
            <Button
               key={option.value}
               onClick={() => setSelectedOption(option)}
               variant={selectedOption?.value === option.value ? 'secondary' : 'ghost'}
               className='!hover:bg-gray-550 !gap-x-2 !py-1 !text-sm'
            >
               {selectedOption?.value === option.value && <CheckIcon size={13} />}
               {option.label}
            </Button>
         ))}
      </div>
   )
}
