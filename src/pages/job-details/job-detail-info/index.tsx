import Button from '@/components/button/Button'
import type { JobDescriptionType } from '@/types/job.type'
import { BellIcon, InfoIcon } from 'lucide-react'

type JobDetailInfoProps = {
   jobDescription: JobDescriptionType
}

export default function JobDetailInfo({ jobDescription }: JobDetailInfoProps) {
   return (
      <div className='w-full space-y-4 rounded-lg bg-white px-6 py-5'>
         <div className='flex items-center justify-between'>
            <div className='border-l-7 border-[#00b14f] pl-3 text-[20px] font-bold text-black/80'>
               Chi tiết tuyển dụng
            </div>
            <Button variant='outline'>
               <BellIcon size={16} strokeWidth={2} color='#00b14f' />
               <div>Gửi tôi việc làm tương tự</div>
            </Button>
         </div>
         <div>
            <div className='mb-1 text-[17px] font-semibold text-black/80'>Mô tả công việc</div>
            <p>{jobDescription.description}</p>
         </div>
         <div>
            <div className='mb-1 text-[17px] font-semibold text-black/80'>Yêu cầu ứng viên</div>
            <p>{jobDescription.requirement}</p>
         </div>
         <div>
            <div className='mb-1 text-[17px] font-semibold text-black/80'>Quyền lợi</div>
            <p>{jobDescription.benefit}</p>
         </div>
         <div>
            <div className='mb-1 text-[17px] font-semibold text-black/80'>Địa điểm làm việc</div>
            <p>{jobDescription.address}</p>
         </div>
         <div>
            <div className='mb-1 text-[17px] font-semibold text-black/80'>Thời gian làm việc</div>
            <p>{jobDescription.workingTime}</p>
         </div>
         <div className='flex items-baseline rounded bg-gray-100 p-2 text-[14px] text-gray-900'>
            <span className='mr-1.5'>
               <InfoIcon size={14} color='white' fill='#00b14f' />
            </span>
            <span>
               Báo cáo tin tuyển dụng: Nếu bạn thấy rằng tin tuyển dụng này không đúng hoặc có dấu
               hiệu lừa <br /> đảo,{' '}
               <a className='font-normal text-[#00b14f]'>hãy phản ánh với chúng tôi.</a>
            </span>
         </div>
      </div>
   )
}
