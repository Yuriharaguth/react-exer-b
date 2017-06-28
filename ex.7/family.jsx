import React from 'react'
import { childreneWithProps } from '../utils/reactutils'

export default props => (
    <div>
        <h1>Familia</h1>
        { childreneWithProps(props.children, props) }
    </div>
)