import { Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <>
            <Grid container sx={{ height: '75px', backgroundColor: '#4d148c', display: 'flex', justifyContent: 'center', alignItems: { xs: 'normal', md: 'center' }, position: 'sticky', top: 0, zIndex: 1, mt: 5,pt:{xs:1,md:0} }}>
                <Grid item xs={11} lg={8.3} sx={{ display: 'flex', alignItems: { xs: 'normal', lg: 'center' }, justifyContent: "space-between" }}>
                    <Grid container>
                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'left' } }}>
                            <Typography variant="body2" sx={{ color: 'white', fontSize: '14px', fontWeight: 300, mr: 1, mb: 1 }}>
                                © FedEx 1995-2022
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{display:'flex',justifyContent:{xs: 'center', md: 'right'}}}>
                            <Typography variant="body2" sx={{ color: 'white', fontSize: '14px', fontWeight: 300, mr: 1, mb: 1, borderRight:1,pr:3 }}>
                                Site Map
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'white', fontSize: '14px', fontWeight: 300, mr: 1, mb: 1, borderRight:1,pr:3 }}>
                                Term Of Use
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'white', fontSize: '14px', fontWeight: 300, mr: 1, mb: 1 }}>
                            Privacy & Security
                            </Typography>
                        </Grid>
                        <Grid item xs={12}></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer