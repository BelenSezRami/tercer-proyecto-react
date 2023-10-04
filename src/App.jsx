import './App.css';
import CalculatorButton from './components/CalculatorButton/CalculatorButton';
import CalculatorScreen from './components/CalculatorScreen/CalculatorScreen';
import ClearButton from './components/ClearButton/ClearButton';

function App() {
  return (
    <div className="App">
      <div className='calculator-container'>

        <div>
          <CalculatorScreen>

          </CalculatorScreen>
        </div>

        <div className='calculator-row'>
          <CalculatorButton>1</CalculatorButton>
          <CalculatorButton>2</CalculatorButton>
          <CalculatorButton>3</CalculatorButton>
          <CalculatorButton>+</CalculatorButton>
        </div>

        <div className='calculator-row'>
          <CalculatorButton>4</CalculatorButton>
          <CalculatorButton>5</CalculatorButton>
          <CalculatorButton>6</CalculatorButton>
          <CalculatorButton>-</CalculatorButton>
        </div>

        <div className='calculator-row'>
          <CalculatorButton>7</CalculatorButton>
          <CalculatorButton>8</CalculatorButton>
          <CalculatorButton>9</CalculatorButton>
          <CalculatorButton>*</CalculatorButton>
        </div>

        <div className='calculator-row'>
          <CalculatorButton>=</CalculatorButton>
          <CalculatorButton>0</CalculatorButton>
          <CalculatorButton>.</CalculatorButton>
          <CalculatorButton>/</CalculatorButton>
        </div>

        <div className='calculator-row'>
          <ClearButton>Clear</ClearButton>
        </div>

        <div className='calculator-row'></div>

      </div>

    </div>
  );
}

export default App;
