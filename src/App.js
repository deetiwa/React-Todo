import React, { createContext } from 'react';
// import Useeffect from './Useeffect';
// import ComA from './ComA';
// import Accordion from './Accordion';
import './App.css';
import Todo from './Todo';

const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <>
     <Todo/>
     {/* <Accordion /> */}
     {/* <FirstName.Provider value={'HELLO'}>
      <LastName.Provider value={'INDORE'}>
       <ComA/> 
        </LastName.Provider>
       </FirstName.Provider> */}
       {/* <Useeffect/> */}
     
    </>
  );
}

export default App;
export {FirstName, LastName};

