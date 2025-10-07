import { InputGroup } from '@/components/ui/input-group'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { forwardRef } from 'react'

type RadioOption = {
   label: string
   value: string
   disabled?: boolean
}

type RadioInputProps = {
   label?: string
   options: RadioOption[]
   value?: string
   onChange?: (value: string) => void
   onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void
   name?: string
   className?: string
   orientation?: 'horizontal' | 'vertical'
   disabled?: boolean
}

export const RadioInput = forwardRef<HTMLDivElement, RadioInputProps>(
   (
      {
         label,
         options,
         value,
         onChange,
         onBlur,
         name,
         className,
         orientation = 'vertical',
         disabled = false
      },
      ref
   ) => {
      return (
         <InputGroup className={`!h-auto rounded-none px-3 py-2 ${className}`}>
            {label && <Label className='mb-2 font-normal text-gray-800/90'>{label}</Label>}
            <RadioGroup
               ref={ref}
               value={value}
               onValueChange={onChange}
               onBlur={onBlur}
               name={name}
               disabled={disabled}
               className={
                  orientation === 'horizontal' ? 'flex flex-row gap-6' : 'flex flex-col gap-3'
               }
            >
               {options.map((option) => (
                  <div key={option.value} className='flex items-center space-x-2'>
                     <RadioGroupItem
                        value={option.value}
                        id={`${name}-${option.value}`}
                        disabled={disabled || option.disabled}
                     />
                     <Label
                        htmlFor={`${name}-${option.value}`}
                        className='cursor-pointer text-sm font-normal text-gray-700'
                     >
                        {option.label}
                     </Label>
                  </div>
               ))}
            </RadioGroup>
         </InputGroup>
      )
   }
)

RadioInput.displayName = 'RadioInput'

export default RadioInput
