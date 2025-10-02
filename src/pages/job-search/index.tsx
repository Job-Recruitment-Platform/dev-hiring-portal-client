import JobFilterBar from '@/pages/job-search/job-filter-bar'
import MiniSearchBar from '@/pages/job-search/mini-search-bar'
import SearchBar from '@/pages/job-search/search-bar'

export default function JobSearch() {
   return (
      <>
         <SearchBar />
         <div className='flex w-full justify-center'>
            <div className='grid w-[1170px] grid-cols-11 gap-x-1'>
               <div className='col-span-3 border'>
                  <JobFilterBar />
               </div>
               <div className='col-span-8'>
                  <MiniSearchBar />
               </div>
            </div>
         </div>
      </>
   )
}
