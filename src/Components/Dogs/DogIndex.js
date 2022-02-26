import React, { Component } from 'react';

class DogIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
           image: ''
        }
       
    }
    fetchImage = async () => {
        try{
            const res = await  fetch ("https://dog.ceo/api/breeds/image/random");
            const data = await res.json();

            this.setState({image: data.message})
        } catch (error) {
            console.log({ error})
        }
    }
    componentDidMount() {
        this.fetchImage()
    }
  
    render() { 
        return ( <div>
            <img src={this.state.image} alt='dog'/>
            <button onClick={this.fetchImage}>Fetch Doggo</button>
        </div> );
    }
}
 
export default DogIndex;