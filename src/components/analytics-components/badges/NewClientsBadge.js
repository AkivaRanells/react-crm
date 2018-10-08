import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
library.add(faChartLine);

function NewClientsBadge(props) {
    const thisMonthsClients = () => {
        const numClients = props.data.length;
        return numClients ;
    }
    return (
        <div className="badge">
            <FontAwesomeIcon icon="chart-line" size="5x" color="Green" />
            <div className="head">{thisMonthsClients()}<div className="bottom">New October clients</div></div>
            
        </div>
    )
}
export default NewClientsBadge