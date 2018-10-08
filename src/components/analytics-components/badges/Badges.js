import React from 'react';
import NewClientsBadge from './NewClientsBadge';
import EmailBadge from './EmailBadge';
import TotalClientsBadge from './TotalClientsBadge';
import HotCountryBadge from './HotCountryBadge'
import './badges.css';
function Badges(props) {
    return (
        <div>
            <NewClientsBadge data={props.data.filter(d => d.firstContact.slice(0, 7)==="2018-10")} />
            <EmailBadge data={props.data.filter(d=> d.emailType!==null)} />
            <TotalClientsBadge data={props.data.filter(d=> !d.sold)} />
            <HotCountryBadge data={props.data.map(d=> d.country)} />
        </div>
    )
}
export default Badges