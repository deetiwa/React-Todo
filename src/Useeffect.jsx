import React, { useState, useEffect } from 'react'

function Useeffect() {
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);

     useEffect(() => { alert("i am Clicked");});
    //  useEffect(() => { document.title = `You Clicked ${num} Times`});
    
  return (
    <>
    <button onClick={() => {setNum(num + 1)}}>Click Me {num}</button>
    <button onClick={() => {setNums(nums + 1)}}>Click Me {nums}</button>
    </>
  );
}

export default Useeffect