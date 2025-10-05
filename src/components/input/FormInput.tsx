import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { Label } from '@/components/ui/label'

type FormInputProps = {
   label?: string
   placeholder?: string
   type?: string
   leftIcon?: React.ReactNode
   rightIcons?: React.ReactNode
}

export function FormInput({
   label,
   placeholder,
   type = 'text',
   leftIcon,
   rightIcons
}: FormInputProps) {
   return (
      <InputGroup className='!h-auto rounded-none py-0.5 pr-2 !border-gray-250'>
         <Label>{label}</Label>
         <InputGroupInput className='!px-5' type={type} placeholder={placeholder} />
         {leftIcon && <InputGroupAddon>{leftIcon}</InputGroupAddon>}
         {rightIcons && <InputGroupAddon align='inline-end'>{rightIcons}</InputGroupAddon>}
      </InputGroup>
   )
}
