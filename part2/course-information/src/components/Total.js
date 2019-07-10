import React from 'react'

const Total = (props) => {
    const parts = props.course.parts
    const total = parts.map(part=>part.exercises).reduce((sum,currentValue) => sum + currentValue)
    return (
        <p> Total {total} exercises </p>
    )
}

export default Total