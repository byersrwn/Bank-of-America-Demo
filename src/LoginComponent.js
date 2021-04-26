import {Component} from 'react';
import NavigationBar from './NavigationBar';
import "./LoginComponent.css";
import LoginBox from './LoginBox';

export default class LoginComponent extends Component {

    render() {
        return (
            <div>
                <NavigationBar/>
                <LoginBox/>
            </div>
        );
    }
}