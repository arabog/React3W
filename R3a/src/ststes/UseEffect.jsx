import React from 'react'


const UseEffect = () => {


          return (
                    <div>
                              UseEffect
                    </div>
          )
}


export default UseEffect


/*
useEffect
The useEffect Hook allows you to perform side effects in your components.
Some examples of side effects are: fetching data, directly updating the DOM, 
and timers.
useEffect accepts two arguments. The second argument is optional.
useEffect(<function>, <dependency>)

Let's use a timer as an example

          const [count, setCount] = useState(0);

          useEffect(() => {
                    setTimeout(() => {
                              setCount((count) => count + 1);
                    }, 1000);
          });

But wait!! I keeps counting even though it should only count once!

useEffect runs on every render. That means that when the count 
changes, a render happens, which then triggers another effect.
This is not what we want. There are several ways to control when 
side effects run.
We should always include the second parameter which accepts an 
array. We can optionally pass dependencies to useEffect in this array.

1. No dependency passed:
          useEffect(() => {
                    //Runs on every render
          });

2. An empty array:
          useEffect(() => {
                    //Runs only on the first render
          }, []);

3. Props or state values:
          useEffect(() => {
                    //Runs on the first render
                    //And any time any dependency value changes
          }, [prop, state]);


Here is an example of a useEffect Hook that is dependent on a 
variable. If the count variable updates, the effect will run again:

function Counter() {
          const [count, setCount] = useState(0);
          const [calculation, setCalculation] = useState(0);

          useEffect(() => {
                    setCalculation(() => count * 2);
          }, [count]); // <- add the count variable here

          return (
                    <>
                              <p>Count: {count}</p>
                              
                              <button onClick={() => setCount((c) => c + 1)}>+</button>
                              
                              <p>Calculation: {calculation}</p>
                    </>
          );
}

NB: Clicking d btn causes a re-rendering, wc is what useEffect needs








          

*/ 