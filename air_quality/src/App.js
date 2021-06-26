import React, { useEffect, useState } from "react";
import Result from './Result';
import {Switch,Route,useHistory} from 'react-router-dom'

const App = () => {
  const [locations, setlocations] = useState([]);
  

  useEffect(() => {
    const getlocations = async () => {
      const response = await fetch(
        "https://docs.openaq.org/v2/locations?limit=100&page=1&offset=0&sort=desc&radius=1000&country_id=GB&country=GB&city=London&order_by=lastUpdated&dumpRaw=false"
      );
      const items = await response.json();
      

      setlocations(items["results"]);
    };

    getlocations();
  }, []);
  //let history=useHistory();
  //const x=locations[0]["id"]
  
  const [selected,setSelected]=useState(60);

  return (
    <div className="App">
      <h1>  SENSOR LOCATIONS IN LONDON :</h1>
      <h2>selected option: {selected}</h2>
      <select value={selected} onChange={(e)=>{setSelected(e.target.value)}}>
        {locations.map(location => ( 
       <option value={location["id"]}>{location["name"]}</option>
        )

        )

        }
      </select>
      
      <button onClick={()=>{
        console.log("result")
       // history.push("/Result")
      }}>search</button>

      <Result id={selected} />
    </div>
  );
};

export default App;