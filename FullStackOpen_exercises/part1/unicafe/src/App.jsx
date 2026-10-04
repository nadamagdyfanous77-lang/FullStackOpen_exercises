import { useState } from 'react'
const StatisticLine = (props) => {
  return (
      <table>
        <tbody>
        <tr>
          <td>{props.text}</td>
            <td>{props.value}</td>
          </tr>
        </tbody>
      </table>
  )
}
const Statistics = (props) => {
  const {all , good, neutral,bad,average,positive}=(props)
  if (all == 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  else {
    return (

      <div>
       <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average.toFixed(1)} />
        <StatisticLine text="positive" value={positive.toFixed(1)+"%"} />
    </div>
  )
}
  }
  

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all=(good + neutral + bad)
const average=all == 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / all
     const positive=all == 0 ? 0 : (good / all) * 100
  
  const goodClick = () => {
   setGood (good + 1)
  }
  

  const neutralClick = () => {
    setNeutral(neutral + 1)
  }

  const badClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={goodClick}>good</button>
      <button onClick={neutralClick}> neutral</button>
      <button onClick={badClick}> bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}></Statistics>
    </div>
  )
}

export default App