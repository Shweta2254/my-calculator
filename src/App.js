import React, { useState, useEffect} from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  
 

  function handleClick(event) {
    setResult(result.concat(event.target.name));
  }

  function clear() {
    setResult(result.slice(0, -1));
  }

  

  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  }

  return (
    <div className="calculator">
      <from>
        <input type="text" value={result}/>
      </from>

      <div className="buttons">
        
        <button id="clear" className = "btn" onClick={clear}>
        clear
        </button>
        <button name="1" className = "btn" onClick={handleClick}>
          1
        </button>
        <button name="2" className = "btn" onClick={handleClick}>
          2
        </button>
        <button name="3" className = "btn" onClick={handleClick}>
          3
        </button>
        <button name="+" className = "btn" onClick={handleClick}>
          +
        </button>
        <button name="4" className = "btn" onClick={handleClick}>
          4
        </button>
        <button name="5" className = "btn" onClick={handleClick}>
          5
        </button>
        <button name="6" className = "btn" onClick={handleClick}>
          6
        </button>
        <button name="-" className = "btn" onClick={handleClick}>
          -
        </button>
        <button name="7" className = "btn" onClick={handleClick}>
          7
        </button>
        <button name="8" className = "btn" onClick={handleClick}>
          8
        </button>
        <button name="9" className = "btn" onClick={handleClick}>
          9
        </button>
        <button name="*" className = "btn" onClick={handleClick}>
          *
        </button>
        <button name="/" className = "btn" onClick={handleClick}>
          /
        </button>
        <button name="0" className = "btn" onClick={handleClick}>
          0
        </button>
        
        <button id="result" className = "btn" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;