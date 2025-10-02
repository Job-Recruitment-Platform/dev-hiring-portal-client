import { FilterIcon } from 'lucide-react'

export default function JobFilterBar() {
   return (
      <div className='w-full'>
         <div className='flex w-full items-center gap-x-2 p-2'>
            <FilterIcon size={17} className='fill-[#00b14f] text-[#00b14f]' />
            <span className='text-lg font-bold text-black/70'>Lọc nâng cao</span>
         </div>
         <div className='max-h-[2/3vh]'>
         </div>
      </div>
   )
}
