import React, { } from 'react';
import { AppBar, Toolbar } from "@material-ui/core";
import useScrollTrigger from '@mui/material/useScrollTrigger';

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

export default function NavBar(props) {

    /*    const menuOptions = [
           { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
           { name: "Website Development", link: "/websites", activeIndex: 1, selectedIndex: 1 },
           { name: "Mobile App Development", link: "/mobileapps", activeIndex: 1, selectedIndex: 2 },
           { name: "Custom Software Development", link: "/customsoftware", activeIndex: 1, selectedIndex: 3 }
       ]
   
       const routes = [
           { name: "Home", link: "/", activeIndex: 0 },
           { name: "Services", link: "/services", activeIndex: 1, ariaOwns: anchorEl ? "simple-menu" : undefined, ariaPopup: anchorEl ? true : undefined, mouseOver: (event) => handleClick(event) },
           { name: "The Revolution", link: "/revolution", activeIndex: 2 },
           { name: "Contact Us", link: "/contact", activeIndex: 3 },
           { name: "About Us", link: "/about", activeIndex: 4 },
       ] */

    return (
        <ElevationScroll>
            <AppBar>
                <Toolbar>Arc Development</Toolbar>
            </AppBar>
        </ElevationScroll>
    );
}
