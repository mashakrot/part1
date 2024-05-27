import { useState } from 'react'

const StatisticLine = (props) => (
  <>
    <tr>  
      <td>{props.text}</td>
      <td>{props.value} {props.sign}</td>
    </tr>
          
  </>
) 

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text} 
  </button>
)

const Statistics = (props) => {
  const totalNum = props.good + props.bad + props.neutral
  const average = props.averageSum/totalNum
  const positive = props.good*100/totalNum

   if (props.good <= 0 && props.neutral <= 0 && props.bad <= 0) {
    return (
      <div>No feedback given</div>
    )
   }

   return (
    <div>
      <table>
          <tbody>
              <StatisticLine text={'good'} value={props.good} />
              <StatisticLine text={'neutral'} value={props.neutral} />
              <StatisticLine text={'bad'} value={props.bad} />
              <StatisticLine text={'all'} value={totalNum} />
              <StatisticLine text={'average'} value={average} />
              <StatisticLine text={'positive'} value={positive} sign={'%'}/>
          </tbody>
    </table>
    </div>
   )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [averageSum, setAverageSum] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)

    const startAverage = averageSum + 1;
    setAverageSum(startAverage)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
}

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)

    const startAverage = averageSum - 1
    setAverageSum(startAverage)
  }

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} averageSum={averageSum}/>
    </>
  )
}

export default App