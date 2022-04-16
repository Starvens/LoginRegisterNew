import { Box, Typography } from '@mui/material'
import React from 'react'

export const ThirdPage = () => {
    return (
        <Box sx={{ height: '100vh', display: 'grid', gridTemplateRows: '3fr 1fr' }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: '3fr 2fr' }}>
                <Box>
                    <Typography
                        sx={{
                            fontWeight: "bold",
                            color: "#355E3B",
                            marginLeft: '2rem',
                            marginTop: '2rem',
                            fontSize: "44px",
                            fontFamily: "Montserrat",
                        }}
                    >
                        Manage your files at one location
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: "bold",
                            marginLeft: '2rem',
                            color: "#355E3B",
                            fontSize: "25px",
                            fontFamily: "Montserrat",
                        }}
                    >
                        manage all your files by storing and sharing across devices right from here.
                    </Typography>
                </Box>
                <Box>
                    <img src='/StoreAndShare.png' height='400' width='550'></img>
                </Box>
            </Box>
            <Box sx={{background: '#355E3B 0% 0% no-repeat padding-box'}}>
                <Typography
                    sx={{
                        fontWeight: "bold",
                        marginLeft: '2rem',
                        color: "#FFFFFF",
                        fontSize: "39px",
                        fontFamily: "Montserrat",
                        opacity: 1
                    }}
                >
                    Our Mission
                </Typography>
                <Typography
                    sx={{
                        fontStyle: 'italic',
                        color: "#FFFFFF",
                        marginLeft: '2rem',
                        fontSize: "29px",
                        fontFamily: "Montserrat",
                    }}
                >
                    At Starvens, we make customers more convenient by bringing all platforms together. We strive to improve continuously for customer satisfaction.
                </Typography>
            </Box>
        </Box>
    )
}
