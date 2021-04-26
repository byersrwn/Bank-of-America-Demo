import "./UploadNavBar.css";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import history from './history';

export default function UploadNavBar(){

        return(
            <div className="buttons">
            <ListItem button>
                <ListItemText onClick={() => {
                    history.push("/DocInfo");
                    }} primary="Upload Loan Documents"/>
            </ListItem>

            <ListItem button>
                <ListItemText onClick={() => {
                    history.push("/ViewDocuments");
                }} primary="View Loan Documents"/> 
            </ListItem>

            <ListItem onClick={() => {
                    history.push("/Check")}} button>
            <ListItemText primary="Check Loan Status" />
            </ListItem>

            <ListItem button>
                <ListItemText primary="Contact An Agent" />
            </ListItem>
            </div>
        )
}