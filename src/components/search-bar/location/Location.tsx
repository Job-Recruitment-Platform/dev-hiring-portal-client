import Button from '@/components/button/Button'
import LocationSelection from '@/components/search-bar/location/LocationSelection'
import { ChevronDown, MapPin } from 'lucide-react'

export default function Location() {
   return (
      <LocationSelection className='!mt-3 !py-2 rounded-2xl'>
         <Button variant='ghost' className='!text-black/80'>
            <div className='flex items-center gap-x-1'>
               <MapPin size={16} />
               <span className='text-sm'>Địa điểm</span>
            </div>
            <ChevronDown size={16} className='ml-[10rem]' />
         </Button>
      </LocationSelection>
   )
}
