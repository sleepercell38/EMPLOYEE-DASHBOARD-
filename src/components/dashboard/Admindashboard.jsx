import React from 'react'
import Header from '../others/Header'
import Adminpanel from '../others/Adminpanel'
import Alltask from '../others/Alltask'
import Headeradmin from '../others/Headeradmin'

const Admindashboard = () => {
  return (
    <div>
      <Headeradmin/>
      <Adminpanel/>
      <Alltask/>
    </div>
  )
}

export default Admindashboard
