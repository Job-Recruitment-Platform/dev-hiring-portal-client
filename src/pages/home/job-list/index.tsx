import JobCard from '@/pages/home/job-list/JobCard'
import type { JobType } from '@/types/job.type'

type JobListProps = {
   joblist: JobType[]
   className?: string
}

export default function JobList({ joblist, className }: JobListProps) {
   return (
      <div className={`grid w-full grid-cols-3 gap-3 ${className}`}>
         {joblist.map((job) => (
            <div key={job.id} className='col-span-1'> 
               <JobCard job={job} />
            </div>
         ))}
      </div>
   )
}
