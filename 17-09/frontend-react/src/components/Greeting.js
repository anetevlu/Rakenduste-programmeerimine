import React from 'react'

function Greeting(props){
    const { name } = props

    return(
        <div>
            <h1 className="poof">Greeting { name }</h1>
            <p>greeting text</p>
        </div>
    )
}

export default Greeting