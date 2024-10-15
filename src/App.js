import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export default function MyApp() {

  //Here we elevate the state to be contained in app compared to the actual buttons
  //This is similar to creating a @State variable in SwiftUI
  // We then pass the state to subcomponents, similar to @Binding in SwiftUI which triggers the re-render of the whole app.
  const [count, setCount] = useState(0);

  function handleElevatedSharedStateButtonClick() {
    setCount(count + 1);
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        React components compared to SwiftUI components.
        </p>


        <div>
      {/* These components own their state within them, in swiftUI we typically perfer to declare each of their independent states in the parent so it is more clear, and leverage bindings,
      however, we can accomplish this same behavior in SwiftUI by declaring @State in each button as in React */}
      <h1>Self Contained State Buttons:</h1>
      <SelfContainedStateButton/>
      <SelfContainedStateButton/>
  
  {/* These components share an elevate state in the app, very similar to how components can share a single @State variable in SwiftUI */}
    <h1>Shared Elevated State Buttons:</h1>
    <ElevatedSharedStateButton count={count} onClick={handleElevatedSharedStateButtonClick}/>
    <ElevatedSharedStateButton count={count} onClick={handleElevatedSharedStateButtonClick}/>


{/* WIP  */}
    <h1>Custom  Buttons:</h1>
      <MyCustomButton clickHandler="incrementByOne" />
      <MyCustomButton clickHandler="incrementByFiveTimesCurrent" />

     
    </div>
      </header>
    </div>
  );
}

//State is completely self contained in the component
function SelfContainedStateButton() {

  //The hook "useState" essentially acts the same as a "@State" variable in SwiftUI
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

//State is contained in parent, count, and onClick are essentially @Binding's
function ElevatedSharedStateButton({count, onClick}) {

  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

// WIP
function MyCustomButton({ clickHandler }) {
  const [count, setCount] = useState(1);

  function incrementByOne() {
    setCount(count + 1);
  }

  function incrementByFiveTimesCurrent() {
    setCount(count + 5 * count);
  }

  const handleClick = clickHandler === "incrementByOne" ? incrementByOne : incrementByFiveTimesCurrent;

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}





