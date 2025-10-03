import SearchBar from '@/pages/job-search/search-bar'
import Footer from '@/layouts/Footer'
import Header from '@/layouts/Header'
import { Outlet } from 'react-router-dom'

export default function SearchLayout() {
   return (
      <>
         <Header />
         <SearchBar />
         <main className='w-full'>
            <Outlet />
         </main>
         <Footer />
      </>
   )
}
