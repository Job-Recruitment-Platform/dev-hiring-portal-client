import Button from '@/components/button/Button'
import FilledIcons from '@/components/filled-icon'
import { FormInput } from '@/components/input/FormInput'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { EyeOffIcon, MailIcon, ShieldIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'

export default function Register() {
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
                  name='fullName'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel className='font-normal text-gray-800/90'>Họ và tên</FormLabel>
                        <FormControl>
                           <FormInput
                              placeholder='Nhập họ và tên'
                              type='text'
                              leftIcon={<FilledIcons icon={MailIcon} fill='#00b14f' size={20} />}
                           />
                        </FormControl>
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
                              placeholder='Nhập email'
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
                        <FormLabel className='font-normal text-gray-800/90'>Mật khẩu</FormLabel>
                        <FormControl>
                           <FormInput
                              placeholder='Mật khẩu'
                              type='password'
                              leftIcon={<FilledIcons icon={ShieldIcon} fill='#00b14f' size={20} />}
                              rightIcons={
                                 <button>
                                    <EyeOffIcon size={20} color='#bcc1c5' />
                                 </button>
                              }
                           />
                        </FormControl>
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
                              placeholder='Nhập lại mật khẩu'
                              type='password'
                              leftIcon={<FilledIcons icon={ShieldIcon} fill='#00b14f' size={20} />}
                              rightIcons={
                                 <button>
                                    <EyeOffIcon size={20} color='#bcc1c5' />
                                 </button>
                              }
                           />
                        </FormControl>
                     </FormItem>
                  )}
               />

               <Button variant='primary' className='w-full !rounded bg-[#00b14f] !py-2.5'>
                  Đăng ký
               </Button>
               
            </form>
         </Form>
      </div>
   )
}
