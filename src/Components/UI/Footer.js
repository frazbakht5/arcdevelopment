import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import { Link } from 'react-router-dom';
import adornment from '../../assets/Footer Adornment.svg'

import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'


const useStyles = makeStyles(theme => ({
    footer: {
        width: '100%',
        backgroundColor: theme.palette.common.blue,
        zIndex: theme.zIndex.modal + 1,
        position: 'relative',
    },
    adornment: {
        width: '25em',
        verticalAlign: 'bottom',

        [theme.breakpoints.down("md")]: {
            width: '20em'
        },
        [theme.breakpoints.down("xs")]: {
            width: '15em'
        }
    },
    mainContainer: {
        position: 'absolute'
    },
    link: {
        color: 'white',
        fontFamily: 'Arial',
        fontSize: '0.75rem',
        fontWeight: 'bold',
        textDecoration: 'none'
    },
    gridItem: {
        margin: '3em'
    },
    icon: {
        height: '3em',
        width: '3em',

        [theme.breakpoints.down("md")]: {
            height: '2.5em',
            width: '2.5em',
        },
        [theme.breakpoints.down("xs")]: {
            height: '2.5em',
            width: '2.5em',
        }
    },
    socialIconContainer: {
        position: 'absolute',
        marginTop: '-6em',
        right: '1.5em'
    }

}));

export default function Footer(props) {

    const classes = useStyles();

    const links = [
        [
            { name: 'Home', link: '/', activeIndex: 0 }
        ],
        [
            { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
            { name: "Website Development", link: "/websites", activeIndex: 1, selectedIndex: 1 },
            { name: "Mobile App Development", link: "/mobileapps", activeIndex: 1, selectedIndex: 2 },
            { name: "Custom Software Development", link: "/customsoftware", activeIndex: 1, selectedIndex: 3 }
        ],
        [
            { name: "The Revolution", link: "/revolution", activeIndex: 2 },
            { name: "Vision", link: "/revolution", activeIndex: 2 },
            { name: "Technology", link: "/revolution", activeIndex: 2 },
            { name: "Process", link: "/revolution", activeIndex: 2 },
        ],
        [
            { name: "About Us", link: "/about", activeIndex: 4 },
            { name: "Mission Statement", link: "/about", activeIndex: 4 },
            { name: "History", link: "/about", activeIndex: 4 },
            { name: "Team", link: "/about", activeIndex: 4 },
        ],
        [
            { name: "Contact Us", link: "/contact", activeIndex: 3 },
        ]
    ]

    const columns = (
        <React.Fragment>
            {links.map((arr) => (
                <Grid item>
                    <Grid
                        container
                        direction="column"
                        spacing={2}
                        className={classes.gridItem}
                    >
                        {arr.map((col, index) => (
                            <Grid
                                item
                                onClick={() => { props.setValue(col.activeIndex); if (col.selectedIndex) props.setSelectedIndex(col.selectedIndex) }}
                                className={classes.link}
                                component={Link} to={col.link}
                            >
                                {col.name}
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            ))
            }
        </React.Fragment >
    )

    return (
        <React.Fragment>
            <footer
                className={classes.footer}
            >
                <Hidden mdDown>
                    <Grid container
                        className={classes.mainContainer}
                        spacing={0}
                        direction="row"
                        justifyContent="center">
                        {columns}
                    </Grid>
                </Hidden>
                <img alt="Fancy slash for designing" src={adornment} className={classes.adornment} />
                <Grid container spacing={2} className={classes.socialIconContainer} justifyContent="flex-end">
                    <Grid item component={"a"} href="https://www.facebook.com/" rel="noopener no referrer" target="_blank" >
                        <img src={facebook} alt='fb logo' className={classes.icon} />
                    </Grid>
                    <Grid item component={"a"} href="https://twitter.com/home?lang=en" rel="noopener no referrer" target="_blank">
                        <img src={twitter} alt='twitter logo' className={classes.icon} />
                    </Grid>
                    <Grid item component={"a"} href="https://www.instagram.com/" rel="noopener no referrer" target="_blank">
                        <img src={instagram} alt='instagram logo' className={classes.icon} />
                    </Grid>
                </Grid>
            </footer>


        </React.Fragment>
    );
}