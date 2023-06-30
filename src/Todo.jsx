import React, { useState } from 'react';
import Todolist from './Todolist';

function Todo() {
    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);       // create empty array which is hold old items

    const itemEvent = (event) => {
       
        setInputList(event.target.value)
    };

    const listOfIetm = () => {                   
        setItems((oldItems) => {                // old item access array and inputlist data add in empty array
            return [...oldItems, inputList ];   // all data include in oldItems
        });
         
        setInputList(" ");
     };

     const deleteItems = (id) => {
        console.log("delete")

        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })
     }

    

  return (
    <>  
      <div className='main_div'>
        <div className='center_div'>
            <br/>
            <h1>ToDo List</h1>
            <br/>
            <input type='text' placeholder='Add Item...' onChange={itemEvent}/>
            <button onClick={listOfIetm}> + </button>
            <ol>
                
                {Items.map((itemval, index) => {              
                  return  <Todolist key={index} id={index} text={itemval} onSelect={deleteItems} />   
                })}
            </ol>
        </div>
      </div>
    </>

  )
}

export default Todo