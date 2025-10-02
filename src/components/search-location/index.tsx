import Button from '@/components/button/Button'
import LocationSelection from '@/components/search-location/LocationSelection'
import { ChevronDown, MapPin } from 'lucide-react'

type SearchLocationProps = {
   className?: string
}

export default function SearchLocation({ className }: SearchLocationProps) {
   return (
      <LocationSelection className='!mt-3 rounded-2xl !py-2'>
         <Button variant='ghost' className={`!text-black/80 ${className}`}>
            <div className='flex items-center gap-x-1'>
               <MapPin size={16} />
               <span className='text-sm'>Địa điểm</span>
            </div>
            <ChevronDown size={16} className='ml-[10rem]' />
         </Button>
      </LocationSelection>
   )
}
