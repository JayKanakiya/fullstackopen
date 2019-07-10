import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = (props) => {
    return (
        <div>
            <Header course={props.course} />
            <Content course={props.course} />
        </div>
    )
}

export default Course

