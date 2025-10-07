import { PasswordInput } from '@/components/auth/PasswordInput'
import Button from '@/components/button/Button'
import FilledIcons from '@/components/filled-icon'
import { FormInput } from '@/components/input/FormInput'
import RadioInput from '@/components/input/RadioInput'
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage
} from '@/components/ui/form'
import { COLORS } from '@/constants/theme'
import { recruitRegisterSchema, type RecruitRegisterFormData } from '@/schemas/auth.schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { Building2Icon, MailIcon, PhoneIcon, UserIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'

export default function RecruitRegister() {
   const form = useForm<RecruitRegisterFormData>({
      resolver: zodResolver(recruitRegisterSchema),
      defaultValues: {
         fullName: '',
         email: '',
         password: '',
         repassword: '',
         recruiterFullName: '',
         gender: 'male',
         phone: '',
         company: ''
      }
   })

   const onSubmit = (data: RecruitRegisterFormData) => {
      const { repassword, ...submitData } = data
      console.log('Thông tin đăng ký:', submitData)
   }

   return (
      <div className='w-full'>
         <div className='w-full'>Đăng kí tài khoản nhà tuyển dụng</div>
         <div className='w-full'>
            Cùng tạo dựng lợi thế cho doanh nghiệp bằng trải nghiệm công nghệ tuyển dụng ứng dụng
            sâu AI & Hiring Funnel.
         </div>
         <div>Tài khoản</div>
         <div>Tôi đã đọc và đồng ý với Điều khoản dịch vụ và Chính sách bảo mật của TopCV.</div>
         <Button variant='primary' className='w-full py-2.5'>
            Đăng ký
         </Button>
         <div>Hoặc bằng email</div>
         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex w-full flex-col gap-y-5'>
               <FormField
                  control={form.control}
                  name='fullName'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel className='font-normal text-gray-800/90'>Họ và tên</FormLabel>
                        <FormControl>
                           <FormInput
                              {...field}
                              placeholder='Họ và tên'
                              type='text'
                              leftIcon={
                                 <FilledIcons icon={UserIcon} fill={COLORS.primary} size={20} />
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
                                 <FilledIcons icon={MailIcon} fill={COLORS.primary} size={20} />
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
                           <PasswordInput {...field} placeholder='Mật khẩu' />
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
                           <PasswordInput {...field} placeholder='Nhập lại mật khẩu' />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <div className='w-full space-y-5'>
                  <div>Thông tin nhà tuyển dụng</div>
                  <div className='flex items-stretch gap-x-3'>
                     <FormField
                        control={form.control}
                        name='recruiterFullName'
                        render={({ field }) => (
                           <FormItem className='flex-2/3'>
                              <FormLabel className='font-normal text-gray-800/90'>
                                 Họ và tên
                              </FormLabel>
                              <FormControl>
                                 <FormInput
                                    {...field}
                                    placeholder='Họ và tên'
                                    type='text'
                                    leftIcon={
                                       <FilledIcons
                                          icon={UserIcon}
                                          fill={COLORS.primary}
                                          size={20}
                                       />
                                    }
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                     <FormField
                        control={form.control}
                        name='gender'
                        render={({ field }) => (
                           <FormItem className='flex-1/3'>
                              <FormLabel className='font-normal text-gray-800/90'>
                                 Giới tính
                              </FormLabel>
                              <FormControl>
                                 <RadioInput
                                    {...field}
                                    name='gender'
                                    options={[
                                       { label: 'Nam', value: 'male' },
                                       { label: 'Nữ', value: 'female' }
                                    ]}
                                    orientation='horizontal'
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                  </div>
                  <FormField
                     control={form.control}
                     name='phone'
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel className='font-normal text-gray-800/90'>
                              Số điện thoại cá nhân
                           </FormLabel>
                           <FormControl>
                              <FormInput
                                 {...field}
                                 placeholder='Số điện thoại cá nhân'
                                 type='text'
                                 leftIcon={
                                    <FilledIcons icon={PhoneIcon} fill={COLORS.primary} size={20} />
                                 }
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name='company'
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel className='font-normal text-gray-800/90'>Công ty</FormLabel>
                           <FormControl>
                              <FormInput
                                 {...field}
                                 placeholder='Công ty'
                                 type='text'
                                 leftIcon={
                                    <FilledIcons
                                       icon={Building2Icon}
                                       fill={COLORS.primary}
                                       size={20}
                                    />
                                 }
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
               </div>

               <Button variant='primary' className='w-full !rounded bg-[#00b14f] !py-2.5'>
                  Đăng ký
               </Button>
            </form>
         </Form>
      </div>
   )
}
