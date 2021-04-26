import "./ViewDocs.css";
import React from 'react';
import {IntlProvider} from '../node_modules/react-intl';
import NavigationBar from './NavigationBar';
import UploadNavBar from './UploadNavBar';
import { ContentExplorer } from 'box-ui-elements';


const ShowExplorer = ({folderID}) => {
    // const [isLoading, setIsLoading] = React.useState(false);
    return(
        <div>
            <IntlProvider locale="en">
                <div className="contentExplorer"> 
                <ContentExplorer
                    rootFolderId={folderID}
                    token={'rbBcwDnamXgAEjx3l1f2mxzg9oNsKwns'}
                    logoUrl={'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bankofamerica.com%2F&psig=AOvVaw0-birVLSkkxtYgN3a7jeBI&ust=1619386978857000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDnrebsl_ACFQAAAAAdAAAAABAO'}
                />
                </div>
            </IntlProvider>
        </div>
    );
}

export default function ViewDocs({folderID}) {
    return(
        <div>
        <NavigationBar/>
            <span className="mainInfo">
                <UploadNavBar/>
                <div className="explorer">
                <ShowExplorer folderID={folderID} className="content"/>
                </div>
            </span>
       </div> 
    )
}
