import SalaryInput from '@/components/input/SalaryInput'
import BasicFilterOption from '@/pages/job-search/job-filter-bar/BasicFilterOption'
import { mockExperienceOptions } from '@/utils/data'
import { FilterIcon } from 'lucide-react'

export default function JobFilterBar() {
   return (
      <div className='w-full'>
         <div className='flex w-full items-center gap-x-2'>
            <FilterIcon size={17} className='fill-[#00b14f] text-[#00b14f]' />
            <span className='text-lg font-bold text-black/70 py-2'>Lọc nâng cao</span>
         </div>
         <div className='max-h-[2/3vh]'>
            <BasicFilterOption
               label='Kinh nghiệm'
               columns={2}
               options={mockExperienceOptions}
               className='border-y border-dashed py-2.5'
            />
            <BasicFilterOption
               label='Kinh nghiệm'
               columns={2}
               options={mockExperienceOptions}
               className='py-2.5'
            />
            <BasicFilterOption
               label='Kinh nghiệm'
               columns={2}
               options={mockExperienceOptions}
               className='border-y border-dashed py-2.5'
            />
            <SalaryInput className='py-2.5'/>
         </div>
      </div>
   )
}
