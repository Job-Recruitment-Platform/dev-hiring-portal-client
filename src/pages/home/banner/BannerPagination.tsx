import Button from '@/components/button/Button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function BannerPagination() {
   return (
      <div className='flex w-full items-center justify-between'>
         <div className='text-sm font-semibold text-gray-500/80'>1/5</div>
         <div className='flex items-center gap-x-1'>
            <Button variant='secondary' className='!p-1'>
               <ChevronLeft size={16} />
            </Button>
            <Button variant='secondary' className='!p-1'>
               <ChevronRight size={16} />
            </Button>
         </div>
      </div>
   )
}
