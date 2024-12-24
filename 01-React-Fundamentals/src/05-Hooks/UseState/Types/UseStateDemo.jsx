import React from 'react'
import Counter from './Counter'
import StringState from './StringState.'
import ArrayState from './ArrayState'
import ObjectState from './ObjectState'
import NumberState from './NumberState'
import BooleanState from './BooleanState'

const UseStateDemo = () => {
    return (
        <div>
            <Counter/>
            <br/>

            <StringState/>
            <br/>

            <BooleanState/>
            <br/>

            <NumberState/>
            <br/>

            <ObjectState/>
            <br/>

            <ArrayState/>
        </div>
    )
}

export default UseStateDemo;
