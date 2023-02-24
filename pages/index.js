import React from 'react'
import Menubar from '@/Components/Common/Menubar/Menubar'
import Footer from '@/Components/Common/Footer/Footer'
import HomePage from '@/Components/HomePage/HomePage'


export default function Home() {
  return (
    <>

      <div>

            <Menubar></Menubar>
            <HomePage></HomePage>
            <Footer></Footer>

      </div>

    </>
  )
}
