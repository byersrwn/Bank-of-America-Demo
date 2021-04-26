import {Component} from 'react';
import "./LoginBox.css";
import Button from '@material-ui/core/Button';
import history from './history';

export default class LoginBox extends Component {

    LoginBox() {
        return(
            <div className="login-components">
                
                <input className="onlineinput" type="text" placeholder="Online ID"></input>
                <form className="Passcode">
                <input className="passcodeinput" type="text" placeholder="Passcode"></input>
                </form>
                <form className="save-checkbox">
                    <input type="checkbox"></input>
                    <label>Save Online ID</label>
                </form>
                <div className="additions">
                    <span>Forgot Password?</span>
                    <span>Create Account</span>
                </div>
                <div className="signin">
                    <Button onClick={() =>
                        history.push("/Upload")}
                        width="10px" className="finish" variant="contained" color="secondary">
                        Sign In
                    </Button>
                </div>
            </div>
        );
    }

    render(){
        return(
            <this.LoginBox></this.LoginBox>
        );
     }
}