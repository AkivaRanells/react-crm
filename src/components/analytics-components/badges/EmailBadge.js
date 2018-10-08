import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelopeSquare);
function EmailBadge(props) {
    const totalEmails=()=>{
        const numEmails = props.data.length;
        return numEmails;
    }
    return (
        <div className="badge">
            <FontAwesomeIcon icon="envelope-square" size="5x" color="DodgerBlue" />
            <div className="head">{totalEmails()}<div className="bottom">Emails Sent</div></div>
        </div>
    )
}
export default EmailBadge