
import React from 'react';
import './App.css';
import Auth from './components/Auth/Auth';
import Transactions from './components/Transactions/Transactions';
import  { Route, Switch, withRouter } from 'react-router-dom';

class App extends React.Component {

    render () {
        return (
            <div className="App"> 
            <Switch>
                <Route exact path="/" component={Auth} />
                <Route exact path="/transactions"  component={Transactions} />
            </Switch>
        </div> 
        );
    }
}
export default withRouter(App);


