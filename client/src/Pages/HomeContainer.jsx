import React, {Component} from 'react';
import Select from 'react-select';

import Results from './Results.jsx';
import Home from './HomePage.jsx'

export default class HomeContainer extends Component {
  state = {
    selectedOption: '',
    vendors: null
  }

  submitSearch = (query) => {
    axios.get('/search', {
      params: {
        query: `${query}`
      }
    })
    .then(({data}) => {
      console.log(data)
      this.setState({
        vendors: data
      })
    })
    .catch((error) => {
      console.error(error);
    })
    this.props.history.push(`/search?query=${query}`)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.vendors !== nextState.vendors
  }

  componentWillUnmount() {

  }
  render() {
    {console.log('this is the state vendor data', this.state.vendors)}
    return (
      <div>
        {this.state.vendors ? (
          <Results vendors={this.state.vendors} />
        ) : (
          <Home submitSearch={this.submitSearch} />
        )}
      </div>
    );
  }
}
