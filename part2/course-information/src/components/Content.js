import React from 'react'
import Part from './Part'

const Content = (props) => {

    const part = props.course.parts
    const display = () => part.map(part => 
            <Part key={part.id} name={part.name} exercises={part.exercises} />

        )

    return (
        <div>
            { display() } 
        </div>
    )
}

export default Content
