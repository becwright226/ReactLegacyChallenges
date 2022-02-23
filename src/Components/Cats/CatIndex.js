import React, { Component } from 'react';

 
class CatIndex extends Component {
 constructor(props){
   super(props)
   this.state = {
     breeds: ['persian', 'siamese', 'maine coon', 'ragdoll', 'scottish fold', 'sphynx', 'british shorthair', 'bengal', 'american shorthair']
   }
 }
render() {
   return (
     <div>
      <ul>

      {this.state.breeds.map(cat => (<li key={cat}>{cat}</li>) )}
       </ul>
     </div>
   );
   }
}
export default CatIndex