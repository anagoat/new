// import React from 'react';
// import './App.css';
// import Auth from './components/Auth/Auth';

// class App extends React.Component {
//     render () {
//         return (
//             <div className="App">
//                 <Auth />
//             </div>
//         );
//     }
// }
// export default App;

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




// [
//     {
//         "id": 1,
//         "dateTime": 1575714779000,
//         "Recipient": "Canada, Michael",
//         "Sum":1000,
//         "transactionStatus": "ok" 
//     },
//     {
//         "id": 2,
//         "dateTime": 1575628379000,
//         "Recipient": "Canada, Michael",
//         "Sum":2000,
//         "transactionStatus": "ok" 
//     },
//     {
//         "id": 3,
//         "dateTime": 1575369179000,
//         "Recipient": "Canada, Michael",
//         "Sum":3000,
//         "transactionStatus": "ok" 
//     },
//     {
//         "id": 4,
//         "dateTime": 1575455579000,
//         "Recipient": "Canada, Michael",
//         "Sum":4000,
//         "transactionStatus": "ok" 
//     },
//     {
//         "id": 5,
//         "dateTime": 1575541979000,
//         "Recipient": "Canada, Michael",
//         "Sum":5000,
//         "transactionStatus": "ok" 
//     },
//     {
//         "id": 6,
//         "dateTime": 1575282779000,
//         "Recipient": "Canada, Michael",
//         "Sum":6000,
//         "transactionStatus": "ok" 
//     },
//     {
//         "id": 7,
//         "dateTime": 1575196379000,
//         "Recipient": "Canada, Michael",
//         "Sum":7000,
//         "transactionStatus": "ok" 
//     }
// ]
