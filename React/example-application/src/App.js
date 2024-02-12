
import './App.css';
import React from "react"
import Component from './component';

function App() {
  // variable that doesn;t cause rerender
  let visible = true
  // variable that causes a rerender
  const [count,setCount] = React.useState(0)
  
  // useEffect is the code that you dont want to run on ever rerender
  React.useEffect(()=>{
    console.log("use Effect has ran") // in the browser open inspect and go to console to see this

  },[])// the empty array, represents that the code should only run when the page/component is created >> in the situation where I did this[ count, visible] - everytime count or visible changed the code would run again

  let changeVisibility = ()=> {
    visible = !visible // visible is equal to the opposite of its current true to false && false to true
  }
  let increaseCount = ()=>{
    setCount( currentCount => currentCount += 1)
  }
  return (
    <div className="App">
      {/* Basic Conditional */}
      { visible ? <h1> Hi, the visiblility must be set of true!</h1> : <h1>Not visible</h1>}

      {/* Function, and does it rerender when changing non state variable */}
      <button onClick={changeVisibility}>Change Visibility</button> 

      {/* The State Variable, does clicking the button cause rerender */}
      <Component count={count}/>
      <button onClick={increaseCount}>increaseCount</button>
      





    </div>
  );
}

export default App;
