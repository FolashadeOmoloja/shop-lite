import MaxWidthWrapper from '@/components/Elements/MaxWidthWrapper'
import React from 'react'
import Navbar from './Navbar/Navbar'

const Header = () => {
  return (
   <section className='relative h-screen'>
      <div  className='flex h-full  absolute top-0 left-0 right-0'>
         <div  className='basis-1/2 bg-white '></div>
         <div className='basis-1/2 bg-[#417394]'></div>
    </div>
        <MaxWidthWrapper className='relative h-screen z-4'>
             <Navbar/>
       </MaxWidthWrapper>
   </section>
  )
}

export default Header