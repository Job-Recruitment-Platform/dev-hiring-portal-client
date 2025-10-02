import { Search } from 'lucide-react'

export default function SearchBar() {
   return (
      <div className='flex w-full items-center gap-x-3 rounded-full border border-[#01b14f] px-5 py-2'>
         <Search size={16} className='text-gray-500' />
         <input
            type='text'
            className='w-full flex-1 text-sm outline-none focus:outline-none'
            placeholder='Nhập Tỉnh/Thành phố'
         />
      </div>
   )
}
