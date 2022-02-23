//unneeded file
   
import React, { Component } from 'react';
 
const CatList = () => {
 return (
   <div>
     <ul>
       {this.state.breeds.map(cat => (<li key={breeds}>{cat}</li>) )}
       </ul>
   </div>
 )
}
 
 export default CatList;
