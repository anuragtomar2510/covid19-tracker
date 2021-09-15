import React, {useState, useEffect} from 'react';
import {Box, makeStyles, Typography} from '@material-ui/core'
import logo from './images/img1.png'
import Cards from './components/Cards'
import AllCountries from './components/AllCountries'
import axios from 'axios'
import './App.css';

const useStyles = makeStyles({

  container : {

    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'center'


  },

  heading : {

    backgroundColor : '#F5F5F5',
    color : '#777',
    width : '300px',
    padding : '2px',
    fontSize : '12px',
    textAlign : 'center'

  },

  image : {

    width: '304px',
    height: '120px',
    margin : '2px 0 0 0'
   

  },



})

const initialState = {

  totalCases : '',
  activeCases : '',
  recovered : '',
  deaths : '',
  lastUpdate : ''

}

function App() {

  const [data, setData] = useState(initialState);

  useEffect(() => {

    const fetchData = async () => {

        try {

              const res = await axios.get(`https://corona.lmao.ninja/v2/all?yesterday`)

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

  }, [])

  const classes = useStyles()


  const {

    totalCases,
    activeCases,
    recovered,
    deaths,
    lastUpdate

  } = data

  return (
    
      <Box className={classes.container}>
        <Box className={classes.heading}>Covid-19 Tracker</Box>
        
        <img className={classes.image} src={logo} alt="covid-19 image" />
        <Cards totalCases={totalCases} activeCases={activeCases} recovered={recovered} deaths={deaths} lastUpdate={lastUpdate} />
        <AllCountries />
      </Box>
  
  );
}

export default App;
