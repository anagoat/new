import React, { Component } from 'react';
import PropTypes from 'prop-types';
import json from '../../assets/data.json';
import './Transactions.css';

const TABLE_COLUMNS = [
    {
        label: 'dateTime',
        sort: 'default',
    },{
        label: 'recipient',
        sort: 'default',
    },{
        label: 'recipientCounrty',
        sort: 'default',
    },{
        label: 'sum',
        sort: 'default',
    },{
        label: 'transactionStatus',
        sort: 'default',
    }
];

const SortableHeader = (props) => {
    return(
        <thead>
            <tr>
                {TABLE_COLUMNS.map((element, index) =>
                <th key={index}>{element.label}</th>
                )}
            </tr>
        </thead>
    )
}

const SortableBody = ({data}) => {
    return(
      <tbody>
        {data.map((element, index) =>
          <tr key={index}>
            {element.map((item, i) =>
              <td key={i}>{item}</td>
            )}
          </tr>
        )}
      </tbody>
    )
  }

//   data.sort(function(a, b) {
//     return a[0] - b[0];
//   })

class Transactions extends Component {

    static propTypes = {
        name: PropTypes.string,
      };
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            columns: TABLE_COLUMNS
          }
        };

    componentDidMount() {
         new Promise(function(resolve, reject) {
            setTimeout(() => resolve(json), 100);
        });

        this.setState({ data:json })
        }

    render() {
        console.log('[this.state.data]', this.state.data);
         return (
            <table className='Transactions'>
                <SortableHeader columns={this.state.columns} onClick={this.sortTableFunc}/>
                <SortableBody data={this.state.data} />
            </table>
        );
    }
}

export default Transactions;
            








































// import React, { Component } from 'react';
// import json from '../../assets/data.json';


// import './Transactions.css';

// class Transactions extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: []
//         };
//     }
    
//     componentDidMount() {
//         let promise = new Promise(function(resolve, reject) {
//             setTimeout(() => resolve(json), 100);
//         });

//         this.setState({ data:json })

//         }


//     render() {
//         const { data } = this.state;
//         console.log('[data]', data);

//         return (
//         <div className='Transactions' >
//             <table key={data.id}>
//                 <thead key={data.id}>
//                     <tr key={data.id}>
//                         <th rowSpan="1">date</th>
//                         <th rowSpan="1">time</th>
//                         <th rowSpan="2">Recipient</th>
//                         <th rowSpan="1">Sum</th>
//                         <th rowSpan="1">transactionStatus</th>
//                     </tr>
//                     </thead>
//                     {data ? data.map(data => 
//                 <tbody key={data.id}>
//                     <tr key={data.id}>
//                         <td rowSpan="1">{new Date(data.dateTime).getDate() + '.' + new Date(data.dateTime).getMonth() + '.' + new Date(data.dateTime).getFullYear()}</td>
//                         <td rowSpan="1" >{data.dateTime}</td>
//                         <td rowSpan="1">{data.Recipient}</td>
//                         <td rowSpan="1">{data.Sum}</td>
//                         <td rowSpan="1">{data.transactionStatus}</td>
//                     </tr>
//                 </tbody>
//             ) : null}
//             </table>
//         </div>
//         );
//     }
// }

// export default Transactions;