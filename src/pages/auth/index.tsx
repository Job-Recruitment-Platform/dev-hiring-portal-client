import { SocialLoginButtons } from '@/components/auth/SocialLoginButtons'
import { PrimaryLink } from '@/components/common'
import clsx from 'clsx'
import { Outlet, useLocation } from 'react-router-dom'

export default function Auth() {
   const location = useLocation()
   const currentPath = location.pathname.split('/').pop()
   const isRegister = currentPath === 'register'

   return (
      <div className='flex h-screen w-full items-center justify-center'>
         <div
            className={clsx('w-[630px] space-y-1.5 rounded-md border p-10', {
               'w-[800px]': currentPath !== 'login' && currentPath !== 'register'
            })}
         >
            <h2 className='text-primary-green w-full text-[21px]'>
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
            <SocialLoginButtons />
            <div className='w-full py-2 text-center text-sm'>
               {isRegister ? (
                  <>
                     Bạn đã có tài khoản?{' '}
                     <PrimaryLink to={'/auth/login'} className='font-normal'>
                        Đăng nhập ngay
                     </PrimaryLink>
                  </>
               ) : (
                  <>
                     Bạn chưa có tài khoản?{' '}
                     <PrimaryLink to={'/auth/register'} className='font-normal'>
                        Đăng kí ngay
                     </PrimaryLink>
                  </>
               )}
            </div>
         </div>
      </div>
   )
}
