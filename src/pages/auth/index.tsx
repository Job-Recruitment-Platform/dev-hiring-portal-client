import { Outlet } from 'react-router-dom'

export default function Auth() {
   return (
      <div className='flex h-full w-full items-center justify-center'>
         <div className='w-[600px]'>
            <h2 className='w-full text-[20px]'>Chào mừng bạn đã quay trở lại</h2>
            <div>Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng</div>
            <div className='w-full'>
               <Outlet />
            </div>
         </div>
      </div>
   )
}
