import type { MajorType } from '@/types/job.type'
import { ChevronRight } from 'lucide-react'

type BannerCategoryProps = {
   categories: MajorType[]
   onSelect: (majorId: number) => void
}

export default function BannerCategory({ onSelect, categories }: BannerCategoryProps) {
   return (
      <div className='h-full w-full'>
         {categories.map((major) => (
            <div
               key={major.id}
               className='flex cursor-pointer py-2 text-sm font-semibold hover:text-[#00b14f]'
               onMouseEnter={() => onSelect(major.id)}
            >
               <div className='flex-1'>{major.name}</div>
               <ChevronRight />
            </div>
         ))}
      </div>
   )
}
