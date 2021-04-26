import React from 'react';
import "./UploadDocFields.css";
import NavigationBar from './NavigationBar';
import UploadNavBar from './UploadNavBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import HorizontalStepper from './HorizontalStepper';
import {IntlProvider} from '../node_modules/react-intl';
import post from './lib/API';
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const ContentUploader = require('../node_modules/box-ui-elements/es/elements/content-uploader/ContentUploader').default;

const ShowUploader = ({handleNext, folderID}) => {
    const [isLoading, setIsLoading] = React.useState(false);
    return(
        <div className="uploaderandbutton">
            <IntlProvider locale="en" className="ContentUploader">
                <ContentUploader
                    rootFolderId={folderID}
                    token={'rbBcwDnamXgAEjx3l1f2mxzg9oNsKwns'}
                />
            </IntlProvider>
            <div className="finishButton">
            <Button variant="contained" color="primary" onClick= {() => {
                setIsLoading(true);
                handleNext();
                }}>Finish</Button>
            </div>

        </div>
    );
}

const MetaDataFields = ({handleNext, setfolderID}) => {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [loanType, setLoanType] = React.useState("");
    const [notes, setNotes] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);

    return(
        <div className="fields">
            <div className="names">
                <TextField onChange={(e) => setFirstName(e.target.value)} value={firstName} className="firstname" id="standard-basic" label="First Name"/>
                <TextField onChange={(e) => setLastName(e.target.value)} value={lastName} className="lastname" id="standard-basic" label="Last Name"/>
            </div>
        <TextField onChange={(e) => setLoanType(e.target.value)} value={loanType} className="loantype" id="standard-basic" label="Loan Type (e.g. Home Loan)"/>
        <TextField
            onChange={(e) => setNotes(e.target.value)} value={notes} 
            className="notes"
            id="standard-multiline-static"
            label="Notes"
            multiline
            rowsMax={4}/>
            <div className="nextButton">
        <Button className="nextButton" onClick={ async () => {
            const data = {
                firstname: firstName,
                lastname: lastName,
                loantype: loanType,
                notes: notes
            };
            setIsLoading(true);
            const test = await post('http://localhost:5000/folderCreation', data);
            setfolderID(test.folderID);
            setIsLoading(false);
            handleNext();
            }}
            className="next" variant="contained" color="primary">
         {isLoading ? "Loading" : "Next"}
        </Button>
        </div>
        </div>
    );
}

export default function UploadDocFields({setfolderID, folderID}) {
    const [currentStep, setCurrentStep] = React.useState(0);
    const steps = [{
        label: "Enter Meta Data", 
        content: <MetaDataFields setfolderID={setfolderID} handleNext={() => 
            {setCurrentStep(currentStep + 1);
                
        }}/>,
    },
    {
        label: "Upload Documents", 
        content: <ShowUploader folderID={folderID} className="Content" handleNext={() => setCurrentStep(currentStep + 1)} />
    },
    {
        label: "Finish", 
        content: <div className="finish">
                  Successful Upload! 
                  <div className="extraText">
                  An agent will contact you when your loan has been processed.
                  </div>
                    <div className="checkMark">
                        <IoCheckmarkCircleSharp size="3em" color='green'/>
                    </div>
                 </div>
    }
];
        return(
            <div>
                <NavigationBar/>
                <span className="mainInfo">
                    <UploadNavBar/>
                <div className="stepperandfields">
                    <HorizontalStepper className="stepper" steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep}/>
                </div>
                </span>
            </div>
        )
    }
