import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
library.add(faUserCircle);
function TotalClientsBadge(props) {
    const totalNotSold=()=>{
        const numNotSold = props.data.length;
        return numNotSold;
    }
    return (
        <div className="badge">
            <FontAwesomeIcon icon="user-circle" size="5x" color="Red" />
            <div className="head">{totalNotSold()}<div className="bottom">Total Outstanding Clients</div></div>
        </div>
    )
}
export default TotalClientsBadge