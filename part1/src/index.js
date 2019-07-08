import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <>
            <h1>{props.course}</h1>
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
            <Part part={props.part1} exercises={props.exercises1} />
            <Part part={props.part2} exercises={props.exercises2} />
            <Part part={props.part3} exercises={props.exercises3} />
        </>
    )
}

const Total = (props) => {
    return (
        <>
            <p>Number of exercises {props.exercises1+props.exercises2+props.exercises3}</p>
        </>
    )
}
const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1= 10
    const part2 = 'Using props to pass data'
    const exercises2= 7
    const part3 = 'State of a component'
    const exercises3 = 14
    
    return (
        <div>
            <Header course={course}/>
            <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
            <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
