import Button from '@/components/button/Button'
import { SearchIcon } from 'lucide-react'
import Location from './Location'

export default function SearchBar() {
   return (
      <div className='flex w-[60%] items-center rounded-full bg-white p-3 !pl-4'>
         <div className='flex-1'>
            <input
               type='text'
               className='w-full focus:outline-none'
               placeholder='Vị trí tuyển dụng, tên công ty'
            />
         </div>
         <div className='flex items-center gap-x-3'>
            <div className='border-x border-gray-200 px-2'>
               <Location />
            </div>
            <Button className='flex items-center gap-x-2'>
               <SearchIcon /> Tìm kiếm
            </Button>
         </div>
      </div>
   )
}
