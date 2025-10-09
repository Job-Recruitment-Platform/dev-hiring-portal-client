import AuthFormWrapper from '@/components/auth/AuthFormWrapper'
import AuthSubmitButton from '@/components/auth/AuthSubmitButton'
import EmailFormField from '@/components/auth/EmailFormField'
import FullNameFormField from '@/components/auth/FullNameFormField'
import PasswordFormField from '@/components/auth/PasswordFormField'
import type { RegisterType } from '@/types/auth.type'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const registerSchema = z
   .object({
      fullName: z.string().min(2, 'Họ tên phải có ít nhất 2 ký tự').min(1, 'Họ tên là bắt buộc'),
      email: z.string().email('Email không hợp lệ').min(1, 'Email là bắt buộc'),
      password: z
         .string()
         .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
         .min(1, 'Mật khẩu là bắt buộc'),
      repassword: z.string().min(1, 'Xác nhận mật khẩu là bắt buộc')
   })
   .refine((data) => data.password === data.repassword, {
      message: 'Mật khẩu xác nhận không khớp',
      path: ['repassword']
   })

type RegisterFormType = RegisterType & { repassword: string }

export default function Register() {
   const form = useForm<RegisterFormType>({
      resolver: zodResolver(registerSchema),
      defaultValues: {
         fullName: '',
         email: '',
         password: '',
         repassword: ''
      }
   })

   const onSubmit = (data: RegisterFormType) => {
      const { repassword, ...registerData } = data
      console.log('Thông tin đăng ký:', registerData)
   }

   return (
      <AuthFormWrapper form={form} onSubmit={onSubmit}>
         <FullNameFormField control={form.control} name='fullName' />
         <EmailFormField
            control={form.control}
            name='email'
            label='Email'
            placeholder='Nhập email'
         />
         <PasswordFormField
            control={form.control}
            name='password'
            label='Mật khẩu'
            placeholder='Mật khẩu'
         />
         <PasswordFormField
            control={form.control}
            name='repassword'
            label='Xác nhận mật khẩu'
            placeholder='Nhập lại mật khẩu'
         />

         <AuthSubmitButton>Đăng ký</AuthSubmitButton>
      </AuthFormWrapper>
   )
}
