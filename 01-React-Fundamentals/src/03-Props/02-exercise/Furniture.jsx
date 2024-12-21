import React from 'react'
import Introduction from './Introduction'
import Table from './Table'
import Chair from './Chair'
import Desk from './Desk'
import StandingDesk from './StandingDesk'
import Sofa from './Sofa'

const Furniture = () => {
  return (
    <div>
        <Introduction/>

        <br/>
        {/* Tables */}
        <Table quantity={5} price={4500} type={'rose-wood'}/>
        <Table quantity={10} price={2500} type={'plywood'}/>
        <Table quantity={15} price={3500} type={'premium'}/>

        <br/>
        {/* Chair */}
        <Chair quantity={5} price={450} type={'wood'}/>
        <Chair quantity={25} price={150} type={'plastic'}/>
        <Chair quantity={75} price={700} type={'aluminium'}/>

        <br/>
        {/* Desk */}
        <Desk quantity={15} price={2250} type={'wood'}/>
        <Desk quantity={5} price={1350} type={'aluminium'}/>
        
        <br/>
        {/* Standing Desk */}
        <StandingDesk quantity={15} price={2250} type={'wood'}/>
        <StandingDesk quantity={5} price={1350} type={'aluminium'}/>

        <br/>
        {/* Sofa */}
        <Sofa quantity={8} price={3500} type={'wood'}/>
    </div>
  )
}

export default Furniture