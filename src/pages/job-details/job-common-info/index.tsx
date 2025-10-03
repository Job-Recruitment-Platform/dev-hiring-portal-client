import BasicInfoBox from '@/pages/job-details/job-info/BasicInfoBox'
import type { JobCommonInfoType } from '@/types/job.type'
import { BriefcaseBusinessIcon, CircleStarIcon, GraduationCapIcon, UsersIcon } from 'lucide-react'

type JobCommonInfoProps = {
   jobCommonInfo: JobCommonInfoType
}

export default function JobCommonInfo({ jobCommonInfo }: JobCommonInfoProps) {
   return (
      <div className='w-full space-y-4 rounded-lg bg-white px-6 py-5'>
         <div className='text-[20px] font-bold'>Thông tin chung</div>
         <BasicInfoBox label='Cấp bậc' value={jobCommonInfo.level} icon={CircleStarIcon} />
         <BasicInfoBox label='Trình độ' value={jobCommonInfo.education} icon={GraduationCapIcon} />
         <BasicInfoBox
            label='Số lượng tuyển'
            value={jobCommonInfo.numberOfRecruit.toString() + ' người'}
            icon={UsersIcon}
         />
         <BasicInfoBox
            label='Hình thức làm việc'
            value={jobCommonInfo.employmentType}
            icon={BriefcaseBusinessIcon}
         />
      </div>
   )
}
