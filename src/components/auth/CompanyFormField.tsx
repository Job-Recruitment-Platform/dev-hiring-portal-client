import FilledIcons from '@/components/filled-icon'
import { FormInput } from '@/components/input/FormInput'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Building2Icon } from 'lucide-react'
import type { Control, FieldPath, FieldValues } from 'react-hook-form'

type CompanyFormFieldProps<TFieldValues extends FieldValues> = {
   control: Control<TFieldValues>
   name: FieldPath<TFieldValues>
   label?: string
   placeholder?: string
}

export default function CompanyFormField<TFieldValues extends FieldValues>({
   control,
   name,
   label = 'Công ty',
   placeholder = 'Công ty'
}: CompanyFormFieldProps<TFieldValues>) {
   return (
      <FormField
         control={control}
         name={name}
         render={({ field }) => (
            <FormItem>
               <FormLabel className='font-normal text-gray-800/90'>{label}</FormLabel>
               <FormControl>
                  <FormInput
                     {...field}
                     placeholder={placeholder}
                     type='text'
                     leftIcon={<FilledIcons icon={Building2Icon} fillColor='primary' size={20} />}
                  />
               </FormControl>
               <FormMessage />
            </FormItem>
         )}
      />
   )
}
