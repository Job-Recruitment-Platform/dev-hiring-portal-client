import JobCommonInfo from '@/pages/job-details/job-common-info'
import JobCompanyInfo from '@/pages/job-details/job-company-info'
import JobDetailInfo from '@/pages/job-details/job-detail-info'
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
      <div className='flex w-full pt-6 justify-center bg-[#f4f5f5]'>
         <div className='grid w-[1140px] grid-cols-3 gap-x-6'>
            <div className='col-span-2 space-y-6'>
               <JobInfo jobInfo={jobDetail.jobInfo} />
               <JobDetailInfo jobDescription={jobDetail.jobDescription} />
            </div>
            <div className='col-span-1 space-y-6'>
               <JobCompanyInfo companyInfo={jobDetail.companyInfo} />
               <JobCommonInfo jobCommonInfo={jobDetail.jobCommonInfo} />
            </div>
         </div>
      </div>
   )
}
