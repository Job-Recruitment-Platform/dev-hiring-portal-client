import { mockMajorList } from '@/utils/data'
import { ChevronRight } from 'lucide-react'

type BannerCategoryProps = {
   onSelect: (majorId: number) => void
}

export default function BannerCategory({ onSelect }: BannerCategoryProps) {
   return (
      <div className='h-full w-full'>
         {mockMajorList.map((major) => (
            <div
               key={major.id}
               className='flex cursor-pointer py-1.5 font-semibold hover:text-[#00b14f]'
               onMouseEnter={() => onSelect(major.id)}
            >
               <div className='flex-1'>{major.name}</div>
               <ChevronRight />
            </div>
         ))}
      </div>
   )
}
