import BaseLayout from '@/layouts/BaseLayout'
import SearchLayout from '@/layouts/SearchLayout'
import Home from '@/pages/home'
import JobDetailPage from '@/pages/job-details'
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
            path: 'search',
            index: true,
            element: <JobSearch />
         },
         {
            path: 'jobs',
            index: true,
            element: <JobDetailPage />
         }
      ]
   },
   {
      path: 'jobs',
      element: <SearchLayout />,
      children: [
         {
            path: 'search',
            index: true,
            element: <JobSearch />
         },
         {
            path: 'detail',
            index: true,
            element: <JobDetailPage />
         }
      ]
   }
])

export default router
