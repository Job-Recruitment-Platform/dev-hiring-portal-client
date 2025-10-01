import SearchBar from '@/components/search-bar'
import BannerCategory from '@/pages/home/banner/BannerCategory'
import BannerCategoryOption from '@/pages/home/banner/BannerCategoryOption'
import BannerPagination from '@/pages/home/banner/BannerPagination'
import { useState } from 'react'

export default function Banner() {
   const [isDefaultBanner, setIsDefaultBanner] = useState(true)
   const [selectedMajorId] = useState<number | null>(null)

   const handleSelectMajor = (majorId: number) => {
      setIsDefaultBanner(false)
      console.log('Selected major ID:', majorId)
   }

   return (
      <section className='flex w-full flex-col items-center justify-center gap-y-3 bg-[linear-gradient(180deg,#002b33,rgba(0,43,51,0.25)),linear-gradient(90deg,#008060_21.86%,#2bab60_78.13%)] py-5'>
         <div className='text-[1.8rem] font-bold text-[#00b14f]'>
            Tìm việc làm nhanh 24h, việc làm mới nhất trên toàn quốc
         </div>
         <div className='text-white'>
            Tiếp cận 60.000+ tin tuyển dụng việc làm mỗi ngày từ hàng nghìn doanh nghiệp uy tín tại
            Việt Nam
         </div>
         <SearchBar />
         <div className='mt-3.5 grid w-[60%] grid-cols-4 grid-rows-[273px] gap-x-3'>
            <div className='col-span-1 rounded-lg bg-white'>
               <div className='grid h-full w-full grid-rows-7'>
                  <div className='row-span-6 p-3.5' onMouseLeave={() => setIsDefaultBanner(true)}>
                     <BannerCategory onSelect={handleSelectMajor} />
                  </div>
                  <div className='row-span-1 flex items-center border-t p-3.5'>
                     <BannerPagination />
                  </div>
               </div>
            </div>
            <div className='col-span-3 rounded-lg'>
               {isDefaultBanner ? (
                  <img
                     src='https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/banners/mNogRkat8Zt1Kh8wajV4.jpg'
                     alt='banner'
                     className='h-full w-full rounded-lg object-cover'
                  />
               ) : (
                  <BannerCategoryOption categoryOptions={selectedMajorId} />
               )}
            </div>
         </div>
      </section>
   )
}
