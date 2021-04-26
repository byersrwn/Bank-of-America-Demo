import './HorizontalStepper.css'
import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';


// function getSteps() {
//     return ['Specify Meta Data', 'Upload Documents', 'Finish'];
// }

// function getStepContent(step) {
//     switch (step) {
//       case 0:
//         return 'Specify MetaData';
//       case 1:
//         return 'Upload Documents';
//       case 2:
//         return 'Finish';
//       default:
//         return 'Unknown step';
//     }
//   }

export default function HorizontalLinearStepper( { steps, currentStep, setCurrentStep }) {
    return (
        <div>
            <Stepper  activeStep={currentStep}>
            {steps.map((step, index) => {
            return (
                <Step key={index}>
                <StepLabel>{step.label}</StepLabel>
                </Step>
            );
            })}
        </Stepper>
        {steps[currentStep].content}
        </div>
    );
}