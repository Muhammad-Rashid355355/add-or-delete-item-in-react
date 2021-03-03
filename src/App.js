import React, { useState } from 'react';

import array from './components/arrays';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from "react-bootstrap";


function App() {
const [listitem,setitem]=useState(array);
function handleRemove(id){
  const newList = listitem.filter((data) => data.id !== id);
 
    setitem(newList);
  console.log(id)

}
const tabledata = listitem.map(data=> {
  return <>
  
  <tr>
<td>{data.Name}</td>
<td>{data.City}</td>
<td>{data.Age}</td>
<td><button onClick={()=>handleRemove(data.id)}>Delete</button></td>
</tr>
  </>
})
  return (
    <div className="App">

     {/* {listitem.map((data)=>(
       <div key={data.id} >{data.Name}<br/>{data.City}<br/>{data.Age}
       </div>
      
     ))} */}
  <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
 
  {tabledata}
  </tbody>
</Table>
    </div>
  );
}

export default App;
