import {Component} from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import Upload from './Upload'
import LoginComponent from './LoginComponent'
import history from './history';
import UploadDocFields from './UploadDocFields';
import UploadDocs from './UploadDocs';
import ViewDocs from './ViewDocs';
import CheckStatus from './CheckStatus';

export default class Routes extends Component {

    constructor(){
        super();
        this.state = {folderID: ""}
        this.setfolderID = this.setfolderID.bind(this);
    }

    setfolderID(folderID){
        console.log("logging");
        console.log(folderID);
        this.setState({folderID: folderID})
    }
    
    render () {
        return (
            <Router history={history}>
                <Switch>
                <Route path="/" exact component={LoginComponent}/>
                <Route path="/Upload" exact component={Upload}/>
                <Route path="/DocInfo" exact render={(props) => (<UploadDocFields {...props} setfolderID={this.setfolderID} folderID={this.state.folderID} />)}/>
                <Route path="/UploadDocs" exact component={UploadDocs}/>
                <Route path="/ViewDocuments" exact render={(props) => (<ViewDocs {...props} setfolderID={this.setfolderID} folderID={this.state.folderID} />)}/>
                <Route path="/Check" exact render={(props) => (<CheckStatus {...props} setfolderID={this.setfolderID} folderID={this.state.folderID}/>)}/>
                </Switch>
            </Router>
        )
    }
}