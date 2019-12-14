import React from 'react';
import { connect } from 'react-redux';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Person from './components/Person';


class App extends React.Component {

  render() {

    return (

      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/all" component={Home} />
          <Route exact path="/male" component={Person} />
          <Route exact path="/female" component={Person} />
        </Switch>
      </React.Fragment>

    )
  }

}

const mapStateToProps = (state) => ({
  details: state.details,
  loading: state.loading,
  person: state.person
})



export default connect(mapStateToProps)(App);
