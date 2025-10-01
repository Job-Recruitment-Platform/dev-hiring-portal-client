import Button from '@/components/button/Button'

export default function Header() {
   return (
      <header className='flex items-center justify-between px-10 py-5'>
         <div className='flex items-center gap-x-3 font-semibold'>
            <button className='hover:text-[#00b14f]'>Việc làm</button>
            <button className='hover:text-[#00b14f]'>Cẩm nang nghề nghiệp</button>
         </div>
         <div className='flex items-center gap-x-2'>
            <Button variant='secondary'>Đăng ký</Button>
            <Button variant='primary'>Đăng nhập</Button>
            <Button variant='ghost'>Đăng tuyển & tìm hồ sơ</Button>
         </div>
      </header>
   )
}
