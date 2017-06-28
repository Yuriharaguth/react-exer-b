import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Fil'>
        <Member name='gui' />
         <Member name='gui' />
    </Family>, document.getElementById('app'))

