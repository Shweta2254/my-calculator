import React, { useState, useEffect} from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  
 

  function operateResult(event) {
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
        <button name="1" className = "btn" onClick={operateResult}>
          1
        </button>
        <button name="2" className = "btn" onClick={operateResult}>
          2
        </button>
        <button name="3" className = "btn" onClick={operateResult}>
          3
        </button>
        <button name="+" className = "btn" onClick={operateResult}>
          +
        </button>
        <button name="4" className = "btn" onClick={operateResult}>
          4
        </button>
        <button name="5" className = "btn" onClick={operateResult}>
          5
        </button>
        <button name="6" className = "btn" onClick={operateResult}>
          6
        </button>
        <button name="-" className = "btn" onClick={operateResult}>
          -
        </button>
        <button name="7" className = "btn" onClick={operateResult}>
          7
        </button>
        <button name="8" className = "btn" onClick={operateResult}>
          8
        </button>
        <button name="9" className = "btn" onClick={operateResult}>
          9
        </button>
        <button name="*" className = "btn" onClick={operateResult}>
          *
        </button>
        <button name="/" className = "btn" onClick={operateResult}>
          /
        </button>
        <button name="0" className = "btn" onClick={operateResult}>
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