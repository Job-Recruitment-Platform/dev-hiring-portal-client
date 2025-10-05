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
import type { LoginType } from '@/types/auth.type'
import { zodResolver } from '@hookform/resolvers/zod'
import { MailIcon, ShieldIcon } from 'lucide-react'
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
      <div className='w-full'>
         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex w-full flex-col gap-y-4'>
               <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel className='font-normal text-gray-800/90'>Email</FormLabel>
                        <FormControl>
                           <FormInput
                              {...field}
                              placeholder='Email'
                              type='email'
                              leftIcon={<FilledIcons icon={MailIcon} fill='#00b14f' size={20} />}
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
                              type='password'
                              leftIcon={<FilledIcons icon={ShieldIcon} fill='#00b14f' size={20} />}
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <div className='w-full text-end text-[14px] font-normal text-[#00b14f]'>
                  Quên mật khẩu
               </div>
               <Button variant='primary' className='w-full !rounded bg-[#00b14f] !py-2.5'>
                  Đăng nhập
               </Button>
            </form>
         </Form>
      </div>
   )
}
