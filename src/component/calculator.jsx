import React, { useState, useEffect } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (input) {
      try {
        // eslint-disable-next-line no-eval
        setResult(eval(input));
      } catch (e) {
        setResult('Error');
      }
    } else {
      setResult(null);
    }
  }, [input]);

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        // eslint-disable-next-line no-eval
        setResult(eval(input));
        setInput(eval(input).toString());
      } catch (e) {
        setResult('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  return (

    
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} disabled />
        <div className="result">{result !== null ? result : '0'}</div>
      </div>
      <div className="buttons">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((btn) => (
          <button key={btn} onClick={() => handleButtonClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
    
  );
};

export default Calculator;
