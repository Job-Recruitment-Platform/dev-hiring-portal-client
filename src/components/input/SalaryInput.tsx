import Button from '@/components/button/Button'

type SalaryInputProps = {
   className?: string
}

export default function SalaryInput({ className }: SalaryInputProps) {
   return (
      <div className={`space-y-2.5 ${className}`}>
         <div className='flex items-center gap-x-2 text-sm text-gray-400'>
            <input
               type='number'
               className='w-full flex-1 rounded-full border border-gray-300 px-3 py-1.5 text-sm font-semibold outline-none focus:border-[#01b14f]'
               placeholder='Từ'
            />
            <div className='text-gray-500'>-</div>
            <input
               type='number'
               className='w-full flex-1 rounded-full border border-gray-300 px-3 py-1.5 text-sm font-semibold outline-none focus:border-[#01b14f]'
               placeholder='Đến'
            />
            <div>triệu</div>
         </div>

         <Button variant='primary' className='w-full !text-xs !font-bold'>
            Áp dụng
         </Button>
      </div>
   )
}
