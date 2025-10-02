import JobFilterBar from '@/pages/job-search/job-filter-bar'
import JobList from '@/pages/job-search/job-list'
import MiniSearchBar from '@/pages/job-search/mini-search-bar'
import SearchBar from '@/pages/job-search/search-bar'
import { mockJobList } from '@/utils/data'

export default function JobSearch() {
   return (
      <>
         <SearchBar />
         <div className='flex w-full justify-center bg-[#f3f5f7] pt-5'>
            <div className='grid w-[1170px] grid-cols-11 gap-x-7'>
               <div className='col-span-3'>
                  <JobFilterBar />
               </div>
               <div className='col-span-8'>
                  <MiniSearchBar />
                  <JobList jobs={mockJobList} />
               </div>
            </div>
         </div>
      </>
   )
}
