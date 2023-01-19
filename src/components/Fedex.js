import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import fedexLogo from '../assets/fedexlogo.png'
import fedex1 from '../assets/fedex1.png'
import track1 from '../assets/track1.png'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
const Fedex = () => {
    return (
        <>
            <Grid container sx={{ height: '75px', backgroundColor: '#4d148c', display: 'flex', justifyContent: 'center', alignItems: 'center',position:'sticky',top:0 ,zIndex:1}}>
                <Grid item xs={11} lg={8.3} sx={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: "space-between" }}>
                    <Box component="img" alt="" src={fedexLogo} sx={{ width: '80px' }} />
                    <Box sx={{ display: { xs: 'none', lg: 'flex' }, height: '100%', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', color: 'white', alignItems: 'center', mr: 2.5, cursor: 'pointer' }}>
                            <Typography variant="body2" color="initial" sx={{ color: 'white', fontSize: '14px' }}>
                                Shipping
                            </Typography>
                            <KeyboardArrowDownOutlinedIcon />
                        </Box>
                        <Box sx={{ display: 'flex', color: 'white', alignItems: 'center', mr: 2.5, cursor: 'pointer' }}>
                            <Typography variant="body2" color="initial" sx={{ color: 'white', fontSize: '14px' }}>
                                Tracking
                            </Typography>
                            <KeyboardArrowDownOutlinedIcon />
                        </Box>
                        <Box sx={{ display: 'flex', color: 'white', alignItems: 'center', mr: 2.5, cursor: 'pointer' }}>
                            <Typography variant="body2" color="initial" sx={{ color: 'white', fontSize: '14px' }}>
                                Design & Print
                            </Typography>
                            <KeyboardArrowDownOutlinedIcon />
                        </Box>
                        <Box sx={{ display: 'flex', color: 'white', alignItems: 'center', mr: 2.5, cursor: 'pointer' }}>
                            <Typography variant="body2" color="initial" sx={{ color: 'white', fontSize: '14px' }}>
                                Locations
                            </Typography>
                            <KeyboardArrowDownOutlinedIcon />
                        </Box>
                        <Box sx={{ display: 'flex', color: 'white', alignItems: 'center', mr: 2.5, cursor: 'pointer' }}>
                            <Typography variant="body2" color="initial" sx={{ color: 'white', fontSize: '14px' }}>
                                Support
                            </Typography>
                            <KeyboardArrowDownOutlinedIcon />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="body2" color="initial" sx={{ color: 'white', fontSize: '14px', mr: 1.5, display: { xs: 'none', md: 'flex', cursor: 'pointer' } }}>
                            Sign Up or Log In
                        </Typography>
                        <AccountCircleOutlinedIcon sx={{ color: 'white', fontSize: '40px', mr: 3, cursor: 'pointer' }} className="tee" />
                        <SearchOutlinedIcon sx={{ color: 'white', fontSize: '40px', fontWeight: '200 !important', mr: { xs: 3, lg: 0 }, display: { xs: 'none', md: 'flex' }, cursor: 'pointer' }} className="tee" />
                        <MenuOutlinedIcon sx={{ color: 'white', fontSize: '40px', fontWeight: '200 !important', display: { xs: 'flex', lg: 'none' }, cursor: 'pointer' }} />
                    </Box>
                </Grid>
            </Grid>
            <Grid container sx={{ height: '65px', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: 2, borderColor: '#efefef' }}>
                <Grid item xs={11} lg={8.3} sx={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: "space-between" }}>
                    <Box component="img" alt="" src={fedex1} sx={{ width: '150px', cursor: 'pointer' }} />
                    <Box component="img" alt="" src={track1} sx={{ width: '270px', cursor: 'pointer', display: { xs: 'none', md: 'flex' } }} />
                    <MoreVertOutlinedIcon sx={{ display: { xs: 'flex', md: 'none' } }} />
                </Grid>
            </Grid>
            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 3}}>
                <Grid item xs={11} lg={8.3} sx={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: "space-between",borderBottom:2,borderColor:'#efefef' ,pb :4 }}>
                    <Grid container>
                        <Grid item xs={12} md={8} >
                            <Grid container>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700 }}>
                                        SCHEDULED DELIVERY DATE
                                    </Typography>
                                    <Typography variant="h1" sx={{ color: '#333333', fontSize: '38px', fontWeight: 300 }}>
                                        Wednedsay
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#333333', fontSize: '18px', fontWeight: 300 }}>
                                        11/30/2022 by end of day
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#333333', fontSize: '18px', fontWeight: 300 }}>
                                        estimated between
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#333333', fontSize: '18px', fontWeight: 300 }}>
                                        11:30 am - 2:05 pm
                                    </Typography>
                                    <Box sx={{ height: '50px', display: 'flex', alignItems: 'center' }}>
                                        <Typography variant="h5" sx={{ color: '#333333', fontSize: '14px', fontWeight: 700 }}>
                                            No signature required
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6} sx={{ mt: { xs: 2, md: 0 } }}>
                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700 }}>
                                        DELIVERY STATUS
                                    </Typography>
                                    <Box sx={{ display: 'flex', mt: .5, alignItems: 'center' }}>
                                        <Typography variant="body2" sx={{ color: '#333333', fontSize: '20px', fontWeight: 300, mr: 1 }}>
                                            In Transit
                                        </Typography>
                                        <ArrowCircleRightOutlinedIcon sx={{ backgroundColor: '#4d148c', color: 'white', borderRadius: '50%' }} />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sx={{ borderTop: 2, borderBottom: 2, borderColor: "#efefef", display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, height: '85px', mt: { xs: 2, md: 0 } }}>
                                    <Typography variant="h1" sx={{ color: '#333333', fontSize: '20px', fontWeight: 300 }}>
                                        Manage Delivery
                                    </Typography>
                                    <KeyboardArrowDownIcon sx={{ fontWeight: 300, color: 'gray', fontSize: '30px' }} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4} sx={{ mt: { xs: 2, md: 0 } }} >
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700 }}>
                                        TRACKING ID
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1.5 }}>
                                        <Typography variant="body2" sx={{ color: '#333333', fontSize: '16px', fontWeight: 400, mr: 1 }}>
                                            270109369099
                                        </Typography>
                                        <ModeEditOutlineOutlinedIcon sx={{ color: 'rgb(12,101,168)' }} />
                                        <StarBorderOutlinedIcon sx={{ color: 'rgb(12,101,168)' }} />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container sx={{ display: 'flex', justifyContent: 'center', pt: 1.5 }}>
                                        <Grid item xs={11} sx={{ display: 'flex' }}>
                                            <Box sx={{ width: '18%', display: 'flex', justifyContent: 'center' }}>
                                                <Box sx={{ width: '30%', backgroundColor: '#4d148c', borderTopLeftRadius: '33px', borderTopRightRadius: '33px', display: 'flex', justifyContent: 'center', pt: .5, }}>
                                                    <div style={{ width: '5px', height: '5px', backgroundColor: 'white', borderRadius: '50%' }}>

                                                    </div>
                                                </Box>
                                            </Box>
                                            <Box sx={{ width: '82%', display: 'flex', pt: 2, pb: 2,pl:2 }}>
                                                <Box sx={{}}>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700, }}>
                                                        FROM
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '14px', fontWeight: 400, mr: 1, mb: 1 }}>
                                                        ESSEX, ENG GB
                                                    </Typography>
                                                    <i style={{ color: '#333333', fontSize: '12px', fontWeight: 400 }}>
                                                        Label Created
                                                    </i>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '14px', fontWeight: 400, mr: 1 }}>
                                                        11/21/2022 08:55 AM
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={11} sx={{ display: 'flex' }}>
                                        <Box sx={{ width: '18%', display: 'flex', justifyContent: 'center' }}>
                                                <Box sx={{ width: '30%', backgroundColor: '#4d148c',  display: 'flex', justifyContent: 'center', pt: .5, }}>
                                                    <div style={{ width: '5px', height: '5px', backgroundColor: 'white', borderRadius: '50%' }}>

                                                    </div>
                                                </Box>
                                            </Box>
                                            
                                            <Box sx={{ width: '82%', display: 'flex',  pt: 2, pb: 2,pl:2 ,}}>
                                                <Box sx={{}}>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700, }}>
                                                        PACKAGE RECEIVED BY FEDEX
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '14px', fontWeight: 400, mr: 1, }}>
                                                    STANSTED, ENG GB
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '14px', fontWeight: 400, mr: 1 }}>
                                                        11/22/2022 09:10 PM
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={11} sx={{ display: 'flex' }}>
                                        <Box sx={{ width: '18%', display: 'flex', justifyContent: 'right',position:'relative' }}>
                                                <Box sx={{ width: '64%', backgroundColor: '#efefef', display: 'flex', justifyContent: 'center', pt: .5, }}>
                                                </Box>
                                                <Box sx={{backgroundColor: '#4d148c',position:'absolute',top:0,width:"60px",height:'60px',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                <ArrowCircleRightOutlinedIcon sx={{color:'white',fontSize:'40px'}}/>
                                                </Box>
                                            </Box>
                                            <Box sx={{ width: '82%', display: 'flex', pt: 2, pb: 2,pl:2,backgroundColor:'#efefef',borderTopRightRadius:'33px',borderBottomRightRadius:'33px' }}>
                                                <Box sx={{}}>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700, }}>
                                                    IN TRANSIT
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '14px', fontWeight: 400, mr: 1 }}>
                                                    DEPARTED UK TO USA
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '14px', fontWeight: 400, mr: 1 }}>
                                                        10/24/2022 02:30 PM
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={11} sx={{ display: 'flex' }}>
                                            <Box sx={{ width: '18%', display: 'flex', justifyContent: 'center' }}>
                                                <Box sx={{ width: '30%', backgroundColor: '#efefef', display: 'flex', justifyContent: 'center', pt: .5, }}>
                                                    <div style={{ width: '5px', height: '5px', backgroundColor: 'black', borderRadius: '50%' }}>

                                                    </div>
                                                </Box>
                                            </Box>
                                            <Box sx={{ width: '82%', display: 'flex', pt: 2, pb: 2,pl:2 }}>
                                                <Box sx={{}}>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700, }}>
                                                    PACKAGE RECEIVED BY FEDEX
                                                    </Typography>
                                                    {/* <Typography variant="body2" sx={{ color: '#333333', fontSize: '14px', fontWeight: 400, mr: 1 }}>
                                                    PICO RIVERA, CA US
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '14px', fontWeight: 400, mr: 1 }}>
                                                        11/27/2022 09:10 PM
                                                    </Typography> */}
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={11} sx={{ display: 'flex' }}>
                                            <Box sx={{ width: '18%', display: 'flex', justifyContent: 'center' }}>
                                                <Box sx={{ width: '30%', backgroundColor: '#efefef', display: 'flex', justifyContent: 'center', pt: .5, }}>
                                                    <div style={{ width: '5px', height: '5px', backgroundColor: 'black', borderRadius: '50%' }}>

                                                    </div>
                                                </Box>
                                            </Box>
                                            <Box sx={{ width: '82%', display: 'flex', pt: 2, pb: 2,pl:2 }}>
                                                <Box sx={{}}>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700, }}>
                                                    IN TRANSIT
                                                    </Typography>
                                                    {/* <Typography variant="body2" sx={{ color: '#333333', fontSize: '14px', fontWeight: 400, mr: 1 }}>
                                                   NEW YORK, NY
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '14px', fontWeight: 400, mr: 1 }}>
                                                        11/30/2022 07:15 PM
                                                    </Typography> */}
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={11} sx={{ display: 'flex' }}>
                                            <Box sx={{ width: '18%', display: 'flex', justifyContent: 'center' }}>
                                                <Box sx={{ width: '30%', backgroundColor: '#efefef', display: 'flex', justifyContent: 'center', pt: .5, }}>
                                                    <div style={{ width: '5px', height: '5px', backgroundColor: 'black', borderRadius: '50%' }}>

                                                    </div>
                                                </Box>
                                            </Box>
                                            <Box sx={{ width: '82%', display: 'flex', pt: 2, pb: 2,pl:2 }}>
                                                <Box sx={{}}>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700, }}>
                                                    OUT FOR DELIVERY
                                                    </Typography>
                                                    {/* <Typography variant="body2" sx={{ color: '#333333', fontSize: '14px', fontWeight: 400, mr: 1 }}>
                                                    NEW YORK, NY
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '14px', fontWeight: 400, mr: 1 }}>
                                                        11/30/2022 09:30 AM
                                                    </Typography> */}
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={11} sx={{ display: 'flex' }}>
                                            <Box sx={{ width: '18%', display: 'flex', justifyContent: 'center' }}>
                                                <Box sx={{ width: '30%', backgroundColor: '#efefef', borderBottomLeftRadius: '33px', borderBottomRightRadius: '33px', display: 'flex', justifyContent: 'center', pt: .5, }}>
                                                    <div style={{ width: '5px', height: '5px', backgroundColor: 'black', borderRadius: '50%' }}>

                                                    </div>
                                                </Box>
                                            </Box>
                                            <Box sx={{ width: '82%', display: 'flex', pt: 2, pb: 2,pl:2 }}>
                                                <Box sx={{}}>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '12px', fontWeight: 700, }}>
                                                    TO
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '14px', fontWeight: 400, mr: 1 }}>
                                                    NEW YORK, NY
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '14px', fontWeight: 400, mr: 1 }}>
                                                    SCHEDULED DELIVERY DATE
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ color: '#333333', fontSize: '14px', fontWeight: 400, mr: 1 }}>
                                                    11/30/2022 by end of day
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
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

export default Fedex