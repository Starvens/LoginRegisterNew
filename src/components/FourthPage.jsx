import { Box, Typography } from '@mui/material'
import React from 'react'

const FourthPage = () => {
    return (
        <Box sx={{ height: '100vh', display: 'grid', gridTemplateRows: '3fr 1fr', marginTop: '2rem' }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: '3fr 2fr' }}>
                <Box>
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            color: "#355E3B",
                            marginLeft: '2rem',
                            fontSize: "44px",
                            fontFamily: "Montserrat",
                        }}
                    >
                        Mobile version will be releasing soon convert and organize your files from anywhere
                    </Typography>
                </Box>
                <Box>
                    <img style={{ marginLeft: '10rem' }} src='/phoneScreen.png'></img>
                </Box>
            </Box>
            <Box sx={{ background: '#355E3B 0% 0% no-repeat padding-box;' }}>
                <Box sx={{ display: 'flex', marginTop: '1rem' }}>
                    <Box sx={{display: 'flex',  marginRight: '3rem' }}>
                        <img src='FooterLogo.png'></img>
                    </Box>
                    <Box sx={{ marginRight: '5rem' }}>
                        <Typography
                            sx={{
                                fontSize: "28px",
                                color: "#F8F8F8",
                                fontWeight: "bold",
                                fontFamily: "Montserrat",
                            }}
                        >
                            Products
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "21px",
                                color: "#F8F8F8",
                                fontWeight: "bold",
                                fontFamily: "Montserrat",
                            }}
                        >
                            text to audio
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "21px",
                                color: "#f8f8f8",
                                fontWeight: "bold",
                                fontFamily: "Montserrat",
                            }}
                        >
                            audio to text
                        </Typography>
                    </Box>
                    <Box sx={{ marginRight: '5rem' }}>
                        <Typography
                            sx={{
                                fontSize: "28px",
                                color: "#F8F8F8",
                                fontWeight: "bold",
                                fontFamily: "Montserrat",
                            }}
                        >
                            Company
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "21px",
                                color: "#F8F8F8",
                                fontWeight: "bold",
                                fontFamily: "Montserrat",
                            }}
                        >
                            text to audio
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "21px",
                                color: "#f8f8f8",
                                fontWeight: "bold",
                                fontFamily: "Montserrat",
                            }}
                        >
                            audio to text
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: "28px",
                                color: "#F8F8F8",
                                fontWeight: "bold",
                                fontFamily: "Montserrat",
                            }}
                        >
                            Support
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "21px",
                                color: "#F8F8F8",
                                fontWeight: "bold",
                                fontFamily: "Montserrat",
                            }}
                        >
                            text to audio
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "21px",
                                color: "#f8f8f8",
                                fontWeight: "bold",
                                fontFamily: "Montserrat",
                            }}
                        >
                            audio to text
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    textAlign: 'center',
                    fontSize: '22px',
                    color: '#F8F8F8',
                    marginTop: '2rem',
                    fontFamily: 'Montserrat',
                    fontWeight: 'bold'
                }}>
                    Copyright 2022 Starvens.com - All Rights Reserved
                </Box>
            </Box>
        </Box>
    )
}

export default FourthPage