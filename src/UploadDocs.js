import './UploadDocs.css';
import {Component} from 'react';
import NavigationBar from './NavigationBar';
import UploadNavBar from './UploadNavBar';
import Button from '@material-ui/core/Button';
import history from './history';




export default class UploadDocs extends Component {

    render () {
        return(
            <div>
                <NavigationBar/>
                <UploadNavBar/>
                <Button onClick={() => {
                    history.push("/Finish")}}
                    className="finish" variant="contained" color="primary">
                    Finish
                </Button>
            </div>
        );
    }

}