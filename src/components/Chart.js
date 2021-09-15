import React, {useState, useEffect} from 'react'
import { Bar } from 'react-chartjs-2';
import { Box, makeStyles } from '@material-ui/core'
import axios from 'axios'

const initialState = {

    totalCases : '',
    activeCases : '',
    recovered : '',
    deaths : '',
    lastUpdate : ''
  
  }

const useStyles = makeStyles({
    container : {
        width: '75%',
        marginTop: 30,
        marginBottom: 30
    }
})

const Chart = ({country}) => {

    const [data, setData] = useState(initialState);



    useEffect(() => {

        const fetchData = async () => {
    
            try {
    
                  const res = await axios.get(`https://corona.lmao.ninja/v2/countries/${country}?yesterday`)
    
                  console.log(res.data)
                  setData({
    
                    totalCases : res.data.cases,
                    activeCases : res.data.active,
                    recovered : res.data.recovered,
                    deaths : res.data.deaths,
                    lastUpdate : res.data.updated

                  })
    
                 
    
                 
    
            } catch(err) {
    
                  console.log(err)
    
            }
    
        }
    
        fetchData()
    
      }, [country])
    
      const classes = useStyles()
    
    
      const {
    
        totalCases,
        activeCases,
        recovered,
        deaths,
        lastUpdate
    
      } = data


    return (
        <Box className = {classes.container}>
            
            <Bar 
                data = {{
                    labels: ['Total Cases', 'Active Cases', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'No. of Peoples',
                        data: [totalCases, activeCases, recovered, deaths],
                        backgroundColor: [
                            '#f70d1a',
                            '#fa5c65',
                            '#008000',
                            '#2707f2',
                        ],
                    }]
                }}
                options = {{
                    legend: {display: false},
                    
                }}
                
            /> 
      
        </Box>
            
    )
}

export default Chart;