import React from 'react'
import ReactDOM from 'react-dom'

import Greeting from "./components/greeting"

import Parent from "./components/parent"
import Child from './components/child'//used only in the fourth child

ReactDOM.render(
    <div>
        <Greeting type="Good Day" name="Jon" />

        <Parent name="Odin" lastName="Asgardian">
            <Child name="Fenrir" lastName="Asgardian" />
        </Parent>
    </div>
, document.getElementById('root'))