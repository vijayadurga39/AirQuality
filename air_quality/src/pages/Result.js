

import React, { useEffect, useState } from "react";

const Result=({id})=>{

    const [locations, setlocations] = useState([]);
  

    useEffect(() => {
      const getlocations = async () => {
        const response = await fetch(
          "https://docs.openaq.org/v2/locations?limit=100&page=1&offset=0&sort=desc&radius=1000&country_id=GB&country=GB&city=London&order_by=lastUpdated&dumpRaw=false"
        );
        const items = await response.json();
        console.log("result",items);

  
        setlocations(items["results"]);
      };
  
      getlocations();
    }, [id]);

     
return(
  
<div >

<h3> 
    <ul>
{locations.map(location => ( 
  (location.id==id?(
    <>
     <h1 style={{textAlign:"center",color:"darkblue"}}>{location.name}</h1>
{
       location["parameters"].map(item=>
          ((item.parameter==="no2" ||item.parameter==="o3") ? <>
         
          <div class="card">
            
  <p style={{color:"blue"}}>{item.average} µg/m³</p>
  
  
  <div className="container">

    <h5><b>Parameter</b></h5>
    <p style={{color:"blue"}}>{item.parameter}</p>
  </div>
</div>
</>
         : " ")
       )
        
       }
       </>
   ) :  " " )
       
        )

        )

        }
        </ul>
</h3>
</div>
);


};

export default Result;