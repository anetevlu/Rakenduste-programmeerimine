import React from 'react'

function People({personsName, showName, setShowName}){

    return(
        <div>
            <p>Person</p>
            <button onClick={() => setShowName(!showName)}>Toggle name</button>
        </div>
    )
}

export default People