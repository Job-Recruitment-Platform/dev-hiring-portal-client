import Button from '@/components/button/Button'
import type { JobType } from '@/types/job.type'
import { Heart } from 'lucide-react'

type JobCardProps = {
   job: JobType
}

export default function JobCard({ job }: JobCardProps) {
   return (
      <div className='grid w-full grid-cols-[64px_1fr] gap-x-2 gap-y-1 rounded-xl border border-white bg-white p-3 hover:border-[#00b14f]'>
         <div className='col-span-1 h-[64px] w-[64px] rounded-lg border p-1'>
            <img src={job.avatar} alt={job.company} className='h-full w-full object-cover' />
         </div>
         <div className='col-span-1'>
            <div className='mb-0.5 line-clamp-2 text-[14px] leading-[20px] font-semibold text-black/85 hover:text-[#00b14f]'>
               {job.title}
            </div>
            <div className='line-clamp-1 text-[12px] text-[#6f7882]'>{job.company}</div>
         </div>
         <div className='col-span-2 flex items-center justify-between'>
            <div className='flex items-center gap-x-1'>
               <Button variant='ghost' className='!px-2.5 !py-1 !text-xs'>
                  {job.salary}
               </Button>
               <Button variant='ghost' className='!px-2.5 !py-1 !text-xs'>
                  {job.location}
               </Button>
            </div>
            <Button variant='secondary' className='!rounded-full !p-2'>
               <Heart size={16} className='fill-white text-[#00b14f]' />
            </Button>
         </div>
      </div>
   )
}
