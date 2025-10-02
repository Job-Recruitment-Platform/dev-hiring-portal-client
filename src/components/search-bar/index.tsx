import Button from '@/components/button/Button'
import { SearchIcon } from 'lucide-react'
import SearchLocation from '../search-location'

export default function SearchBar() {
   return (
      <div className='flex w-[60%] items-center rounded-full bg-white px-3 py-2 !pl-4'>
         <div className='flex-1'>
            <input
               type='text'
               className='w-full text-sm focus:outline-none'
               placeholder='Vị trí tuyển dụng, tên công ty'
            />
         </div>
         <div className='flex items-center gap-x-3'>
            <div className='border-x border-gray-200 px-2'>
               <SearchLocation />
            </div>
            <Button className='flex items-center gap-x-2'>
               <SearchIcon size={16} /> Tìm kiếm
            </Button>
         </div>
      </div>
   )
}
