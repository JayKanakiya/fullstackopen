import React from 'react';
import ReactDOM from 'react-dom';

// const Header = (props) => {
//     return (
//         <>
//             <h1>{props.course}</h1>
//         </>
//     )
// }
// const Part= (props) => {
//     return (
//         <>
//             <p>
//                 {props.part}  {props.exercises}
//             </p>
//         </>
//     )
// }
// const Content = (props) => {
//     return (
//         <>
//             <Part part={props.part1} exercises={props.exercises1} />
//             <Part part={props.part2} exercises={props.exercises2} />
//             <Part part={props.part3} exercises={props.exercises3} />
//         </>
//     )
// }

// const Total = (props) => {
//     return (
//         <>
//             <p>Number of exercises {props.exercises1+props.exercises2+props.exercises3}</p>
//         </>
//     )
// }
const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }
    return (
        <div>
            <h1>{course}</h1>
            <p>
                {part1.name}  {part1.exercises}
            </p>
            <p>
                {part2.name}  {part2.exercises}
            </p>
            <p>
                {part3.name}  {part3.exercises}
            </p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
