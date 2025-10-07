import Button from '@/components/button/Button'
import { GoogleIcon } from '@/components/icon'
import { FacebookIcon, LinkedinIcon } from 'lucide-react'

export const SocialLoginButtons = () => {
   return (
      <>
         <div className='w-full py-3 text-center text-sm font-normal text-gray-500'>
            Hoặc đăng nhập bằng
         </div>
         <div className='flex gap-x-3'>
            <Button variant='primary' className='!bg-google-red flex-1 py-2.5'>
               <div className='h-[16px] w-[16px] fill-white'>
                  <GoogleIcon />
               </div>
               Google
            </Button>
            <Button variant='primary' className='!bg-facebook-blue flex-1 py-2.5'>
               <FacebookIcon fill='white' size={16} />
               Facebook
            </Button>
            <Button variant='primary' className='!bg-linkedin-blue flex-1 py-2.5'>
               <LinkedinIcon fill='white' size={16} />
               Linkedin
            </Button>
         </div>
      </>
   )
}
