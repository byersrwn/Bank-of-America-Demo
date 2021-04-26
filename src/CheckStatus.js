import React from 'react';
import "./CheckStatus.css";
import NavigationBar from './NavigationBar';
import UploadNavBar from './UploadNavBar';
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FcClock } from "react-icons/fc";
import post from './lib/API';

const Progress = () => {
    return(
        <div className="processing">
            <div className="title">Your loan is being processed.</div>
            <div className="subtext">Please check back later for further updates.</div>
            <FcClock className="progress" size="7em"/> 
        </div>
    )
}

const Complete = () => {
    return(
        <div className="processing">
            <div className="title">Your loan has been approved!</div>
            <IoCheckmarkCircleSharp className="complete" size="7em" color='green'/>
        </div>
    )
}

const DisplayIndicator = ({status}) => {
    if(status === ""){
        return(
            <div>Loading</div>
        );
    }

    else if(status === "Processing") {
        return (
            // <FcClock className="progress" size="7em"/> 
            <Progress/>
        );
    }

    return(
        // <IoCheckmarkCircleSharp className="complete" size="7em" color='green'/>
        <Complete/>
    )
}

const ShowStatus = (props) => {
    const [status, setStatus] = React.useState("");
    const obj = {
        folderID: props.folderID
    };
    post('http://localhost:5000/loanStatus', obj)
    .then(meta => {console.log(meta);
        setStatus(meta.status)})
    .catch(m => console.log("error " + m));
    
    return(
        <div>
            <DisplayIndicator status={status}/>
        </div>
    );
}

export default function CheckStatus({folderID}) {
    return(
        <div>
            <NavigationBar/>
            <span className="maininfo">
                <UploadNavBar/>
                <ShowStatus folderID={folderID}/>
            </span>
       </div>
    );
}  