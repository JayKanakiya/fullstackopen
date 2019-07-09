import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Statistic = (props) => {
    return (
        <p>{props.text} {props.value}</p>
    )
}

const Statistics = (props) => {
    const all = props.good + props.bad + props.neutral
    const average = (props.good + (props.bad*-1))/all
    const positive = (props.good)/all *100
    if(all===0){
        return (
            <p>No feedbacks given</p>
        )
    }
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td><Statistic text="good" value={props.good} /></td>
                    </tr>
                    <tr>
                        <td><Statistic text="neutral" value={props.neutral} /></td>
                    </tr>
                    <tr>
                        <td><Statistic text="bad" value={props.bad} /></td>
                    </tr>
                    <tr>
                        <td><Statistic text="all" value={all} /></td>
                    </tr>
                    <tr>
                        <td><Statistic text="average" value={average} /></td>
                    </tr>
                    <tr>
                        <td><Statistic text="positive" value={positive} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.event}>{props.text}</button>
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
                <Button event={()=> setGood(good+1)} text="good" />
                <Button event={()=> setNeutral(neutral+1)} text="neutral" />
                <Button event={()=> setBad(bad+1)} text="bad" />
                                
            </div>
            <h2>statistics</h2>
            <Statistics good={good} bad ={bad} neutral={neutral} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

