import Button from '@/components/button/Button'

export default function Header() {
   return (
      <header className='flex items-center justify-between py-5'>
         <div>
            <button>Việc làm 1</button>
            <button>Cẩm nang nghề nghiệp</button>
         </div>
         <div className='flex items-center'>
            <Button>Đăng ký</Button>
            <Button>Đăng nhập</Button>
            <Button>Đăng tuyển & tìm hồ sơ</Button>
         </div>
      </header>
   )
}
