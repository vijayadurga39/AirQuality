

import React, { useEffect, useState } from "react";

const Result=({id})=>{

    const [locations, setlocations] = useState([]);
  

    useEffect(() => {
      const getlocations = async () => {
        const response = await fetch(
          `https://docs.openaq.org/v1/locations/${id}?limit=10&page=1&offset=10&sort=desc&radius=1000&order_by=lastUpdated&dumpRaw=false`
        );
        const items = await response.json();
        console.log("result",items);

  
        setlocations(items["results"]);
      };
  
      getlocations();
    }, [id]);

return(
<div >
<h1>Id of location : {id} </h1>

<h2> 
    <ul>
{locations.map(location => ( 
        location["countsByMeasurement"].map(item=>
            <li>parameter : {item.parameter} <br></br> count: {item.count}</li>
        )
       
        )

        )

        }
        </ul>
</h2>
</div>
);


};

export default Result;