import { Box } from '@mui/material'
import React from 'react'
import NavBar from "./NavBar";
import LandingPagePPT1 from "./LandingPagePPT1";
import PdfConversionImage from "./PdfConversionImage";

const FirstPage = () => {
    return (
        <Box sx={{height: '100vh'}}>
            <NavBar></NavBar>
            <LandingPagePPT1></LandingPagePPT1>
            <PdfConversionImage></PdfConversionImage>
        </Box>
    )
}

export default FirstPage