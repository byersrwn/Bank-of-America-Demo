import {Component} from 'react';
import "./EmployeeNavBar.css";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import history from './history';

export default class EmployeeNavBar extends Component {

    constructor(props){
        super(props)
    }
    render () {
        return(
            <div className="buttons">
            <ListItem button>
                <ListItemText onClick={() => {
                    history.push("/DownloadDocs")}
                    } primary="View Loan Documents"/>
            </ListItem>
            <ListItem button>
                <ListItemText primary="Check Loan Status" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Completed Loans" />
            </ListItem>
            </div>
        )
    }
}