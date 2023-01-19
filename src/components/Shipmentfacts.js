import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import shipment from '../assets/shipment.png'
import truck from '../assets/truck.png'
import pann from '../assets/package.png'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

const Shipmentfacts = () => {
    return (
        <>
            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: { xs: 3, md: 5 } }}>
                <Grid item xs={11} lg={8.3} sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: { xs: '20px', md: '30px' }, fontWeight: 300, mr: 1 }}>
                                        Shipment facts
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', mt: 2,mb:2}}>
                                    <Box component="img" alt="" src={shipment} sx={{ width: '26px', height: '26px', mr: 1 }} />
                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: { xs: '20px' }, fontWeight: 300, mr: 1 }}>
                                        Shipment Overview
                                    </Typography>
                                </Grid>
                                <Grid container sx={{ height: '31px', alignItems: 'center', backgroundColor: '#efefef' }}>
                                    <Grid item xs={6} md={4}>
                                        <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700 }}>
                                            TRACKING NUMBER
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} md={8}>
                                        <Typography variant="body2" sx={{ color: '#333333', fontSize: '14px', fontWeight: 300, mr: 1 }}>
                                        270109369099
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container sx={{ height: '31px', alignItems: 'center', backgroundColor: 'white' }}>
                                    <Grid item xs={6} md={4}>
                                        <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700 }}>
                                            TO DELIVER
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} md={8}>
                                        <Typography variant="body2" sx={{ color: '#333333', fontSize: '14px', fontWeight: 300, mr: 1 }}>
                                            Residence
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container sx={{ height: '31px', alignItems: 'center', backgroundColor: '#efefef' }}>
                                    <Grid item xs={6} md={4}>
                                        <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700 }}>
                                            SHIPPING DATE
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} md={8}>
                                        <Typography variant="body2" sx={{ color: '#333333', fontSize: '14px', fontWeight: 300, mr: 1 }}>
                                            11/22/2022
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container sx={{ height: '31px', alignItems: 'center', backgroundColor: 'white' }}>
                                    <Grid item xs={6} md={4}>
                                        <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700 }}>
                                        STANDARD TRANSIT
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} md={8}>
                                        <Typography variant="body2" sx={{ color: '#333333', fontSize: '14px', fontWeight: 300, mr: 1 }}>
                                        11/30/22 before 8:00 pm
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container sx={{ height: '31px', alignItems: 'center', backgroundColor: '#EFEFEF' }}>
                                    <Grid item xs={6} md={4}>
                                        <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700 }}>
                                        ACTUAL DELIVERY
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} md={8}>
                                        <Typography variant="body2" sx={{ color: '#333333', fontSize: '14px', fontWeight: 300, mr: 1 }}>
                                        11/30/22 at 10:33 am
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>


                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', mt: 2,mb:2 }}>
                                    <Box component="img" alt="" src={truck} sx={{ width: '26px', height: '26px', mr: 1 }} />
                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: { xs: '20px' }, fontWeight: 300, mr: 1 }}>
                                    Services
                                    </Typography>
                                </Grid>
                                <Grid container sx={{ height: '31px', alignItems: 'center', backgroundColor: '#efefef' }}>
                                    <Grid item xs={6} md={4}>
                                        <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700 }}>
                                        SERVICE
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} md={8}>
                                        <Typography variant="body2" sx={{ color: '#333333', fontSize: '14px', fontWeight: 300, mr: 1 }}>
                                        FedEx Express Saver
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container sx={{ height: '31px', alignItems: 'center', backgroundColor: 'white' }}>
                                    <Grid item xs={6} md={4}>
                                        <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700 }}>
                                        TERMS
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} md={8}>
                                        <Typography variant="body2" sx={{ color: '#333333', fontSize: '14px', fontWeight: 300, mr: 1 }}>
                                        Shipper
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container sx={{ height: '31px', alignItems: 'center', backgroundColor: '#efefef' }}>
                                    <Grid item xs={6} md={4}>
                                        <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700 }}>
                                        SPECIAL HANDLING 
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} md={8}>
                                        <Typography variant="body2" sx={{ color: '#333333', fontSize: '14px', fontWeight: 300, mr: 1 }}>
                                        Deliver Weekday
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', mt: 2,mb:2 }}>
                                    <Box component="img" alt="" src={pann} sx={{ width: '26px', height: '26px', mr: 1 }} />
                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: { xs: '20px' }, fontWeight: 300, mr: 1 }}>
                                     Package details
                                    </Typography>
                                </Grid>
                                <Grid container sx={{ height: '31px', alignItems: 'center', backgroundColor: '#efefef' }}>
                                    <Grid item xs={6} md={4}>
                                        <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700 }}>
                                        WEIGHT
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} md={8}>
                                        <Typography variant="body2" sx={{ color: '#333333', fontSize: '14px', fontWeight: 300, mr: 1 }}>
                                        0.5 lbs / 0.23 kgs
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container sx={{ height: '31px', alignItems: 'center', backgroundColor: 'white' }}>
                                    <Grid item xs={6} md={4}>
                                        <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700 }}>
                                        TOTAL PIECES
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} md={8}>
                                        <Typography variant="body2" sx={{ color: '#333333', fontSize: '14px', fontWeight: 300, mr: 1 }}>
                                        1
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container sx={{ height: '31px', alignItems: 'center', backgroundColor: '#efefef' }}>
                                    <Grid item xs={6} md={4}>
                                        <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700 }}>
                                        TOTAL SHIPMENT WEIGHT
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} md={8}>
                                        <Typography variant="body2" sx={{ color: '#333333', fontSize: '14px', fontWeight: 300, mr: 1 }}>
                                        33.06 lbs / 15 kgs
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container sx={{ height: '31px', alignItems: 'center', backgroundColor: 'white' }}>
                                    <Grid item xs={6} md={4}>
                                        <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700 }}>
                                        PACKAGING
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} md={8}>
                                        <Typography variant="body2" sx={{ color: '#333333', fontSize: '14px', fontWeight: 300, mr: 1 }}>
                                        FedEx Box
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Shipmentfacts