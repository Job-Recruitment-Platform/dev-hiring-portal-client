import Button from '@/components/button/Button'
import type { JobType } from '@/types/job.type'
import { ChevronsRightIcon, EyeOffIcon, HeartIcon } from 'lucide-react'

type JobCardSearchResultProps = {
   job: JobType
}

export default function JobCardSearchResult({ job }: JobCardSearchResultProps) {
   return (
      <div className='group relative mb-3 grid h-[171px] w-full grid-cols-[120px_1fr_135px] gap-x-3 rounded-lg border border-white bg-white p-3 hover:border-[#00b14f]'>
         <div className='col-start-1 h-[120px] w-[120px] rounded-lg border p-1'>
            <img
               src={job.avatar}
               alt={job.company}
               className='h-full w-full rounded-lg object-cover'
            />
         </div>
         <div className='col-start-2 flex flex-col gap-y-3'>
            <div className='row-start-1 line-clamp-2 max-w-[519px] text-[15px] font-semibold text-wrap text-black/90'>
               {job.title}
            </div>
            <div className='row-start-2 text-[13px] font-semibold text-gray-500/90 uppercase'>
               {job.company}
            </div>
            <div className='row-start-3 flex items-center gap-x-1'>
               <Button variant='ghost' className='!py-1.5 !text-xs !text-[#333]'>
                  {job.location}
               </Button>
               <Button variant='ghost' className='!py-1.5 !text-xs !text-[#333]'>
                  {job.location}
               </Button>
            </div>
         </div>
         <div className='col-start-3 row-start-1 flex justify-end text-[14px] font-bold text-[#00b14f]'>
            {job.salary}
         </div>
         <div className='col-span-2 col-start-2 flex justify-end'>
            <div className='flex items-center gap-x-2'>
               <div className='hidden items-center gap-x-2 group-hover:flex'>
                  <Button variant='primary' className='!py-1.5 !text-[14px]'>
                     Ứng tuyển
                  </Button>
                  <Button
                     variant='ghost'
                     className='border border-gray-400/70 !bg-transparent !p-2'
                  >
                     <EyeOffIcon size={17} className='text-gray-400' />
                  </Button>
               </div>
               <Button variant='secondary' className='!p-2'>
                  <HeartIcon size={16} className='' />
               </Button>
            </div>
         </div>

         <button className='absolute top-1/2 right-3 hidden -translate-y-1/2 items-center gap-x-2 rounded-full bg-green-100 px-3 py-1.5 text-[14px] font-semibold text-[#00b14f] group-hover:flex'>
            <div>Xem nhanh</div>
            <ChevronsRightIcon size={16} />
         </button>
      </div>
   )
}
