import JobCardSearchResult from '@/pages/job-search/job-list/JobCardSearchResult'
import type { JobType } from '@/types/job.type'

type JobListProps = {
   jobs: JobType[]
}

export default function JobList({ jobs }: JobListProps) {
   return (
      <div className='w-ful space-y-3'>
         {jobs.map((job) => (
            <JobCardSearchResult key={job.id} job={job} />
         ))}
      </div>
   )
}
