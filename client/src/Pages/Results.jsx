import React, { Component } from 'react';
import data from  '../../../';

const { API_KEY } =
const API_URL = ''

class Results extends Component {
 state = {
   query: '',
   results: []
 }

 handleInputChange = () => {
   this.setState({
     query: this.search.value
   }, () => {
     if (this.state.query && this.state.length >1) {
       if (this.state.query.length % 2 === ) {
        this.getInfo()
       }
   }else if (!this.state.query){
     Console.log(done)
    }
  })
}
 getInfo = () => {
  axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
    .then(({ data }) => {
      this.setState({
        results: data.data
      })
    })
}

 render() {
   return (
     <form>
       <input

       />
       <p>{this.state.query}</p>
     </form>
   )
 }
}

export default Results
