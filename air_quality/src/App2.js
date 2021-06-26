import React, { useState } from 'react';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

/**
 * App
 *
 * Simple react js fetch example
 */
class App extends React.Component {

    /**
     * constructor
     *
     * @object  @props  parent props
     * @object  @state  component state
     */
    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false,
            option:2
        }

    };
  

    /**
     * componentDidMount
     *
     * Fetch json array of objects from given url and update state.
     */
    componentDidMount() {

        fetch('https://docs.openaq.org/v2/locations?limit=100&page=1&offset=0&sort=desc&radius=1000&country_id=GB&country=GB&city=London&order_by=lastUpdated&dumpRaw=false')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }

    /**
     * render
     *
     * Render UI
     */
    render() {

        const { isLoaded, items } = this.state;
        const [option,setOption] = useState(0);

       const onChange = (event) => {
        console.log("change", event.target.value);
      };

        if (!isLoaded)
            return <div>Loading...</div>;
            console.log(items["results"][0]);
            const options=[];
            items["results"].map(item => (
              options.push({value:item['id'],label:item["name"]})
                 
             ))
             console.log(options)
        return (
            <div className="App">
          
                <ul>
                  SENSOR LOCATIONs IN LONDON :
                  
<Dropdown options={options} onChange={(e)=>(setOption(e.target.value))} value={0} placeholder="Select an option" />;
                 
                </ul>
              <h1>{option}</h1>
            </div>
        );

    }

}

export default App;