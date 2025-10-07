import Button from '@/components/button/Button'
import FilledIcons from '@/components/filled-icon'
import { FormInput } from '@/components/input/FormInput'
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage
} from '@/components/ui/form'
import type { RegisterType } from '@/types/auth.type'
import { zodResolver } from '@hookform/resolvers/zod'
import { EyeIcon, EyeOffIcon, MailIcon, ShieldIcon, UserIcon } from 'lucide-react'
import { useState } from 'react'
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
   const [showPassword, setShowPassword] = useState(false)
   const [showRePassword, setShowRePassword] = useState(false)

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
      // Loại bỏ repassword trước khi console.log
      const { repassword, ...registerData } = data
      console.log('Thông tin đăng ký:', registerData)
   }

   const togglePasswordVisibility = () => setShowPassword(!showPassword)
   const toggleRePasswordVisibility = () => setShowRePassword(!showRePassword)

   return (
      <div className='w-full'>
         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex w-full flex-col gap-y-4'>
               <FormField
                  control={form.control}
                  name='fullName'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel className='font-normal text-gray-800/90'>Họ và tên</FormLabel>
                        <FormControl>
                           <FormInput
                              {...field}
                              placeholder='Nhập họ và tên'
                              type='text'
                              leftIcon={
                                 <FilledIcons icon={UserIcon} fillColor='primary' size={20} />
                              }
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel className='font-normal text-gray-800/90'>Email</FormLabel>
                        <FormControl>
                           <FormInput
                              {...field}
                              placeholder='Nhập email'
                              type='email'
                              leftIcon={
                                 <FilledIcons icon={MailIcon} fillColor='primary' size={20} />
                              }
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel className='font-normal text-gray-800/90'>Mật khẩu</FormLabel>
                        <FormControl>
                           <FormInput
                              {...field}
                              placeholder='Mật khẩu'
                              type={showPassword ? 'text' : 'password'}
                              leftIcon={
                                 <FilledIcons icon={ShieldIcon} fillColor='primary' size={20} />
                              }
                              rightIcons={
                                 <button type='button' onClick={togglePasswordVisibility}>
                                    {showPassword ? (
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
                  )}
               />
               <FormField
                  control={form.control}
                  name='repassword'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel className='font-normal text-gray-800/90'>
                           Xác nhận mật khẩu
                        </FormLabel>
                        <FormControl>
                           <FormInput
                              {...field}
                              placeholder='Nhập lại mật khẩu'
                              type={showRePassword ? 'text' : 'password'}
                              leftIcon={
                                 <FilledIcons icon={ShieldIcon} fillColor='primary' size={20} />
                              }
                              rightIcons={
                                 <button type='button' onClick={toggleRePasswordVisibility}>
                                    {showRePassword ? (
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
                  )}
               />

               <Button variant='primary' className='w-full !rounded !py-2.5'>
                  Đăng ký
               </Button>
            </form>
         </Form>
      </div>
   )
}
