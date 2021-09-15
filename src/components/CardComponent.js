import React from 'react'
import { CardContent, Typography, Grid, Box, Card, makeStyles } from '@material-ui/core'
import CountUp from 'react-countup'

const useStyles = makeStyles({

    cardStyles: {

        margin: 20,
        borderBottom : '5px solid #8ACA28'

    },

    heading : {

        backgroundColor : '#F5F5F5',
        padding: 10,
        textAlign: 'center'

    }

})

const CardComponent = ({cardTitle, value}) => {

    const classes = useStyles()

    return (
        <Grid component={Card} className={classes.cardStyles}>
            <Box className={classes.heading}>
                <Typography variant="h6" color="textSecondary">{cardTitle}</Typography>
            </Box>
            <CardContent>
                <Typography variant="h6">
                    <CountUp

                        start={0}
                        end={value}
                        duration={1}
                        separator=","

                    />    
                </Typography>
            </CardContent>
        </Grid>
    )
        
    
}

export default CardComponent
