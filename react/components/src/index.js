import React from 'react'
import ReactDOM from 'react-dom'

import First from './components/first'
import Second from './components/second'
import { Hello, Bye }  from './components/multiples'
import Multi2  from './components/multiples2'

ReactDOM.render(
    <div>
        <First />
        <Second text="Good day2" />
        <Hello text="World" />
        <Bye text="Bye, guys" />
        <Multi2.Hello text="World2" />
        <Multi2.Bye text="Bye, guys2" />
    </div>
, document.getElementById('root'))

