import './App.css';
import CalculatorButton from './components/CalculatorButton/CalculatorButton';
import CalculatorScreen from './components/CalculatorScreen/CalculatorScreen';
import ClearButton from './components/ClearButton/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = useState('')

  const addInput = value => {
    setInput(input + value)
  }

  const findResult = () => {
    if (input) {
      setInput(evaluate(input))
    }
    else {
      setInput('')
    }
  }


  return (
    <div className="App">
      <div className='calculator-container'>

        <div>
          <CalculatorScreen input={input} />
          
        </div>

        <div className='calculator-row'>
          <CalculatorButton handleClick={addInput}>1</CalculatorButton>
          <CalculatorButton handleClick={addInput}>2</CalculatorButton>
          <CalculatorButton handleClick={addInput}>3</CalculatorButton>
          <CalculatorButton handleClick={addInput}>+</CalculatorButton>
        </div>

        <div className='calculator-row'>
          <CalculatorButton handleClick={addInput}>4</CalculatorButton>
          <CalculatorButton handleClick={addInput}>5</CalculatorButton>
          <CalculatorButton handleClick={addInput}>6</CalculatorButton>
          <CalculatorButton handleClick={addInput}>-</CalculatorButton>
        </div>

        <div className='calculator-row'>
          <CalculatorButton handleClick={addInput}>7</CalculatorButton>
          <CalculatorButton handleClick={addInput}>8</CalculatorButton>
          <CalculatorButton handleClick={addInput}>9</CalculatorButton>
          <CalculatorButton handleClick={addInput}>*</CalculatorButton>
        </div>

        <div className='calculator-row'>
          <CalculatorButton handleClick={findResult}>=</CalculatorButton>
          <CalculatorButton handleClick={addInput}>0</CalculatorButton>
          <CalculatorButton handleClick={addInput}>.</CalculatorButton>
          <CalculatorButton handleClick={addInput}>/</CalculatorButton>
        </div>

        <div className='calculator-row'>
          <ClearButton handleClick={() => setInput('')}>
            Clear
          </ClearButton>
        </div>

        <div className='calculator-row'></div>

      </div>

    </div>
  );
}

export default App;
