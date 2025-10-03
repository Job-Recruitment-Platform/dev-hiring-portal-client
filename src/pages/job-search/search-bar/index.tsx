import Button from '@/components/button/Button'
import SearchInput from '@/components/input/SearchInput'
import JobCategory from '@/components/job-category'
import SearchLocation from '@/components/search-location'

type SearchBarProps = {
   className?: string
}

export default function SearchBar({ className }: SearchBarProps) {
   return (
      <section className={`flex justify-center bg-[#19734e] py-4.5 ${className}`}>
         <div className='grid w-[1170px] grid-cols-16 gap-x-2 px-1'>
            <div className='col-span-14 flex items-center rounded-md bg-white py-1'>
               <JobCategory />
               <SearchInput searchBarClassName='flex-1 border-x' placeholder='Vị trí tuyển dụng' />
               <SearchLocation />
            </div>
            <div className='col-span-2 flex'>
               <Button variant='primary' className='w-full !rounded-md !py-1 !text-sm !font-bold'>
                  Tìm kiếm
               </Button>
            </div>
         </div>
      </section>
   )
}
