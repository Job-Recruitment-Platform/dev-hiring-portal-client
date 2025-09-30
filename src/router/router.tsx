import BaseLayout from '@/layouts/BaseLayout'
import Home from '@/pages/home'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
   {
      path: '/',
      element: <BaseLayout />,
      children: [
         {
            index: true,
            element: <Home />
         }
      ]
   }
])

export default router
