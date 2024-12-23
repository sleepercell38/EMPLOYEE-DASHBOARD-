import React from 'react'
import Header from '../others/Header'
import Adminpanel from '../others/Adminpanel'
import Alltask from '../others/Alltask'
import Headeradmin from '../others/Headeradmin'

const Admindashboard = (props) => {
  return (
    <div>
      <Headeradmin changeuser={props.changeuser}/>
      <Adminpanel/>
      <Alltask/>
    </div>
  )
}

export default Admindashboard
