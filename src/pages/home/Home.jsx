import React from 'react'
import Features from '../../components/featured/Features'
 import Space from "../../components/Space/Space"
import Space2 from '../../components/Space2/Space2'
import Space3  from '../../components/Space3/Space3'
const Home = () => {
  return (
    <div className='home'> 
    <Features/> 
    <Space3/>
    <Space2/>
     <Space/>
  
      </div>
  )
}

export default Home

