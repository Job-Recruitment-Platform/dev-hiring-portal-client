import BaseLayout from '@/layouts/BaseLayout'
import SearchLayout from '@/layouts/SearchLayout'
import Auth from '@/pages/auth'
import Login from '@/pages/auth/login'
import RecruitRegister from '@/pages/auth/recruit-register'
import Register from '@/pages/auth/register'
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
   },
   {
      path: '/auth',
      element: <Auth />,
      children: [
         {
            path: 'login',
            index: true,
            element: <Login />
         },
         {
            path: 'register',
            index: true,
            element: <Register />
         },
         {
            path: 'recruit-register',
            index: true,
            element: <RecruitRegister />
         }
      ]
   },
   {}
])

export default router
