import {Component} from 'react';
import "./Upload.css";
import NavigationBar from './NavigationBar';
import UploadNavBar from './UploadNavBar';

export default class Upload extends Component {


    render () {
        return(
            <div className="navElements">
                <NavigationBar/>
                <span className="maininfo">
                    <UploadNavBar/>
                    <div className="text">
                        <div className="title">
                            Welcome David Smith! 
                        </div>
                        <div className="description">
                            Please choose one of the available options on the left to get started.
                        </div>
                    </div>
                </span>
            </div>
        )
    }
}