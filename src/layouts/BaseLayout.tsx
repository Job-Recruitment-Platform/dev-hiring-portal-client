import Footer from '@/layouts/Footer'
import Header from '@/layouts/Header'
import { Outlet } from 'react-router-dom'

export default function BaseLayout() {
   return (
      <>
         <Header />
         <main className='w-full'>
            <Outlet />
         </main>
         <Footer />
      </>
   )
}
