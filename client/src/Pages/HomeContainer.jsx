import React, {Component} from 'react';
import Select from 'react-select';
<<<<<<< 919203272d76756a715454767cd153aa232841b2
=======
import {Switch, Route, withRouter} from 'react-router-dom';

>>>>>>> working in HomeContainer
import Results from './Results.jsx';
<<<<<<< 075605e6c57cd7ab37bfb74a5fb5b72994355bce
import Home from './HomePage.jsx'
=======
import Home from './HomePage.jsx';
<<<<<<< de44d9351c0e984eee47cfd11d52479c46a0a393
<<<<<<< a2d1ac580904371a3dd6230f8e566711c0a02a71
=======
import ProfilePage from '../components/profileComp/ProfileComp.jsx';
>>>>>>> /*merge conflicts*/
=======
>>>>>>> /*Fixing mergin problems*/
import Profile from './Profile.jsx';
>>>>>>> /*Fixing mergin problems*/

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
    return (
      <div>
<<<<<<< 919203272d76756a715454767cd153aa232841b2
        {this.state.vendors ? (
          <Results vendors={this.state.vendors} />
        ) : (
          <Home submitSearch={this.submitSearch} />
        )}
=======
        <Switch>
          <Route exact path="/" render={(props) => <Home submitSearch={this.submitSearch} /> } />
          <Route render={(props) => <Results {...props} vendors={this.state.vendors} /> } />
        </Switch>
>>>>>>> working in HomeContainer
      </div>
    );
  }
}
