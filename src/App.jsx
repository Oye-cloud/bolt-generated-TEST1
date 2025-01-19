import React, { useState } from 'react';

    function App() {
      const [display, setDisplay] = useState('0');
      const [previousValue, setPreviousValue] = useState(null);
      const [operation, setOperation] = useState(null);

      const handleNumberClick = (number) => {
        setDisplay(display === '0' ? String(number) : display + number);
      };

      const handleOperatorClick = (operator) => {
        if (previousValue === null) {
          setPreviousValue(parseFloat(display));
          setDisplay('0');
          setOperation(operator);
        } else {
          handleEqualClick();
          setPreviousValue(parseFloat(display));
          setDisplay('0');
          setOperation(operator);
        }
      };

      const handleEqualClick = () => {
        if (previousValue !== null && operation !== null) {
          let result;
          const currentValue = parseFloat(display);
          switch (operation) {
            case '+':
              result = previousValue + currentValue;
              break;
            case '-':
              result = previousValue - currentValue;
              break;
            case '*':
              result = previousValue * currentValue;
              break;
            case '/':
              result = previousValue / currentValue;
              break;
            default:
              return;
          }
          setDisplay(String(result));
          setPreviousValue(null);
          setOperation(null);
        }
      };

      const handleClearClick = () => {
        setDisplay('0');
        setPreviousValue(null);
        setOperation(null);
      };

      const handleDecimalClick = () => {
        if (!display.includes('.')) {
          setDisplay(display + '.');
        }
      };

      const handleSignChange = () => {
        setDisplay(String(parseFloat(display) * -1));
      };

      const handlePercentage = () => {
        setDisplay(String(parseFloat(display) / 100));
      };

      return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="bg-white shadow-xl rounded-xl p-4 w-80">
            <div className="text-right text-4xl font-bold mb-4 px-2">{display}</div>
            <div className="grid grid-cols-4 gap-2">
              <button onClick={handleClearClick} className="col-span-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded-xl">AC</button>
              <button onClick={handleSignChange} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded-xl">+/-</button>
              <button onClick={handlePercentage} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded-xl">%</button>
              <button onClick={() => handleOperatorClick('/')} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-xl">/</button>
              <button onClick={() => handleNumberClick(7)} className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-xl">7</button>
              <button onClick={() => handleNumberClick(8)} className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-xl">8</button>
              <button onClick={() => handleNumberClick(9)} className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-xl">9</button>
              <button onClick={() => handleOperatorClick('*')} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-xl">*</button>
              <button onClick={() => handleNumberClick(4)} className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-xl">4</button>
              <button onClick={() => handleNumberClick(5)} className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-xl">5</button>
              <button onClick={() => handleNumberClick(6)} className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-xl">6</button>
              <button onClick={() => handleOperatorClick('-')} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-xl">-</button>
              <button onClick={() => handleNumberClick(1)} className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-xl">1</button>
              <button onClick={() => handleNumberClick(2)} className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-xl">2</button>
              <button onClick={() => handleNumberClick(3)} className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-xl">3</button>
              <button onClick={() => handleOperatorClick('+')} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-xl">+</button>
              <button onClick={() => handleNumberClick(0)} className="col-span-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-xl">0</button>
              <button onClick={handleDecimalClick} className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-xl">.</button>
              <button onClick={handleEqualClick} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-xl">=</button>
            </div>
          </div>
        </div>
      );
    }

    export default App;
