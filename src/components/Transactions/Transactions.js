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

const TableHeader = (props) => {
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

const TableBody = ({data}) => {
    sortDate(data);
    formatDate(data);
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

const formatDate = (data) => {
    data.map( elem => {
        for ( let i = 0; i < elem.length; i++) {
            // elem[0] = new Date(elem[0]).getDate() + '.' + new Date(elem[0]).getMonth() + '.' + new Date(elem[0]).getFullYear() + ' ' + myFunction(elem[0]);
            elem[0] = new Date(elem[0]).getDate() + '.' + new Date(elem[0]).getMonth() + '.' + new Date(elem[0]).getFullYear() + ' ' + new Date(elem[0]).getHours() + ':' + new Date(elem[0]).getMinutes();
            // нужно выводить дату в формате 07:07, но я так и не понял почему выдает ошибку "getHours is not a function" при варианте вызова выше, который закоменчен
            // function addZero(i) {
            //     if (i < 10) {
            //       i = "0" + i;
            //     }
            //     return i;
            //   }
              
            //   function myFunction(d) {
            //       console.log('[d]', d);
            //     let h = addZero(d.getHours());
            //     let m = addZero(d.getMinutes());
            //     return h + ':' + m;
            //   }
            break;
        }
    })

}

  const sortDate = (data) => {
    data.sort(function(a, b) {
      return a[0] - b[0];
    })
}

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
         return (
            <table className='Transactions'  >
                <TableHeader columns={this.state.columns} />
                <TableBody data={this.state.data}/>
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