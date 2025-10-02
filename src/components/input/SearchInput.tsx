import { SearchIcon } from 'lucide-react'

type SearchInputProps = {
   searchBarClassName?: string
   inputSearchClassName?: string
   placeholder?: string
}

export default function SearchInput({
   searchBarClassName,
   inputSearchClassName,
   placeholder
}: SearchInputProps) {
   return (
      <div className={`flex w-full items-center px-3 py-1 ${searchBarClassName}`}>
         <SearchIcon size={16} className='mr-2 text-gray-400' />
         <input
            type='text'
            className={`text-sm ${inputSearchClassName} w-full focus:outline-none`}
            placeholder={placeholder}
         />
      </div>
   )
}
