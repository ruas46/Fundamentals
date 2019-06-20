import React, { Fragment } from 'react'

export default props => 
    <Fragment>
        <h1>{props.text}</h1>
        <h2>!!!!!!</h2>
    </Fragment>

//Use Fragment, or <div></div>
//export default props => 
//    <div>
//        <h1>{props.text}</h1>
//        <h2>!!!!!!</h2>
//    </div>

//Can use Array too, with key=''
//export default props => [
//        <h1 key='h1'>{props.text}</h1>,
//        <h2 key='h2'>!!!!!!</h2>
//    ]

