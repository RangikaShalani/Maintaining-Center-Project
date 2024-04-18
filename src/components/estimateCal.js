import React from 'react';
import '../components/style/components.css';
import '../App.css';
import { Typography, Button, Grid, TextField, Box } from '@mui/material';
import { FaAngleDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoMdLocate } from "react-icons/io";

const EstimateCal = () => {
    return (
        <Box sx={{ maxWidth: '100%' }} className="estimate-cal-main-cmp">
            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Box display="flex" flexDirection="column" >
                        <Typography>
                            No hidden charges!
                        </Typography>
                        <Typography color="#1F1F1F" className='estimate-cal-header-tex' >
                            ESTIMATE MY
                        </Typography>
                        <Typography color="#FF5C00" className='estimate-cal-header-tex' > TOW</Typography>
                        <Box mt={6}>
                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <Typography variant="body1" color="textSecondary">Vehicle type</Typography>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        size="small"
                                        placeholder="Select"
                                        InputProps={{
                                            endAdornment: (
                                                <FaAngleDown />
                                            ),
                                        }}
                                    />
                                    <Typography variant="body1" color="textSecondary" mt={4}>
                                        Where you want to deliver your vehicle?
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        size="small"
                                        placeholder="Search"
                                        InputProps={{
                                            endAdornment: (
                                                <FaSearch />
                                            ),
                                        }}
                                    />
                                    <Typography variant="body1" color="textSecondary" mt={4}>
                                        Where are you at?
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        size="small"
                                        placeholder="Find my Location"
                                        InputProps={{
                                            endAdornment: (
                                                <IoMdLocate />
                                            ),
                                        }}
                                    />
                                    {/* <Button variant="outlined" color="primary">
                                        Find my Location
                                        <IoMdLocate />
                                    </Button> */}
                                </Grid>
                                <Grid item xs={6} className='estimate-cal-term-box'>
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        justifyContent="center"
                                        alignItems="center"
                                        textAlign="center"
                                        px={3}
                                        py={3}
                                        border="1px solid #676767"
                                        borderRadius={5}
                                        mt={4}
                                    >
                                        <Typography variant="body1" color="textPrimary">
                                            Your Tow Would be
                                        </Typography>
                                        <Typography variant="h4" >
                                            $120.00
                                        </Typography>
                                        <p className='estimate-cal-terms-tex'>*Terms and Conditions applied</p>
                                        {/* <Typography variant="body2" color="textSecondary" mt={2}>
                                            *Terms and Conditions applied
                                        </Typography> */}
                                    </Box>
                                    <Button variant="contained" className='estimate-cal-estimate-btn'>
                                        Estimate!
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                       
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} >
                    <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-end">
                        <Typography variant="body2" color="textPrimary" textAlign="right" className='estimate-cal-terms-left-1'>
                            Input your vehicle type, current location, and destination to estimate towing costs instantly
                        </Typography>
                        <Typography variant="body1" color="textPrimary" mt={15} ml={3} mr={3} textAlign="center" alignItems={'center'}>
                            Instantly calculate towing costs
                            <br></br>
                        {/* </Typography>
                        <Typography variant="h6" color="textPrimary" textAlign="center"> */}
                            Streamlined process for quick results
                            <br></br>
                        {/* </Typography>
                        <Typography variant="h6" color="textPrimary" textAlign="center"> */}
                            Hassle-free way to plan your towing needs
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default EstimateCal;
