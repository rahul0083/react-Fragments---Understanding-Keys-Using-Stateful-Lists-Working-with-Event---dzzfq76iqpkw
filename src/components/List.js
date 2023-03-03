import React from 'react';
import ListItems from './ListItems';

 const List = ({listx}) =>{
  return(
    // code here
    <>
   { listx.map((element,index)=>(
      <ListItems element={element} key={index} />
     
    ))}
     
    
    </>
  )
}

export default List;