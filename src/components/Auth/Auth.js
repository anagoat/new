import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../UI/Input/Input';
import  { withRouter } from 'react-router-dom';


import './Auth.css';

class Auth extends Component {
    constructor(props){
        super(props);

        this.state = {
            login: '',
            password: '',
            errorLogin: '',
            errorPassword: '',
            isSubmiting: false
        }

    }

    onChangeLogin = event => {
        const { value } = event.target;
        this.setState({
            login: value,
            errorLogin: ''
        } )
    }

    onChangePassword = event => {
        const { value } = event.target;
        this.setState({
            password: value,
            errorPassword: false
        })
    }

    submit(event){
        event.preventDefault();
       if ( this.isFormValid() === true ) {
            const { history }  = this.props;
            this.setState({ isSubmiting: true })
            history.push('/transactions');
       }
   }

   isFormValid(){
       let loginValid = false;
       let passwordValid = false;

       if (this.isLoginValid(this.state.login) === true) {
        loginValid = true;
       } 

       if (this.isPasswordValid(this.state.password) === true) {
        passwordValid = true;
       }

       if ((loginValid === true) && (passwordValid === true)) {
           return true
       }
   }

   isLoginValid(login){
       let errorLogin = '';

       if (login === '') {
           errorLogin = 'Введите логин';
           this.setState({ errorLogin : errorLogin });
           return false;
       }

       if (!login.match(/(?=^[A-Za-z]).*$/)) {
           errorLogin = 'Логин должен состоять из латинских букв';
           this.setState({ errorLogin : errorLogin });
           return false;
       }
       else { 
           return true };
   }

   isPasswordValid(password){
       let errorPassword = '';

       if (password === '') {
           errorPassword = 'Введите пароль';
           this.setState({ errorPassword: errorPassword });
           return false;
       }

       if ((!password.match(/(?=[A-Za-z0-9]{10,}$)(?=.*[A-Z])(?=.*[0-9]).*$/))) { 
           errorPassword = 'Пароль должен быть минимум 10 символов, иметь 1 заглавную букву и 1 цифру';
           this.setState({ errorPassword: errorPassword });
           return false;
       }
       else { 
           
        return true };
   }

        render() {
            const { errorLogin, errorPassword } = this.state;
            return (
            <div className="Auth">
                <form>
                    <h1>ебаная форма</h1>
                    <label>
                        <Input className="Input"
                            onChange={this.onChangeLogin.bind(this)}
                            value={this.state.login}
                        >
                        </Input>    
                        { errorLogin && <span className='ErrorMessege'>{errorLogin}</span>} 
                    </label> 

                    <label>
                        <Input className="Input"
                            onChange={this.onChangePassword.bind(this)}
                            value={this.state.password}
                        >
                        </Input>    
                        { errorPassword && <span className='ErrorMessege'>{errorPassword}</span>} 
                    </label>  

                    <button type='submit' onClick={this.submit.bind(this)}>Клацни</button>    
                </form>  
            </div>
        );
    }
}

Auth.propTypes = {
    onChange: PropTypes.func,
};

export default withRouter(Auth);