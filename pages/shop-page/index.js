import Footer from '@/Components/Common/Footer/Footer'
import Menubar from '@/Components/Common/Menubar/Menubar'
import ShopPage from '@/Components/ShopPage/ShopPage'
import React from 'react'


const index = () => {
  return (
    <div>
      <Menubar></Menubar>
      <ShopPage></ShopPage>

      <Footer></Footer>
      
      
    </div>
  )
}

export default index