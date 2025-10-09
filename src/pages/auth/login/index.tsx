import AuthFormWrapper from '@/components/auth/AuthFormWrapper'
import EmailFormField from '@/components/auth/EmailFormField'
import PasswordFormField from '@/components/auth/PasswordFormField'
import AuthSubmitButton from '@/components/button/AuthSubmitButton'
import { PrimaryLink } from '@/components/common'
import type { LoginType } from '@/types/auth.type'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const loginSchema = z.object({
   email: z.string().email('Email không hợp lệ').min(1, 'Email là bắt buộc'),
   password: z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự').min(1, 'Mật khẩu là bắt buộc')
})

export default function Login() {
   const form = useForm<LoginType>({
      resolver: zodResolver(loginSchema),
      defaultValues: {
         email: '',
         password: ''
      }
   })

   const onSubmit = (data: LoginType) => {
      console.log('Thông tin đăng nhập:', data)
   }

   return (
      <AuthFormWrapper form={form} onSubmit={onSubmit}>
         <EmailFormField control={form.control} name='email' />
         <PasswordFormField control={form.control} name='password' label='Mật khẩu' />

         <PrimaryLink to='/forgot-password' className='w-full text-end text-[14px] font-normal'>
            Quên mật khẩu
         </PrimaryLink>

         <AuthSubmitButton>Đăng nhập</AuthSubmitButton>
      </AuthFormWrapper>
   )
}
