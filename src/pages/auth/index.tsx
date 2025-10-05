import Button from '@/components/button/Button'
import { GoogleIcon } from '@/components/icon'
import { FacebookIcon, LinkedinIcon } from 'lucide-react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export default function Auth() {
   const location = useLocation()
   const currentPath = location.pathname.split('/').pop()
   const isRegister = currentPath === 'register'

   return (
      <div className='flex h-screen w-full items-center justify-center'>
         <div className='w-[600px] space-y-1.5'>
            <h2 className='w-full text-[21px] text-[#00b14f]'>
               {isRegister
                  ? 'Chào mừng bạn đến với Dev Hiring Portal'
                  : 'Chào mừng bạn quay trở lại'}
            </h2>
            <div className='text-sm text-gray-600'>
               Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng
            </div>
            <div className='w-full pt-4'>
               <Outlet />
            </div>
            <div className='w-full py-3 text-center text-sm font-normal text-gray-500'>
               Hoặc đăng nhập bằng
            </div>
            <div className='flex gap-x-3'>
               <Button variant='primary' className='flex-1 !bg-[#e73b2f] py-2.5'>
                  <div className='h-[16px] w-[16px] fill-white'>
                     <GoogleIcon />
                  </div>
                  Google
               </Button>
               <Button variant='primary' className='flex-1 !bg-[#1877f2] py-2.5'>
                  <FacebookIcon fill='white' size={16} />
                  Facebook
               </Button>
               <Button variant='primary' className='flex-1 !bg-[#0a66c2] py-2.5'>
                  <LinkedinIcon fill='white' size={16} />
                  Linkedin
               </Button>
            </div>
            <div className='w-full py-2 text-center text-sm'>
               {isRegister ? (
                  <>
                     Bạn đã có tài khoản?{' '}
                     <Link to={'/auth/login'} className='font-normal text-[#00b14f]'>
                        Đăng nhập ngay
                     </Link>
                  </>
               ) : (
                  <>
                     Bạn chưa có tài khoản?{' '}
                     <Link to={'/auth/register'} className='font-normal text-[#00b14f]'>
                        Đăng kí ngay
                     </Link>
                  </>
               )}
            </div>
         </div>
      </div>
   )
}
