import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { NativeSelect, Typography, makeStyles } from '@material-ui/core'
import Chart from './Chart'


const useStyles = makeStyles({

    heading : {

        color : '#8ACA28',
        marginBottom : 10

    }
})
const AllCountries = () => {

    const classes = useStyles()


    const [countries, setCountries] = useState([])
    const [country, setCountry] = useState('India')

    useEffect(() => {

        const fetchAllCountries = async () => {

             try {

                    const res = await axios.get(`https://corona.lmao.ninja/v2/countries?yesterday&sort`)

                    const allCountriesName = res.data.map(item => item.country)

                    setCountries(allCountriesName)

             } catch(err) {

                    console.log(err)

             }
        }

        fetchAllCountries()

    }, [])



    return (
       <>
            <Typography className={classes.heading}>Covid-19 Stats by Country</Typography>
            <NativeSelect onChange= {(e) => setCountry(e.target.value)}>
                <option value="" >India</option>

                {
                    countries.map((country, index) => {

                        return (

                            <option key={index} value={country}>{country}</option>

                        )
                    })
                }
            </NativeSelect>

            <Chart country={country} />

       </>
    )
}

export default AllCountries
