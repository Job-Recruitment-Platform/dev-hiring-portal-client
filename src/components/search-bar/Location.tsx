import Button from '@/components/button/Button'
import { MapPin } from 'lucide-react'

export default function Location() {
   return (
      <Button className='flex w-full items-center'>
         <div className='flex items-center gap-x-1'>
            <MapPin size={16} />
            Địa điểm
         </div>
      </Button>
   )
}
