import AuthFormWrapper from '@/components/auth/AuthFormWrapper'
import AuthSubmitButton from '@/components/auth/AuthSubmitButton'
import CompanyFormField from '@/components/auth/CompanyFormField'
import EmailFormField from '@/components/auth/EmailFormField'
import FullNameFormField from '@/components/auth/FullNameFormField'
import GenderFormField from '@/components/auth/GenderFormField'
import PasswordFormField from '@/components/auth/PasswordFormField'
import PhoneFormField from '@/components/auth/PhoneFormField'
import Button from '@/components/button/Button'
import { recruitRegisterSchema, type RecruitRegisterFormData } from '@/schemas/auth.schemas'
import { zodResolver } from '@hookform/resolvers/zod'
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

         <AuthFormWrapper form={form} onSubmit={onSubmit} className='gap-y-5'>
            <FullNameFormField control={form.control} name='fullName' />
            <EmailFormField control={form.control} name='email' placeholder='Nhập email' />
            <PasswordFormField control={form.control} name='password' />
            <PasswordFormField
               control={form.control}
               name='repassword'
               label='Xác nhận mật khẩu'
               placeholder='Nhập lại mật khẩu'
            />

            <div className='w-full space-y-5'>
               <div>Thông tin nhà tuyển dụng</div>
               <div className='flex items-stretch gap-x-3'>
                  <FullNameFormField
                     control={form.control}
                     name='recruiterFullName'
                     className='flex-2/3'
                  />
                  <GenderFormField control={form.control} name='gender' className='flex-1/3' />
               </div>
               <PhoneFormField control={form.control} name='phone' />
               <CompanyFormField control={form.control} name='company' />
            </div>

            <AuthSubmitButton>Đăng ký</AuthSubmitButton>
         </AuthFormWrapper>
      </div>
   )
}
