import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Travel = () => {
    return (
        <>
            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: { xs: 3, md: 5 } }}>
                <Grid item xs={11} lg={8.3} sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                    <Typography variant="body2" sx={{ color: '#333333', fontSize: { xs: '20px', md: '30px' }, fontWeight: 300, mr: 1 }}>
                        Travel History
                    </Typography>
                </Grid>
            </Grid>

            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: { xs: 2, md: 3 } }}>
                <Grid item xs={11} lg={8.3} sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                    <Grid container>
                        <Grid item xs={11} sx={{ ml: '85px' }}>
                            <Typography variant="body2" sx={{ color: '#333333', fontSize: '16px', fontWeight: 400, mr: 1, mb: 2 }}>
                                Monday, 11/21/2022
                            </Typography>

                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={1} sx={{ display: 'grid', justifyContent: 'center' }}>
                                    <Box>
                                        <div style={{ width: '5px', height: '5px', backgroundColor: 'black', borderRadius: '50%', marginLeft: '-1px', marginTop: '7px' }}>

                                        </div>
                                        <Box sx={{ width: '2px', height: { xs: '47px', md: '20px' }, backgroundColor: 'black', color: 'transparent' }}>

                                        </Box>
                                        {/* <div style={{ width: '5px', height: '5px', backgroundColor: 'black', borderRadius: '50%', marginLeft: '-1px' }}>

                                        </div> */}
                                    </Box>

                                </Grid>
                                <Grid item xs={11}>
                                    <Grid container>
                                        <Grid item xs={12} md={6}>
                                            <Grid container>
                                                <Grid item xs={12} md={5}>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 400, mr: 1 }}>
                                                        10:21 AM

                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} md={7}>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700, }}>

                                                    Shipment information sent to FedEx
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: 'left', md: 'right' } }}>
                                            <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 300, mr: 1, mb: 1 }}>
                                            ESSEX, ENG GB
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={1} sx={{ display: 'grid', justifyContent: 'center' }}>
                                    <Box>
                                        <Box sx={{ width: '2px', height: { xs: '7px', md: '10px' }, backgroundColor: 'black', color: 'transparent' }}>

                                        </Box>
                                        <div style={{ width: '5px', height: '5px', backgroundColor: 'black', borderRadius: '50%', marginLeft: '-1px' }}>

                                        </div>
                                        <Box sx={{ width: '2px', height: { xs: '47px', md: '20px' }, backgroundColor: 'black', color: 'transparent' }}>

                                        </Box>
                                        {/* <div style={{ width: '5px', height: '5px', backgroundColor: 'black', borderRadius: '50%', marginLeft: '-1px' }}>

                                        </div> */}
                                    </Box>

                                </Grid>
                                <Grid item xs={11}>
                                    <Grid container>
                                        <Grid item xs={12} md={6}>
                                            <Grid container>
                                                <Grid item xs={12} md={5}>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 400, mr: 1 }}>
                                                        11:30 AM

                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} md={7}>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700, }}>

                                                     Picked up
                                                        Tendered at FedEx Office
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: 'left', md: 'right' } }}>
                                            <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 300, mr: 1, mb: 1 }}>
                                            ESSEX, ENG GB
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={1} sx={{ display: 'grid', justifyContent: 'center' }}>
                                    <Box>
                                        <Box sx={{ width: '2px', height: { xs: '7px', md: '10px' }, backgroundColor: 'black', color: 'transparent' }}>

                                        </Box>
                                        <div style={{ width: '5px', height: '5px', backgroundColor: 'black', borderRadius: '50%', marginLeft: '-1px' }}>

                                        </div>
                                        <Box sx={{ width: '2px', height: { xs: '47px', md: '20px' }, backgroundColor: 'black', color: 'transparent' }}>

                                        </Box>
                                        {/* <div style={{ width: '5px', height: '5px', backgroundColor: 'black', borderRadius: '50%', marginLeft: '-1px' }}>

                                        </div> */}
                                    </Box>

                                </Grid>
                                <Grid item xs={11}>
                                    <Grid container>
                                        <Grid item xs={12} md={6}>
                                            <Grid container>
                                                <Grid item xs={12} md={5}>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 400, mr: 1 }}>
                                                        05:31 pm

                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} md={7}>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700, }}>

                                                        Picked up
                                                        
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: 'left', md: 'right' } }}>
                                            <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 300, mr: 1, mb: 1 }}>
                                            ESSEX, ENG GB
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={1} sx={{ display: 'grid', justifyContent: 'center' }}>
                                    <Box>
                                        <Box sx={{ width: '2px', height: { xs: '7px', md: '10px' }, backgroundColor: 'black', color: 'transparent' }}>

                                        </Box>
                                        <div style={{ width: '5px', height: '5px', backgroundColor: 'black', borderRadius: '50%', marginLeft: '-1px' }}>

                                        </div>
                                        <Box sx={{ width: '2px', height: { xs: '47px', md: '20px' }, backgroundColor: 'black', color: 'transparent' }}>

                                        </Box>
                                        {/* <div style={{ width: '5px', height: '5px', backgroundColor: 'black', borderRadius: '50%', marginLeft: '-1px' }}>

                                        </div> */}
                                    </Box>

                                </Grid>
                                <Grid item xs={11}>
                                    <Grid container>
                                        <Grid item xs={12} md={6}>
                                            <Grid container>
                                                <Grid item xs={12} md={5}>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 400, mr: 1 }}>
                                                        07:10 pm

                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} md={7}>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700, }}>

                                                    Shipment arriving On-Time
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: 'left', md: 'right' } }}>
                                            <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 300, mr: 1, mb: 1 }}>
                                            ESSEX, ENG GB
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* second */} 
            
            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>
                <Grid item xs={11} lg={8.3} sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                    <Grid container>
                        
                        <Grid item xs={12} >
                            <Grid container>
                                <Grid item xs={1} sx={{display:'flex',justifyContent:'center'}}>
                                <Box>
                                        <Box sx={{ width: '2px', height: { xs: '7px', md: '15px' }, backgroundColor: 'black', color: 'black',marginLeft: '-2px'  }}>

                                        </Box>
                                        {/* <div style={{ width: '5px', height: '5px', backgroundColor: 'black', borderRadius: '50%', marginLeft: '-1px' }}>

                                        </div> */}
                                        <Box sx={{ width: '2px', height: { xs: '47px', md: '25px' }, backgroundColor: 'black', color: 'transparent',marginLeft: '-2px'  }}>

                                        </Box>
                                        {/* <div style={{ width: '5px', height: '5px', backgroundColor: 'black', borderRadius: '50%', marginLeft: '-1px' }}>

                                        </div> */}
                                    </Box>
                                </Grid>
                                <Grid item xs={11}>
                                <Typography variant="body2" sx={{ color: '#333333', fontSize: '16px', fontWeight: 400, mr: 1, mb: 2 }}>
                                Tuesday, 11/22/2022
                                </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={1} sx={{ display: 'grid', justifyContent: 'center' }}>
                                    <Box>
                                        <div style={{ width: '5px', height: '5px', backgroundColor: 'black', borderRadius: '50%', marginLeft: '-1px',}}>

                                        </div>
                                        <Box sx={{ width: '2px', height: { xs: '55px', md: '20px' }, backgroundColor: 'black', color: 'transparent' }}>

                                        </Box>
                                        {/* <div style={{ width: '5px', height: '5px', backgroundColor: 'black', borderRadius: '50%', marginLeft: '-1px' }}>

                                        </div> */}
                                    </Box>

                                </Grid>
                                <Grid item xs={11}>
                                    <Grid container>
                                        <Grid item xs={12} md={6}>
                                            <Grid container>
                                                <Grid item xs={12} md={5}>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 400, mr: 1 }}>
                                                        7:00 AM

                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} md={7}>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700, }}>

                                                     Shipment arriving early
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: 'left', md: 'right' } }}>
                                            <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 300, mr: 1, mb: 1 }}>
                                            HARLOW, ENG GB
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={1} sx={{ display: 'grid', justifyContent: 'center' }}>
                                    <Box>
                                        <Box sx={{ width: '2px', height: { xs: '7px', md: '10px' }, backgroundColor: 'black', color: 'transparent' }}>

                                        </Box>
                                        <div style={{ width: '5px', height: '5px', backgroundColor: 'black', borderRadius: '50%', marginLeft: '-1px' }}>

                                        </div>
                                        <Box sx={{ width: '2px', height: { xs: '47px', md: '20px' }, backgroundColor: 'black', color: 'transparent' }}>

                                        </Box>
                                        {/* <div style={{ width: '5px', height: '5px', backgroundColor: 'black', borderRadius: '50%', marginLeft: '-1px' }}>

                                        </div> */}
                                    </Box>

                                </Grid>
                                <Grid item xs={11}>
                                    <Grid container>
                                        <Grid item xs={12} md={6}>
                                            <Grid container>
                                                <Grid item xs={12} md={5}>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 400, mr: 1 }}>
                                                        9:30 AM

                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} md={7}>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700, }}>

                                                    Arrived at FedEx hub
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: 'left', md: 'right' } }}>
                                            <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 300, mr: 1, mb: 1 }}>
                                            HARLOW, ENG GB
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={1} sx={{ display: 'grid', justifyContent: 'center' }}>
                                    <Box>
                                        <Box sx={{ width: '2px', height: { xs: '7px', md: '10px' }, backgroundColor: 'black', color: 'transparent' }}>

                                        </Box>
                                        <div style={{ width: '5px', height: '5px', backgroundColor: 'black', borderRadius: '50%', marginLeft: '-1px' }}>

                                        </div>
                                        <Box sx={{ width: '2px', height: { xs: '47px', md: '20px' }, backgroundColor: 'black', color: 'transparent' }}>

                                        </Box>
                                        {/* <div style={{ width: '5px', height: '5px', backgroundColor: 'black', borderRadius: '50%', marginLeft: '-1px' }}>

                                        </div> */}
                                    </Box>

                                </Grid>
                                <Grid item xs={11}>
                                    <Grid container>
                                        <Grid item xs={12} md={6}>
                                            <Grid container>
                                                <Grid item xs={12} md={5}>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 400, mr: 1 }}>
                                                        04:31 pm

                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} md={7}>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700, }}>

                                                    Departed FedEx hub
                                                        
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: 'left', md: 'right' } }}>
                                            <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 300, mr: 1, mb: 1 }}>
                                            HARLOW, ENG GB
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={1} sx={{ display: 'grid', justifyContent: 'center' }}>
                                    <Box>
                                        <Box sx={{ width: '2px', height: { xs: '7px', md: '10px' }, backgroundColor: 'black', color: 'transparent' }}>

                                        </Box>
                                        <div style={{ width: '5px', height: '5px', backgroundColor: 'black', borderRadius: '50%', marginLeft: '-1px' }}>

                                        </div>
                                        <Box sx={{ width: '2px', height: { xs: '47px', md: '20px' }, backgroundColor: 'black', color: 'transparent' }}>

                                        </Box>
                                        {/* <div style={{ width: '5px', height: '5px', backgroundColor: 'black', borderRadius: '50%', marginLeft: '-1px' }}>

                                        </div> */}
                                    </Box>

                                </Grid>
                                <Grid item xs={11}>
                                    <Grid container>
                                        <Grid item xs={12} md={6}>
                                            <Grid container>
                                                <Grid item xs={12} md={5}>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 400, mr: 1 }}>
                                                        05:01 pm

                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} md={7}>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700, }}>

                                                    At destination sort facility
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: 'left', md: 'right' } }}>
                                            <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 300, mr: 1, mb: 1 }}>
                                            STANSTED, ENG GB
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>
                <Grid item xs={11} lg={8.3} sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                    <Grid container>
                        
                        <Grid item xs={12} >
                            <Grid container>
                                <Grid item xs={1} sx={{display:'flex',justifyContent:'center'}}>
                                <Box>
                                        <Box sx={{ width: '2px', height: { xs: '7px', md: '15px' }, backgroundColor: 'black', color: 'black',marginLeft: '-2px'  }}>

                                        </Box>
                                        {/* <div style={{ width: '5px', height: '5px', backgroundColor: 'black', borderRadius: '50%', marginLeft: '-1px' }}>

                                        </div> */}
                                        <Box sx={{ width: '2px', height: { xs: '47px', md: '25px' }, backgroundColor: 'black', color: 'transparent',marginLeft: '-2px'  }}>

                                        </Box>
                                        {/* <div style={{ width: '5px', height: '5px', backgroundColor: 'black', borderRadius: '50%', marginLeft: '-1px' }}>

                                        </div> */}
                                    </Box>
                                </Grid>
                                <Grid item xs={11}>
                                <Typography variant="body2" sx={{ color: '#333333', fontSize: '16px', fontWeight: 400, mr: 1, mb: 2 }}>
                                Thursday, 11/24/2022
                                </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={1} sx={{ display: 'grid', justifyContent: 'center' }}>
                                    <Box>
                                        <div style={{ width: '5px', height: '5px', backgroundColor: 'black', borderRadius: '50%', marginLeft: '-1px',}}>

                                        </div>
                                        <Box sx={{ width: '2px', height: { xs: '55px', md: '20px' }, backgroundColor: 'black', color: 'transparent' }}>

                                        </Box>
                                        {/* <div style={{ width: '5px', height: '5px', backgroundColor: 'black', borderRadius: '50%', marginLeft: '-1px' }}>

                                        </div> */}
                                    </Box>

                                </Grid>
                                <Grid item xs={11}>
                                    <Grid container>
                                        <Grid item xs={12} md={6}>
                                            <Grid container>
                                                <Grid item xs={12} md={5}>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 400, mr: 1 }}>
                                                        9:00 AM

                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} md={7}>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700, }}>

                                                     Departed fedex location
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: 'left', md: 'right' } }}>
                                            <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 300, mr: 1, mb: 1 }}>
                                            HARLOW, ENG GB
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={1} sx={{ display: 'grid', justifyContent: 'center' }}>
                                    <Box>
                                        <Box sx={{ width: '2px', height: { xs: '7px', md: '10px' }, backgroundColor: 'black', color: 'transparent' }}>

                                        </Box>
                                        <div style={{ width: '5px', height: '5px', backgroundColor: 'black', borderRadius: '50%', marginLeft: '-1px' }}>

                                        </div>
                                        <Box sx={{ width: '2px', height: { xs: '47px', md: '20px' }, backgroundColor: 'black', color: 'transparent' }}>

                                        </Box>
                                        {/* <div style={{ width: '5px', height: '5px', backgroundColor: 'black', borderRadius: '50%', marginLeft: '-1px' }}>

                                        </div> */}
                                    </Box>

                                </Grid>
                                <Grid item xs={11}>
                                    <Grid container>
                                        <Grid item xs={12} md={6}>
                                            <Grid container>
                                                <Grid item xs={12} md={5}>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 400, mr: 1 }}>
                                                        01:15 PM

                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} md={7}>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700, }}>

                                                    Arrived at International shipping
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: 'left', md: 'right' } }}>
                                            <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 300, mr: 1, mb: 1 }}>
                                            LONDON, ENG GB
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={1} sx={{ display: 'grid', justifyContent: 'center' }}>
                                    <Box>
                                        <Box sx={{ width: '2px', height: { xs: '7px', md: '10px' }, backgroundColor: 'black', color: 'transparent' }}>

                                        </Box>
                                        <div style={{ width: '5px', height: '5px', backgroundColor: 'black', borderRadius: '50%', marginLeft: '-1px' }}>

                                        </div>
                                        {/* <Box sx={{ width: '2px', height: { xs: '47px', md: '20px' }, backgroundColor: 'black', color: 'transparent' }}>

                                        </Box> */}
                                        {/* <div style={{ width: '5px', height: '5px', backgroundColor: 'black', borderRadius: '50%', marginLeft: '-1px' }}>

                                        </div> */}
                                    </Box>

                                </Grid>
                                <Grid item xs={11}>
                                    <Grid container>
                                        <Grid item xs={12} md={6}>
                                            <Grid container>
                                                <Grid item xs={12} md={5}>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 400, mr: 1 }}>
                                                        02:30 pm

                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} md={7}>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700, }}>

                                                    International Shipment release
                                                        
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: 'left', md: 'right' } }}>
                                            <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 300, mr: 1, mb: 1 }}>
                                            LONDON, ENG GB
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                {/* <Grid item xs={1} sx={{ display: 'grid', justifyContent: 'center' }}>
                                    <Box>
                                        <Box sx={{ width: '2px', height: { xs: '7px', md: '10px' }, backgroundColor: 'black', color: 'transparent' }}>

                                        </Box>
                                        <div style={{ width: '5px', height: '5px', backgroundColor: 'black', borderRadius: '50%', marginLeft: '-1px' }}>

                                        </div>
                                        <Box sx={{ width: '2px', height: { xs: '47px', md: '20px' }, backgroundColor: 'black', color: 'transparent' }}>

                                        </Box>
                                        <div style={{ width: '5px', height: '5px', backgroundColor: 'black', borderRadius: '50%', marginLeft: '-1px' }}>

                                        </div>
                                    </Box>

                                </Grid> */}
                                {/* <Grid item xs={11}>
                                    <Grid container>
                                        <Grid item xs={12} md={6}>
                                            <Grid container>
                                                <Grid item xs={12} md={5}>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 400, mr: 1 }}>
                                                        05:01 pm

                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} md={7}>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700, }}>

                                                    At destination sort facility
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: 'left', md: 'right' } }}>
                                            <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 300, mr: 1, mb: 1 }}>
                                            STANSTED, ENG GB
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid> */}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Travel