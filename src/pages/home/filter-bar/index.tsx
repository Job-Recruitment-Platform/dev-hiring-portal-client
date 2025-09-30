import Button from '@/components/button/Button'
import { ChevronDown, ListFilter } from 'lucide-react'
import { useState } from 'react'

const FILTER_OPTIONS = [
   { label: 'Địa điểm', value: 'location' },
   { label: 'Mức lương', value: 'salary' },
   { label: 'Kinh nghiệm', value: 'experience' },
   { label: 'Ngành nghề', value: 'industry' }
]

const LOCATION_OPTIONS = [
   { label: 'Ngẫu Nhiên', value: 'random' },
   { label: 'Hồ Chí Minh', value: 'hcm' },
   { label: 'Hà Nội', value: 'hn' },
   { label: 'Miền Bắc', value: 'dn' },
   { label: 'Miền Nam', value: 'ct' }
]

export default function FilterBar() {
   const [filterBy, setFilterBy] = useState<{ label: string; value: string }>(FILTER_OPTIONS[0])

   return (
      <div className='flex w-full items-center justify-between'>
         <div className='flex w-[16rem] items-center rounded-md border bg-white p-2.5'>
            <div className='flex items-center gap-x-2 text-sm font-semibold text-[#a6acb2]'>
               <ListFilter size={16} /> Lọc theo:
            </div>
            <div className='flex-1 text-center text-sm'>{filterBy.label}</div>
            <div>
               <ChevronDown size={16} />
            </div>
         </div>
         <div>
            {LOCATION_OPTIONS.map((option) => (
               <Button key={option.value}>{option.label}</Button>
            ))}
         </div>
      </div>
   )
}
