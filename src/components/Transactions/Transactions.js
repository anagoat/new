import React, { Component } from 'react';
import json from '../../assets/data.json';


import './Transactions.css';

class Transactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    
    componentDidMount() {
        let promise = new Promise(function(resolve, reject) {
            setTimeout(() => resolve(json), 100);
            });
        this.setState({ data:json })
    }

    render() {
        const { data } = this.state;
        return (
        <div className='Transactions' >
            <table key={data.id}>
                <thead>
                    <tr key={data.id}>
                        <th rowSpan="1">date</th>
                        <th rowSpan="1">time</th>
                        <th rowSpan="2">Recipient</th>
                        <th rowSpan="1">Sum</th>
                        <th rowSpan="1">transactionStatus</th>
                    </tr>
                    </thead>
                    {data ? data.map(data => 
                <tbody>
                    <tr key={data.id}>
                        <td rowSpan="1">{new Date(data.dateTime).getDate() + '.' + new Date(data.dateTime).getMonth() + '.' + new Date(data.dateTime).getFullYear()}</td>
                        <td rowSpan="1">{data.dateTime}</td>
                        <td rowSpan="1">{data.Recipient}</td>
                        <td rowSpan="1">{data.Sum}</td>
                        <td rowSpan="1">{data.transactionStatus}</td>
                    </tr>
                </tbody>
            ) : null}
            </table>
        </div>
        );
    }
}

export default Transactions;



// var time = 1575508169000
// new Date({data.dateTime}).getDate() + '.' + new Date({data.dateTime}).getMonth() + '.' + new Date({data.dateTime}).getFullYear();


// 1. Доработать валидацию на форме (требования описаны в ТЗ)
// - в поле логин сейчас можно вбить все что угодно
// - текстовки для ошибок логина не соответствуют реальной проблеме
// - валидация пароля работает не понятным образом, (Fffffffffffffffff1 - данный пароль считается не корректным, хотя он соответствует требованиям в ТЗ)
// - если было выведено сообщение о не валидном пароле, а затем он был изменен на валидный, то форма не сабмитится, вначале пропадет сообщение об ошибке и только при повторном нажатии на кнопку сабмит, он по факту происходит
// 2. Компонент Transactions при инициализации должен уметь спрашивать данные с бекенда (данное требование описано в ТЗ), ввиду отсутствия бекенда данную операцию можно эмулировать, например через setTimeout + Promise
// 3. Таблицу с данными нужно сверстать самостоятельно, стили к ней тоже
// 4. Дефолтную сортировку по дате нужно сделать тоже самостоятельно
// 5. Нормализовать данные стаба для транзакций, в дате должна быть дата, во времени - время, формат хранения произвольный (подсказываю, что хранить и сортировать удобней будет через миллисекунды ), на интерфейс выводить например так, дата - 10.12.2019, время - 23:30
// 6. Требуется разобраться как сделать модальные окна ( подсказываю, в react-router, который использовался в данном приложении, есть достаточно простые инструкции как их сделать ). Если разобраться не получится, то по клику на транзакцию юзер должен перейти на отдельный роут с данными по ней. В обоих вариантах это должны быть данные той транзакции по которой кликнули, тоесть туда нужно будет прокинуть Qданные, которые отображены сейчас в таблице.