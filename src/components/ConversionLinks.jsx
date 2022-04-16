import { Box, Typography } from '@mui/material'
import React from 'react'

const ConversionLinks = () => {
    return (
        <Box sx={{ height: '100vh' }}>
            <Typography
                sx={{
                    fontWeight: "bold",
                    marginLeft: "2rem",
                    color: "#355E3B",
                    fontSize: "54px",
                    fontFamily: "Montserrat",
                    textAlign: "center"
                }}
            >
                Simplify your workflow
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginTop: '3rem', gridGap: '1rem' }}>
                <Box>
                    <Typography
                        sx={{
                            fontWeight: "bold",
                            marginLeft: "2rem",
                            color: "#355E3B",
                            fontSize: "54px",
                            fontFamily: "Montserrat",
                            textAlign: "center"
                        }}
                    >
                        Text to Audio
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: "bold",
                            marginLeft: "2rem",
                            color: "#355E3B",
                            fontSize: "27px",
                            fontFamily: "Montserrat",
                            textAlign: "center"
                        }}
                    >
                        convert .txt, .pdf, .png, .jpg formats to mp3 with various features.
                    </Typography>

                </Box>
                <Box>
                    <Typography
                        sx={{
                            fontWeight: "bold",
                            marginLeft: "2rem",
                            color: "#355E3B",
                            fontSize: "54px",
                            fontFamily: "Montserrat",
                            textAlign: "center"
                        }}
                    >
                        Audio to Text
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: "bold",
                            marginLeft: "2rem",
                            color: "#355E3B",
                            fontSize: "27px",
                            fontFamily: "Montserrat",
                            textAlign: "center"
                        }}
                    >
                    convert mp3, mp4 formats to .txt, .pdf, .png, .jpg with various features.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default ConversionLinks