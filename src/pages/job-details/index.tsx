import JobCompanyInfo from '@/pages/job-details/job-company-info'
import JobInfo from '@/pages/job-details/job-info'
import type { JobDetailType } from '@/types/job.type'
import { mockJobDetail } from '@/utils/data'

export default function JobDetailPage() {
   const jobDetail: JobDetailType = {
      ...mockJobDetail,
      jobInfo: {
         ...mockJobDetail.jobInfo,
         deadline: new Date(mockJobDetail.jobInfo.deadline)
      }
   }

   return (
      <div className='flex w-full justify-center bg-[#f4f5f5]'>
         <div className='grid w-[1140px] grid-cols-3 gap-x-6'>
            <div className='col-span-2'>
               <JobInfo jobInfo={jobDetail.jobInfo} />
            </div>
            <div className='col-span-1 space-y-6'>
               <JobCompanyInfo companyInfo={jobDetail.companyInfo} />
            </div>
         </div>
      </div>
   )
}
