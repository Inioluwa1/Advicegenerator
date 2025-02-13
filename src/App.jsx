import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [advice, setadvice] = useState ("")
  const [adviceid, setadviceid] = useState("")

  const handleAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice")
      const advice = await response.json()

      setadvice(advice.slip.advice);
      setadviceid(advice.slip.id);


    } catch (error){
      console.error("Error fetching data:", error)
    }
  }

  // useEffect( () => {
  //   handleAdvice()
  // }
  //   , []
  // )

  // fetch("https://api.adviceslip.com/advice")
  // .then(res => res.json())
  // .then(data => console.log(data.slip) ) 
      

  return (
    <div className='advicecontainer'>
      <h5 className='advicenumber'> ADVICE #{adviceid? adviceid : "100"} </h5>
      <p className='advicecontent'> {advice? advice : "Make hay while the sun shines"} </p>
      <img src='/images/pattern-divider-desktop.svg' />
      <div className='dicecontainer'>
        <img src='/images/icon-dice.svg' onClick={() => handleAdvice()} />
      </div>
      
    </div>

  )
}

export default App
