import Button from '@/components/button/Button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type BannerPaginationProps = {
   currentPage?: number
   totalPages?: number
   hasNext?: boolean
   hasPrev?: boolean
   onNext?: () => void
   onPrev?: () => void
}

export default function BannerPagination({
   currentPage,
   totalPages,
   onNext,
   onPrev,
   hasNext,
   hasPrev
}: BannerPaginationProps) {
   return (
      <div className='flex w-full items-center justify-between'>
         <div className='text-sm font-semibold text-gray-500/80'>
            {currentPage}/{totalPages}
         </div>
         <div className='flex items-center gap-x-1'>
            <Button variant='secondary' className='!p-1' onClick={onPrev} disabled={!hasPrev}>
               <ChevronLeft size={16} />
            </Button>
            <Button variant='secondary' className='!p-1' onClick={onNext} disabled={!hasNext}>
               <ChevronRight size={16} />
            </Button>
         </div>
      </div>
   )
}
