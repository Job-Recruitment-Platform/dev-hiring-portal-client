import RadioInput from '@/components/input/RadioInput'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import type { Control, FieldPath, FieldValues } from 'react-hook-form'

type GenderOption = {
   label: string
   value: string
}

type GenderFormFieldProps<TFieldValues extends FieldValues> = {
   control: Control<TFieldValues>
   name: FieldPath<TFieldValues>
   label?: string
   options?: GenderOption[]
   className?: string
}

const defaultOptions: GenderOption[] = [
   { label: 'Nam', value: 'male' },
   { label: 'Nữ', value: 'female' }
]

export default function GenderFormField<TFieldValues extends FieldValues>({
   control,
   name,
   label = 'Giới tính',
   options = defaultOptions,
   className
}: GenderFormFieldProps<TFieldValues>) {
   return (
      <FormField
         control={control}
         name={name}
         render={({ field }) => (
            <FormItem className={className}>
               <FormLabel className='font-normal text-gray-800/90'>{label}</FormLabel>
               <FormControl>
                  <RadioInput
                     {...field}
                     name={String(name)}
                     options={options}
                     orientation='horizontal'
                  />
               </FormControl>
               <FormMessage />
            </FormItem>
         )}
      />
   )
}
