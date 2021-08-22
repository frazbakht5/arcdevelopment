
import ButtonArrow from './ButtonArrow'

import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

    learnButtonHero: {
        borderColor: theme.palette.common.blue,
        color: theme.palette.common.blue,
        borderWidth: 2,
        textTransform: 'none',
        borderRadius: 50,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: '0.9rem',
        height: 45,
        width: 145,

    },

    servicesTextDescription: {
        marginTop: '0.8rem',
        maxWidth: '30em',
        [theme.breakpoints.down("xs")]: {
            // maxWidth: '25em'
        }
    },
    learnButtonServices: {
        marginTop: '0.8rem',
        [theme.breakpoints.down("xs")]: {
            marginBottom: '0.5em'
        }
    },
    servicesImage: {
        maxWidth: '7em',
    },
    mainContainer: {
        // maxWidth: '150em',
        marginBottom: '2em',
        // marginRight: '2em',
        // marginLeft: '2em',
        padding: 30,
        [theme.breakpoints.down("xs")]: {
            textAlign: 'center',
            marginLeft: 0,
            padding: 10
        }
    },
    specialText: {
        fontFamily: 'Pacifico',
        color: theme.palette.common.orange
    },
    information:{
        
    }


}));


export default function DisplayBlock(props) {

    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        < React.Fragment >
            <Grid
                container
                direction="row"
                justifyContent={matchesSM ? 'center' : props.align}
                // justifyContent="flex-end"
                alignItems="center"
                className={classes.mainContainer}
            >
                <Grid item className={classes.information}>
                    <Typography variant='h4'>
                        {props.title}
                    </Typography>
                    <Typography variant='subtitle1'>
                        {props.tagLine}
                    </Typography>
                    <Typography variant='subtitle1' className={classes.servicesTextDescription}>
                        {props.description}
                    </Typography>
                    <Button variant="outlined" className={[classes.learnButtonHero, classes.learnButtonServices].join(" ")}><span style={{ marginRight: 10 }}>Learn more</span>
                        <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} /></Button>
                </Grid>
                <Grid item>
                    <img src={props.img} alt='img' className={classes.servicesImage} />
                </Grid>
            </Grid>
        </React.Fragment >

    );
}








