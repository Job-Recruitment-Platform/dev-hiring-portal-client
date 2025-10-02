import JobFilter from '@/pages/job-search/mini-search-bar/JobFilter'
import ShowPriority from '@/pages/job-search/mini-search-bar/ShowPriority'
import type { OptionType } from '@/types/common.type'

const JOB_FILTER_OPTIONS: OptionType[] = [
   { label: 'Tên việc làm', value: 'jobTitle' },
   { label: 'Tên công ty', value: 'companyName' },
   { label: 'Cả hai', value: 'both' }
]

const SHOW_PRIORITY_OPTIONS: OptionType[] = [
   { label: 'Mới nhất', value: 'newest' },
   { label: 'Lương cao', value: 'highSalary' },
   { label: 'Lương thấp', value: 'lowSalary' }
]

export default function MiniSearchBar() {
   return (
      <div className='flex items-center gap-x-3 p-2 !text-[14px]'>
         <div className='flex items-center'>
            <div className='pr-2 font-semibold text-black/70'>Tìm kiếm theo: </div>
            <JobFilter options={JOB_FILTER_OPTIONS} />
         </div>
         <div className='flex items-center gap-x-2 border-l border-gray-200 pl-2'>
            <div className='font-semibold text-black/80'>Ưu tiên hiển thị theo:</div>
            <ShowPriority options={SHOW_PRIORITY_OPTIONS} />
         </div>
      </div>
   )
}
