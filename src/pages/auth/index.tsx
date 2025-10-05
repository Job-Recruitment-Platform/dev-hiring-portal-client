import Button from '@/components/button/Button'
import { Outlet } from 'react-router-dom'

export default function Auth() {
   return (
      <div className='flex h-screen w-full justify-center p-30'>
         <div className='w-[600px] space-y-1.5'>
            <h2 className='w-full text-[21px] text-[#00b14f]'>Chào mừng bạn đã quay trở lại</h2>
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
            <div className='w-full py-2 text-center text-sm'>
               Bạn chưa có tài khoản? <a className='font-normal text-[#00b14f]'>Đăng kí ngay</a>
            </div>
         </div>   
      </div>
   )
}
