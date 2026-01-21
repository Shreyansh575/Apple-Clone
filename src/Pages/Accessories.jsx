import React from 'react'
import Accenav from '../Components/Accessories/Accenav'
import Matchacce from '../Components/Accessories/Matchacce'
import Accessoriesitem from '../Components/Accessories/Accessoriesitem'
import Iphoneacce from '../Components/Accessories/Iphoneacce'
import Ipadacce from '../Components/Accessories/Ipadacce'
import Moretoexplore from '../Components/Accessories/Moretoexplore'

const Accessories = () => {
  return (
    <div className='h-14'>
        <Accenav/>
        <Matchacce/>
        <Accessoriesitem/>
        <Iphoneacce />
        <Ipadacce/>
        <Moretoexplore/>
    </div>
  )
}

export default Accessories
