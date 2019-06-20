import React from 'react'
import Child from './child'

export default props =>
    <div>
        <h1>{props.name} {props.lastName}</h1>
        <h2>children</h2>
        <ul>
            <Child {...props} />
            <Child {...props} name="Loki" />
            <Child name="Thor" lastName={props.lastName} />
            
            {/* Create Child with Child inside Parent in index.js */}
            {props.children}

            {/* Clone Child with Parents props */}
            {React.cloneElement(props.children, { ...props })}
            
            {/* Clone Multiple Children with Parents props */}
            {
                React.Children.map(props.children, child => {
                    return React.cloneElement(child, {
                        ...props, ...child.props
                    })
                })
            }
        </ul>
    </div>
