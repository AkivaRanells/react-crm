import React from 'react';
import TopEmployees from './TopEmployees';
import SalesBy from './SalesBy';
import SalesSince from './SalesSince';
import ClientAcquisition from './ClientAcquisition'
function Charts(props) {
        return (
            <div>
               <TopEmployees data={props.data.filter(d=>d.sold).map(d=>d.owner)} /> 
               <SalesBy data={props.data} />
               <SalesSince data={props.data} />
               <ClientAcquisition data={props.data} />
            </div>
        )
}
export default Charts