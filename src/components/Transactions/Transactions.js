import React, { Component } from 'react';
import json from '../../assets/data.json';
// import PropTypes from 'prop-types';

import './Transactions.css';

class Transactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
           data: ''
        };
    }
        
    componentDidMount() {
            let promise = new Promise(function(resolve, reject) {
                // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
                // setTimeout(() => resolve(this.setState({ data: json })), 1000);
                setTimeout(() => resolve(json), 1000);
              });
              this.setState({ data:json })
    }

    
    // componentWillMount() {
    //     this.setState({
    //       hits: [{ _id: 1, company: 'A'}, {
    //         _id: 2,
    //         company: 'B'
    //       }, {
    //         _id: 3,
    //         company: 'C'
    //       }]
    //     });
    //   }
    
    //   render() {
    //     const { hits } = this.state;
    //     console.log(this.state.hits);
    //     return (
    //       <div>
    //         {hits.map(hit =>
    //           <div key={hit.Date}>
    //             <span>{hit.company}</span>
    //           </div>
    //         )}
    //       </div>
    //     );
    //   }
    // }


      
    render() {
        const { data } = this.state;
        console.log('[data]', data);
        console.log(this.state.data);
        return (
          <div>
             { data.map(data =>
              <div key={data.Date}>
                <span>{data.Recipient}</span>
              </div>
            ) } 
          </div>
        )
      }
}

// Transactions.propTypes = {
    
    // };
    
    export default Transactions;



// 1. Доработать валидацию на форме (требования описаны в ТЗ)
// - в поле логин сейчас можно вбить все что угодно
// - текстовки для ошибок логина не соответствуют реальной проблеме
// - валидация пароля работает не понятным образом, (Fffffffffffffffff1 - данный пароль считается не корректным, хотя он соответствует требованиям в ТЗ)
// - если было выведено сообщение о не валидном пароле, а затем он был изменен на валидный, то форма не сабмитится, вначале пропадет сообщение об ошибке и только при повторном нажатии на кнопку сабмит, он по факту происходит
// 2. Компонент Transactions при инициализации должен уметь спрашивать данные с бекенда (данное требование описано в ТЗ), ввиду отсутствия бекенда данную операцию можно эмулировать, например через setTimeout + Promise
// 3. Таблицу с данными нужно сверстать самостоятельно, стили к ней тоже
// 4. Дефолтную сортировку по дате нужно сделать тоже самостоятельно
// 5. Нормализовать данные стаба для транзакций, в дате должна быть дата, во времени - время, формат хранения произвольный (подсказываю, что хранить и сортировать удобней будет через миллисекунды ), на интерфейс выводить например так, дата - 10.12.2019, время - 23:30
// 6. Требуется разобраться как сделать модальные окна ( подсказываю, в react-router, который использовался в данном приложении, есть достаточно простые инструкции как их сделать ). Если разобраться не получится, то по клику на транзакцию юзер должен перейти на отдельный роут с данными по ней. В обоих вариантах это должны быть данные той транзакции по которой кликнули, тоесть туда нужно будет прокинуть данные, которые отображены сейчас в таблице.