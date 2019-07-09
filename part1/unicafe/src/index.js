import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const Statistics = (props) => {
    const all = props.good + props.bad + props.neutral
    const average = (props.good + props.bad*-1)/all
    const positive = (props.good)/all
    return (
        <div>
            <p>good {props.good}</p>
            <p>neutral {props.neutral}</p>
            <p>bad {props.bad}</p>
            <p>all {all}</p>
            <p>average {average}</p>
            <p>positive {positive}%</p>
        </div>
    )
}
const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    
    return (
        <div>
            <h1> give feedback </h1>
            <div>
                <button onClick={()=> setGood(good+1)}>good</button>
                <button onClick={()=> setNeutral(neutral+1)}>neutral</button>
                <button onClick={()=> setBad(bad+1)}>bad</button>                
            </div>
            <h2>statistics</h2>
            <Statistics good={good} bad ={bad} neutral={neutral} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

