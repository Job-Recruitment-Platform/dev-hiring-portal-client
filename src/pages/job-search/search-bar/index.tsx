import SearchInput from '@/components/input/SearchInput'
import JobCategory from '@/components/job-category'
import SearchLocation from '@/components/search-location'

type SearchBarProps = {
   className?: string
}

export default function SearchBar({ className }: SearchBarProps) {
   return (
      <section className={`flex justify-center bg-[#19734e] px-2 py-2 ${className}`}>
         <div className='grid w-[1170px] grid-cols-13 px-1'>
            <div className='col-span-2'>
               <JobCategory />
            </div>
            <div className='col-span-9 flex bg-white'>
               <SearchInput searchBarClassName='flex-1' />
               <SearchLocation className='flex-1' />
            </div>
            <div className='col-span-2'></div>
         </div>
      </section>
   )
}
