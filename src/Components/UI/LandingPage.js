import Lottie from 'react-lottie';
import animationData from '../animations/landinganimation/data'
import ButtonArrow from './ButtonArrow'

import DisplayBlock from './ServiceDisplayBlock';

import customSoftwareIcon from '../../assets/Custom Software Icon.svg'
import mobileAppsIcon from '../../assets/mobileIcon.svg'
import websiteIcon from '../../assets/websiteIcon.svg'

import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    animation: {
        maxWidth: '38em',
        minWidth: '21em',
        marginTop: '2em',
        marginLeft: '3.5%',
        [theme.breakpoints.down("sm")]: {
            maxWidth: '30em',
        },
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: '50px',
        height: 45,
        width: 145,
        marginRight: '40px',
        backgroundColor: theme.palette.common.orange,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    buttonContainer: {
        marginTop: '1em'
    },
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
    mainContainer: {
        marginTop: '5em',

        [theme.breakpoints.down("md")]: {
            marginTop: '3em'
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: '2em'
        }
    },
    textContainer: {
        minWidth: '25em',
        [theme.breakpoints.down("xs")]: {
            // marginLeft: '2em'
        }
    },

    /**************************************/

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
    servicesContainer: {
        marginTop: '5em',
        // marginRight: '2em',
        // marginLeft: '2em',
        [theme.breakpoints.down("xs")]: {
            textAlign: 'center',
            marginLeft: 0,
            padding: 10
        },
        [theme.breakpoints.down("xl")]: {
            paddingLeft: '10%',
            paddingRight: '10%'
        }
    },
    specialText: {
        fontFamily: 'Pacifico',
        color: theme.palette.common.orange
    }
}));

export default function LandingPage(props) {

    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    const serviceBlockDetails = [
        { title: "Custom Software Development", 
        tagLine: "Save Energy. Save Time. Save Money.", 
        description: "Complete digital solutions, from investigation to celeberation.", 
        img: customSoftwareIcon, 
        link: '' },

        { title: "Mobile App Development", 
        tagLine: "Extend Functionality. Extend Access. Increase Engagement.", 
        description: "Integrate your web experience or create a standalone app with either android or iOS platform.", 
        img: mobileAppsIcon, 
        link: '' },

        { title: "Website Development", 
        tagLine: "Reach More. Discover More. Sell More.", 
        description: "Optimized for Search Engines, build for speed and usability.", 
        img: websiteIcon, 
        link: '' },

    ]

    const defaultOptions = {
        loop: true,
        autoplay: false,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const heroBlock = (
        <Grid item>{/***************HERO BLOCK***********************/}
            <Grid container direction="row" justifyContent="flex-end" alignItems="center" className={classes.heroContainer}>
                <Grid sm item className={classes.textContainer}>
                    <Typography variant='h2' align='center'>Bringing West Coast Technology
                        <br />
                        to the Midwest
                    </Typography>
                    <Grid container justifyContent="center" className={classes.buttonContainer}>
                        <Grid item >
                            <Button variant="contained" className={classes.estimateButton}>Free Estimate</Button>
                        </Grid>
                        <Grid item >
                            <Button variant="outlined" className={classes.learnButtonHero}><span style={{ marginRight: 10 }}>Learn more</span>
                                <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} /></Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.animation}>
                    <Lottie options={defaultOptions} />
                </Grid>
            </Grid>
        </Grid>
    )

    const servicesBlock = (
        <Grid item>{/***************SERVICES BLOCK***********************/}
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent={matchesSM ? 'center' : undefined}
                className={classes.servicesContainer}
            >
                {serviceBlockDetails.map((block, i) => (
                    <DisplayBlock title={block.title} tagLine={block.tagLine}
                        description={block.description} img={block.img} link={block.link} align={(i%2 === 0) ? undefined : 'flex-end'} />
                ))}
            </Grid>
        </Grid>
    )
    return (
        <React.Fragment>
            <Grid container direction="column" className={classes.mainContainer}
            // spacing={3}
            >
                {heroBlock}
                {servicesBlock}
            </Grid>
        </React.Fragment>
    );
}