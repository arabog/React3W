import React from 'react'


const UseReducer = () => {


          return (
                    <div>
                              UseReducer
                    </div>
          )
}


export default UseReducer

/*
UseReducer:
The useReducer Hook is similar to the useState Hook.
It allows for custom state logic.
If you find yourself keeping track of multiple pieces of 
state that rely on complex logic, useReducer may be useful.


Syntax
The useReducer Hook accepts two arguments.
useReducer(<reducer>, <initialState>)

The reducer function contains your custom state logic and 
the initialState can be a simple value but generally will 
contain an object.

The useReducer Hook returns the current state and a dispatch
method.

const initialTodos = [
          {
                    id: 1,
                    title: "Todo 1",
                    complete: false,
          },

          {
                    id: 2,
                    title: "Todo 2",
                    complete: false,
          },
];

const reducer = (state, action) => {
          switch (action.type) {
                    // is state initialTodos? while action is d exact 
                    // item selected and id is its ppty selected too

                    case "COMPLETE":
                              return state.map((todo) => {
                                        if (todo.id === action.id) {
                                                  return { ...todo, complete: !todo.complete };
                                        } else {
                                                  return todo;
                                        }
                                        });
                    default:
                              return state;
          }
};

function Todos() {
          const [todos, dispatch] = useReducer(reducer, initialTodos);

          const handleComplete = (todo) => {
                    dispatch({ type: "COMPLETE", id: todo.id });
          };

          return (
                    <>
                              {
                                        todos.map((todo) => (
                                                  <div key={todo.id}>
                                                            <label>
                                                                      <input
                                                                                type="checkbox"
                                                                                checked={todo.complete}
                                                                                onChange={() => handleComplete(todo)}
                                                                      />

                                                                      {todo.title}
                                                            </label>
                                                  </div>
                                        ))
                              }
                    </>
          );
}

This is just the logic to keep track of the todo complete status.
All of the logic to add, delete, and complete a todo could be 
contained within a single useReducer Hook by adding more 
actions.






*/ 