import SearchBar from '@/components/search-bar/location/SearchBar'
import SearchItem from '@/components/search-bar/location/SearchItem'
import { Popover, PopoverContent } from '@/components/ui/popover'
import { mockProvinces } from '@/utils/data'
import { PopoverTrigger } from '@radix-ui/react-popover'

type LocationSelectionProps = {
   children?: React.ReactNode
   className?: string
}

export default function LocationSelection({ children, className }: LocationSelectionProps) {
   return (
      <Popover>
         <PopoverTrigger>{children}</PopoverTrigger>
         <PopoverContent className={`${className} !h-fit !w-fit`}>
            <div className='grid grid-cols-[335px_264px] grid-rows-[auto_297px_auto] gap-0'>
               {/* Row 1 - Col 1 */}
               <div className='col-start-1 row-start-1 border-r pr-2'>
                  <div className='w-full'>
                     <SearchBar />
                  </div>
               </div>

               {/* Row 1 - Col 2 */}
               <div className='col-start-2 row-start-1 p-2'>
                  <div className='text-[15px] font-semibold text-gray-500'>QUẬN/HUYỆN</div>
               </div>

               {/* Row 2 - Col 1 */}
               <div className='col-start-1 row-start-2 border-r'>
                  <div className='scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400 h-full min-h-0 space-y-1 overflow-y-auto px-1 py-5'>
                     {mockProvinces.map((item) => (
                        <SearchItem key={item.value} type='province' name={item.label} />
                     ))}
                  </div>
               </div>

               {/* Row 2 - Col 2 */}
               <div className='col-start-2 row-start-2 p-2'></div>

               {/* Row 3 - Col 1..2 */}
               <div className='col-span-2 row-start-3'></div>
            </div>
         </PopoverContent>
      </Popover>
   )
}
