import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'


const BarChart = ({id}) => {
    const [name, setName] = useState([]);
  


    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://api.npms.io/v2/search?q=react')
            .then(response => response.json())
            .then(data => setName(data.total));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
   
    console.log("loc",name)
  return (
    <div>
        <h1>O3</h1>
      <Pie
        data={{
          labels: [name[0].day, name[30].day, name[60].day, name[90].day, name[120].day, name[150].day],
          datasets: [
            {
              label: '# of votes',
              data: [name[0].average, name[30].average, name[60].average, name[90].average, name[120].average, name[150].average],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  )
}

export default BarChart