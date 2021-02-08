import React from "react"

const Title = (props) => {
    return(
        <>
            <h1> {props.title}</h1>
            <h3>{props.slogan}</h3>
        </>
    )
}

export default Title