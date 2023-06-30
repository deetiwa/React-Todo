import React, { useState } from 'react';
 import {questions} from './Api.js';
 import "./Accordion.css";
 import MyAccordion from './MyAccordion.js'

function Accordion() {
    const[data] = useState(questions);
  return (
    <>
    <section className='main-div'>
        <h2>React</h2>
    {
        data.map((curElem) => {
            const { id } = curElem;
            return <MyAccordion key={id} {...curElem} />
        })
    }
    </section>
    </>
  )
}

export default Accordion;