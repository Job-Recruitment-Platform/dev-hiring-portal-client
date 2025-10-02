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
      <div className={`w-full border border-[#0016] px-2 py-1.5 ${searchBarClassName}`}>
         <input
            type='text'
            className={`text-sm ${inputSearchClassName}`}
            placeholder={placeholder}
         />
      </div>
   )
}
