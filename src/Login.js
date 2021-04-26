import {useState} from 'react';
import Button from '@material-ui/core/Button';
import history from './history';


export default function Login() {

    const [onlineID, changeOnlineID] = useState("");

   function handleChange(e) {
        changeOnlineID(e.target.value);
    }

   function handleSubmit(e) {
        if(onlineID == "David_Smith"){
            history.push("/Upload");
        }
    }

    return(
        <div className="login-components">
            <form className="onlineID">
            <input className="onlineinput" onChange={handleChange} type="text" placeholder="Online ID"></input>
            </form>
            <form className="Passcode">
            <input className="passcodeinput" type="password" placeholder="Passcode"></input>
            </form>
            <form className="save-checkbox">
                <input type="checkbox"></input>
                <label>Save Online ID</label>
            </form>
            <div className="additions">
                <span>Forgot Password?</span>
                <span>Create Account</span>
            </div>
            <Button onClick={handleSubmit}
                variant="contained" color="secondary">
                Sign In
            </Button>
        </div>
    );
}