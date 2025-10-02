import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import type { OptionType } from '@/types/common.type'
import clsx from 'clsx'

type BasicFilterOptionProps = {
   label: string
   columns: 1 | 2
   options: OptionType[]
   className?: string
}

export default function BasicFilterOption({
   label,
   columns,
   options,
   className
}: BasicFilterOptionProps) {
   return (
      <div className={clsx('flex flex-col gap-y-3', className)}>
         <div className='text-[15px] font-semibold'>{label}</div>
         <RadioGroup>
            <div
               className={clsx(
                  `grid grid-cols-${columns} gap-y-2.5`,
                  columns === 2 &&
                     `grid-rows-${Math.ceil(options.length / 2)} grid-cols-[fit-content(100%)_fit-content(100%)] gap-x-8`
               )}
            >
               {options.map((option) => (
                  <div
                     key={option.value}
                     className='group flex items-center gap-x-3 hover:cursor-pointer'
                  >
                     <RadioGroupItem
                        value={option.value}
                        id={`radio-${option.value}`}
                        className={clsx(
                           'hover:border-[] h-4.5 w-4.5 border-2 border-gray-400/80 group-hover:border-[#00b14f]',
                           'data-[state=checked]:border-[#00b14f] data-[state=unchecked]:text-[#00b14f]'
                        )}
                     />
                     <div className='text-[13px] font-semibold text-gray-500 group-hover:text-[#00b14f]'>
                        {option.label}
                     </div>
                  </div>
               ))}
            </div>
         </RadioGroup>
      </div>
   )
}
