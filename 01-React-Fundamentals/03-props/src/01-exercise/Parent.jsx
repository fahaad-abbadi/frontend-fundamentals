import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
        <Child name = 'Abdul' age={25}/>
        <hr />
        <Child name = 'Yaqoub' age={22}/>
    </div>
  )
}

export default Parent