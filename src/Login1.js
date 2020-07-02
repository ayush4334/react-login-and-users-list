import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            checkPassword: false,
        };

        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }

    dismissError() {
        this.setState({ error: '' });
    }

    handleUserChange(evt) {
        // if(!this.state.email){
        //     this.setState({error: 'Please enter a valid E-mail or Username'});
        // }
        // else{
        //     this.dismissError();
        // }
        this.setState({
            email: evt.target.value,
        });
    };

    handlePassChange(evt) {
        // if(!this.state.password){
        //     this.setState({error: 'Enter a valid password', checkPassword: false});
        // }
        // else{
        //     this.dismissError();
        // }
        this.setState({
            password: evt.target.value,
        });
        var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,100}$/;
        if(this.state.password){
            if(!this.state.password.match(decimal)) {
                this.setState({error: 'Password must contain min. 8 characters, at least one upper case, one lower case and one special character', checkPassword: false})
            }
            else{
                this.setState({checkPassword: true});
                this.dismissError();
            }
        }
    }

    render() {
        const { history } = this.props;
        return (
            <div className="FormCenter">
                <form className="FormFields">
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">E-mail/Username</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter E-mail/Username" name="email" value={this.state.email} onChange={this.handleUserChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handlePassChange} />
                    </div>
                    <div className="error-container">
                    {
                        this.state.error &&
                        <h3 className="show" data-test="error" onClick={this.dismissError}>
                            <button onClick={this.dismissError}>✖</button>
                            {this.state.error}
                        </h3>
                    }
                    </div>
                    <div className="FormField">
                        <button type="submit" onClick={() => history.push('/users')} className="FormField__Button mr-20" disabled={!this.state.email || !this.state.checkPassword}>Sign In</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignInForm);