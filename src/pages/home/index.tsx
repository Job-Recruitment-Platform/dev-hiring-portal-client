import FilterBar from '@/pages/home/filter-bar'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Banner from './banner'

export default function Home() {
   return (
      <div>
         <Banner />
         <div className='flex w-full justify-center bg-[#f3f5f7] py-4'>
            <div className='w-[60%]'>
               {/*  Recommend Title  */}
               <div className='flex items-center justify-between py-2'>
                  <div className='flex items-center gap-x-3'>
                     <div className='!text-[24px] font-bold text-[#00b14f]'>Việc làm tốt nhất</div>
                     <div className='h-[1.5rem] w-[1px] bg-gray-300'></div>
                     <img
                        src='https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/welcome/feature-job/label-toppy-ai.png'
                        alt=''
                        className='h-[26px] w-[110px] object-cover'
                     />
                  </div>
                  <div className='flex items-center'>
                     <div className='px-3 text-sm underline'>Xem tất cả</div>
                     <div className='flex items-center gap-x-2'>
                        <span className='rounded-full border border-[#00b14f] p-1 text-[#00b14f]'>
                           <ChevronLeft />
                        </span>
                        <span className='rounded-full border border-[#00b14f] p-1 text-[#00b14f]'>
                           <ChevronRight />
                        </span>
                     </div>
                  </div>
               </div>
               {/*  FilterBar  */}
               <FilterBar />
            </div>
         </div>
      </div>
   )
}
