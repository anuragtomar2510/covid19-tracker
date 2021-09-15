import React from 'react'
import {Box, Typography, makeStyles, Grid} from '@material-ui/core'
import CardComponent from './CardComponent'

const useStyles = makeStyles({

    component : {

        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
        margin: `20px 0`

    },

    container : {

        color: '#8ACA28',
       

    },

    lastUpdate : {

        color: '#777',
        fontSize : '6px',
        textAlign: 'center',
        marginBottom : 5
    
    
      }

})
const Cards = ({totalCases, activeCases, recovered, deaths, lastUpdate}) => {

    const classes = useStyles()

    return (
        <Box className={classes.component}>
            <Typography className={classes.container}>Covid-19 Global Stats</Typography>
            <Typography className={classes.lastUpdate}>Last updated : {new Date(lastUpdate).toDateString()}</Typography>
            <Grid container spacing={1} justify="center">
                
                <CardComponent
                    cardTitle="Total Cases"
                    value={totalCases}
                />

                <CardComponent
                     cardTitle="Active Cases"
                     value={activeCases}
                />

                <CardComponent
                     cardTitle="Recovered"
                     value={recovered}
                />

                <CardComponent
                     cardTitle="Deaths"
                     value={deaths}           
                />

            </Grid>
        </Box>
    )
}

export default Cards
