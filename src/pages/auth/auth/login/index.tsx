import Button from '@/components/button/Button'
import FilledIcons from '@/components/filled-icon'
import { FormInput } from '@/components/input/FormInput'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { MailIcon, ShieldIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'

export default function Login() {
   const form = useForm()

   return (
      <div className='w-full'>
         <Form {...form}>
            <form
               onSubmit={form.handleSubmit((data) => console.log(data))}
               className='flex w-full flex-col gap-y-4'
            >
               <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel className='font-normal text-gray-800/90'>Email</FormLabel>
                        <FormControl>
                           <FormInput
                              placeholder='Email'
                              type='email'
                              leftIcon={<FilledIcons icon={MailIcon} fill='#00b14f' size={20} />}
                           />
                        </FormControl>
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel className='font-normal text-gray-800/90'>Email</FormLabel>
                        <FormControl>
                           <FormInput
                              placeholder='Mật khẩu'
                              type='password'
                              leftIcon={<FilledIcons icon={ShieldIcon} fill='#00b14f' size={20} />}
                           />
                        </FormControl>
                     </FormItem>
                  )}
               />
               <div className='w-full text-end text-[14px] font-normal text-[#00b14f]'>
                  Quên mật khẩu
               </div>
               <Button variant='primary' className='w-full !rounded bg-[#00b14f] !py-2.5'>
                  Đăng nhập
               </Button>
               <div className='w-full text-center text-sm font-normal text-gray-500'>
                  Hoặc đăng nhập bằng
               </div>
               <div className='flex gap-x-3'>
                  <Button variant='primary' className='flex-1 !py-2.5'>
                     Google
                  </Button>
                  <Button variant='primary' className='flex-1 !py-2.5'>
                     Facebook
                  </Button>
                  <Button variant='primary' className='flex-1 !py-2.5'>
                     Linkedin
                  </Button>
               </div>
               <span className='text-center text-sm'>
                  Bạn chưa có tài khoản? <a className='font-normal text-[#00b14f]'>Đăng kí ngay</a>
               </span>
            </form>
         </Form>
      </div>
   )
}
