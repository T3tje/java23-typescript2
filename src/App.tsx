import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    const numberArray:Array<number> = [1,2,3,4,5,6]

    const resultArray:number[] = numberArray.map(number => number*2)

    console.log(resultArray)

    const wordArray:Array<string> = ["eins", "zwei", "dreizehn", "vierzehn"]

    const result2Array:Array<string> = wordArray.filter((word:string) => word.length > 5)

    console.log("String Array Filter Result:", result2Array)

    const resultNumber:number = numberArray.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);

    console.log("Number Array Reduce Result:", resultNumber)

    const isGreaterThan10: boolean = numberArray.some((number) => number > 10);

    if (isGreaterThan10) {
        console.log("At least one number is greater than 10.");
    } else {
        console.log("No number is greater than 10.");
    }


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
