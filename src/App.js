import './App.css';
import React, { useState, useEffect, createElement } from 'react';

function App() {

  const [testElements, setTestElements] = useState([]);

  function addTestElement() {
    setTestElements(testElements.concat(
      {
        id: testElements.length
      }
    ));
  }

  function removeTestElement(indexToRemove) {
    setTestElements( () => 
      testElements.filter((element, index) => index != indexToRemove).map((task, index) => {
        return {id: index};
      })
    )
  }

  return (
    <div className="App">
      <h1>Simple Task App</h1>
      <button 
        onClick={
          (e) => {
            addTestElement();
          }
        }>
        ADD TASK!
      </button>
      <div>
        <ul>
          {testElements.map((task) => 
          <li key={task.id}>
            <input placeholder={'New Task #' + task.id}></input>
            <input placeholder='Description'></input>
            <button 
              onClick={() => removeTestElement(task.id)}
            >Done</button>
          </li>
          )}
        </ul>
      </div>
    </div>
  );

}


export default App;
