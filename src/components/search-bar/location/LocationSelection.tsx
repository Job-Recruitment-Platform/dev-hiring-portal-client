import { Popover, PopoverContent } from '@/components/ui/popover'
import { PopoverTrigger } from '@radix-ui/react-popover'

type LocationSelectionProps = {
   children?: React.ReactNode
   className?: string
}

export default function LocationSelection({ children, className }: LocationSelectionProps) {
   return (
      <Popover>
         <PopoverTrigger>{children}</PopoverTrigger>
         <PopoverContent className={`${className}`}>
            <div className=''></div>
         </PopoverContent>
      </Popover>
   )
}
