//this is the parent component file where joke and type chooser is sharing 
//we import those two here and we use them when returnig something in APP
// weimport useState from react 
import { useState } from "react";
import TypeChooser from "./TypeChooser";
import Joke from "./Joke";

const App = () => {

  const [chosenType, setChosenType] = useState("");

  return (
    <div style={{ textAlign: "center" , border:"1px solid black"}}>
      <h1>Welcome to the Joke Generator</h1>
      
      {/* we display flex to align typechooser to the left and joke to the right */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "20px" }}>
        {/* Left: TypeChooser */}
        <div style={{ width: "30%", textAlign: "left" }}>
          <TypeChooser onTypeSelect={setChosenType} selectedType={chosenType} />
        </div>

         {/* Right: Joke Component  */}
        <div style={{ width: "65%", textAlign: "left" }}>
          <Joke chosenType={chosenType} />
        </div>
      </div>
    </div>
  );
};

export default App;
