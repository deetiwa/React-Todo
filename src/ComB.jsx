import React, { useContext } from 'react'
// import ComC from './ComC';
import { FirstName, LastName } from './App';

function ComB() {

    const fname = useContext(FirstName);
    const lname = useContext(LastName);

  return (
    <>

<h2>
     {fname} {lname}
</h2>
    
    </>
  )
}

export default ComB