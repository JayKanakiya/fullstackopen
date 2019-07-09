import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const MaxVotes = (props) => {
    const maxvote = Math.max(...props.votes)
    var maxindex = props.votes.indexOf(maxvote)
    
    if(maxvote===0){
        return (
            <p> no votes </p>
        )
    }
    return (
        <p>{props.anecdotes[maxindex]}</p>
    )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(5).fill(0))
  const incVote = (selected) => {
      const copy = [...votes]
      copy[selected] += 1
      setVotes(copy)
  }
  return (
    <div>
        <h1> Anecdote of the day </h1>
       
        {props.anecdotes[selected]}   {votes[selected]} votes <br/>
        <div>
            <button onClick={()=> setSelected(Math.floor(Math.random()*5))}>next anecdote</button>
            <button onClick={()=> incVote(selected)}>vote</button>
        </div>
        <br/>
        <h1>Anecdote with most votes</h1>
        <MaxVotes votes = {votes} anecdotes={props.anecdotes} />

    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
ReactDOM.render(
  <App anecdotes={anecdotes}  />,
  document.getElementById('root')
)
