import React from 'react'


const UseState = () => {


          return (
                    <div>
                              UseState
                    </div>
          )
}


export default UseState

/*
To use the useState Hook, we first need to import it into our component.
import { useState } from "react";

Notice that we are destructuring useState from react as it is a named export.


useState accepts an initial state and returns two values:
The current state.
A function that updates the state.

const [current state, fxn to update state] = useState(initial state);
NB: initial state === current state

Notice that again, we are destructuring the returned values from useState.

Read State:
We can now include our (current) state anywhere in our component.

Update State:
To update our state, we use our state updater function. e.g:
onClick={() => setColor("blue")}

What Can State Hold?
The useState Hook can be used to keep track of strings, numbers, 
booleans, arrays, objects, and any combination of these!
We could create multiple state Hooks to track individual values.

const [brand, setBrand] = useState("Ford");
const [model, setModel] = useState("Mustang");
const [year, setYear] = useState("1964");
const [color, setColor] = useState("red");

Or, we can just use one state and include an object instead!
const [car, setCar] = useState({
          brand: "Ford",
          model: "Mustang",
          year: "1964",
          color: "red"
});

<>
          <h1>My {car.brand}</h1>
          
          <p> It is a {car.color} {car.model} from {car.year}. /p>
</>

Updating Objects and Arrays in State:
When state is updated, the entire state gets overwritten.
What if we only want to update the color of our car?
If we only called setCar({color: "blue"}), this would 
remove the brand, model, and year from our state.
We can use the JavaScript spread operator to help us.

const updateColor = () => {
          setCar(previousState => {
                    return { ...previousState, color: "blue" }
          });
}

Because we need the current value of state, we pass a 
function into our setCar function. This function receives 
the previous value.

We then return an object, spreading the previousState 
and overwriting only the color.




*/ 