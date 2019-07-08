import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <>
            <h1>{props.course.name}</h1>
        </>
    )
}
const Part= (props) => {
    return (
        <>
            <p>
                {props.part}  {props.exercises}
            </p>
        </>
    )
}
const Content = (props) => {
    return (
        <>
            <Part part={props.course.part[0].name} exercises={props.course.part[0].exercises} />
            <Part part={props.course.part[1].name} exercises={props.course.part[1].exercises} />
            <Part part={props.course.part[2].name} exercises={props.course.part[2].exercises} />
        </>
    )
}

const Total = (props) => {
    return (
        <>
            <p>Number of exercises {props.course.part[0].exercises+props.course.part[1].exercises+props.course.part[2].exercises}</p>
        </>
    )
}
const App = () => {
    // const course = 'Half Stack application development'
    const course = {
        name: 'Half Stack application development',
        part:[
            {
            name: 'Fundamentals of React',
            exercises: 10
            },
            {
            name: 'Using props to pass data',
            exercises: 7
            },
            {
            name: 'State of a component',
            exercises: 14
            }
       ]
    }
    return (
        <div>
           <Header course={course} />
           <Content course={course} />
           <Total course={course} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
