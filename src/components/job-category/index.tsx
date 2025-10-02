import { ChevronDown, List } from 'lucide-react'

export default function JobCategory() {
   return (
      <div className='flex items-center gap-x-3 rounded bg-white p-2 text-sm font-semibold'>
         <List size={16} />
         <span>Danh mục Nghề</span>
         <ChevronDown size={15} />
      </div>
   )
}
