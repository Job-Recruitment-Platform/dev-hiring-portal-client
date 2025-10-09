import FilledIcons from '@/components/filled-icon'
import { FormInput } from '@/components/input/FormInput'
import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { usePasswordVisibility } from '@/hooks/usePasswordVisibility'
import { EyeIcon, EyeOffIcon, ShieldIcon } from 'lucide-react'
import { forwardRef } from 'react'

type PasswordFieldProps = {
   name: string
   label: string
   placeholder: string
   // Thêm các props khác nếu cần
}

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
   ({ name, label, placeholder }, ref) => {
      const { show, toggle } = usePasswordVisibility()

      return (
         <FormItem>
            <FormLabel className='font-normal text-gray-800/90'>{label}</FormLabel>
            <FormControl>
               <FormInput
                  ref={ref}
                  name={name}
                  placeholder={placeholder}
                  type={show ? 'text' : 'password'}
                  leftIcon={<FilledIcons icon={ShieldIcon} fillColor='primary' size={20} />}
                  rightIcons={
                     <button type='button' onClick={toggle}>
                        {show ? (
                           <EyeIcon size={20} color='#bcc1c5' />
                        ) : (
                           <EyeOffIcon size={20} color='#bcc1c5' />
                        )}
                     </button>
                  }
               />
            </FormControl>
            <FormMessage />
         </FormItem>
      )
   }
)

PasswordField.displayName = 'PasswordField'
