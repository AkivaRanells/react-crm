import React from 'react';
import Badges from './badges/Badges';
import Charts from './charts/Charts';
function AnalyticsPage(props) {
        return (
            <div>
                <Badges data={props.data}/>
                <Charts data={props.data} />
            </div>
        )
}
export default AnalyticsPage;