import React from 'react';

import { Link } from "react-router-dom";

import {   
  Group,
//   Linkedin,
  Github,
} from 'grommet-icons';
import { deepMerge } from 'grommet/utils';

import { Anchor, Box, Footer, Grommet, grommet, Text} from 'grommet';

const customTheme = deepMerge(grommet, {
    global: {
      colors: {      
        // Setting new colors
        blue: "#00C8FF",
        black: "#6F7269",
        green: "#749A5C",
        roobois: "#FC6161",
        purple: "#A2065A",
        white: "#FBFBF7",
        red: "#EE6373",
        orange: "#FFBC44",
        yellow: "#FFEB59",     
        
        },
        font: {
            family: `Abhaya Libre`,
        },      
    },
});

function Foot () {
  
    return (
        <Grommet theme={customTheme} style={{marginTop: "auto"}}>
            <Footer background="light-6">
                <Box align="center" direction="row" margin={{left:"20px"}}>
                    
                    <Text alignSelf="center" color="black" size="small" >
                    Thanks for visiting!
                    </Text>
                </Box>
                <Box direction="row" justify="center" style={{margin: "0 auto"}}>
                    <Anchor
                    a11yTitle="Share feedback on Github"
                    href="https://github.com/Gintstir/finalpv1"
                    icon={<Github color="black" size="large"/>}
                    />
                    <Link to="/about">
                        <Box pad="12px">
                            <Group color="black" size="large" a11yTitle="About us"/>
                        </Box>
                    </Link>
                    {/* <Anchor
                    a11yTitle="Give us a Job!"
                    href="https://twitter.com/"
                    icon={<Linkedin color="brand" />}
                    /> */}
                </Box>
                <Box align="center" direction="row" margin={{right:"20px"}}>
                    <Text alignSelf="center" textAlign="end" color="black" size="small" >
                    ??Copyright, 2021
                    </Text>
                </Box>
            </Footer>
        </Grommet>
    )
};

export default Foot;

