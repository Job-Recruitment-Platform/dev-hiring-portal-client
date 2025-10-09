import Button from '@/components/button/Button'
import { useNavigate } from 'react-router-dom'

export default function Header() {
   const navigate = useNavigate()

   return (
      <header className='flex items-center justify-between px-10 py-5'>
         <div className='flex items-center gap-x-3 font-semibold'>
            <button className='hover:text-primary-green'>Việc làm</button>
            <button className='hover:text-primary-green'>Cẩm nang nghề nghiệp</button>
         </div>
         <div className='flex items-center gap-x-3'>
            <Button
               variant='secondary'
               className='rounded-full px-4'
               onClick={() => navigate('/auth/register')}
            >
               Đăng ký
            </Button>
            <Button
               variant='primary'
               className='rounded-full !px-4'
               onClick={() => navigate('/auth/login')}
            >
               Đăng nhập
            </Button>
            <Button variant='ghost' className='rounded-full !px-4'>
               Đăng tuyển & tìm hồ sơ
            </Button>
         </div>
      </header>
   )
}
