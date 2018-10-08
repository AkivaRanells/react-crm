import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAfrica } from '@fortawesome/free-solid-svg-icons';
library.add(faGlobeAfrica);
function HotCountryBadge(props) {
    const hottestCountry=()=>{
        let counts  = {}, compare=0;
        let mostFrequent;
        for(let country of props.data){
            if(counts[country]===undefined){
                counts[country] = 1;
            }else{
                counts[country]+=1;
            }
            if(counts[country]>compare){
                compare=counts[country];
                mostFrequent=country;
            }
        }
        return mostFrequent;
    }
    return (
        <div className="badge">
            <FontAwesomeIcon icon="globe-africa" size="5x" color="Gold" />
            <div className="head">{hottestCountry()}<div className="bottom">Hottest Country</div></div>
        </div>
    )
}
export default HotCountryBadge