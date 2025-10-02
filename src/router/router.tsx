import BaseLayout from '@/layouts/BaseLayout'
import Home from '@/pages/home'
import JobSearch from '@/pages/job-search'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
   {
      path: '/',
      element: <BaseLayout />,
      children: [
         {
            index: true,
            element: <Home />
         },
         {
            path: 'job-search',
            index: true,
            element: <JobSearch />
         }
      ]
   }
])

export default router
