import FilledIcons from '@/components/filled-icon'
import { FormInput } from '@/components/input/FormInput'
import { usePasswordVisibility } from '@/hooks/usePasswordVisibility'
import { EyeIcon, EyeOffIcon, ShieldIcon } from 'lucide-react'

type PasswordInputProps = {
   placeholder: string
   value?: string
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
   onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
   name?: string
}

export const PasswordInput = ({ placeholder, ...props }: PasswordInputProps) => {
   const { show, toggle } = usePasswordVisibility()

   return (
      <FormInput
         {...props}
         type={show ? 'text' : 'password'}
         placeholder={placeholder}
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
   )
}
