import * as React from 'react';
import { Outlet, Link } from "react-router-dom";
import Grid from '@mui/material/Grid';

function AppNavBar() {
    return (

        <div className='app-main-navbar-cmp'>
            <Grid sx={{ flexGrow: 1 }} container spacing={4}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={4}>
                            <Grid item>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                            </Grid>
                            <Grid item>
                                <li>
                                <Link to="/services">Services</Link>
                                </li>
                            </Grid>
                            <Grid item>
                                <li>
                                    <Link to="/serviceAreas">Service Areas</Link>
                                </li>
                            </Grid>
                            <Grid item>
                                <li>
                                    <Link to="/aboutUs">About Us</Link>
                                </li>
                            </Grid>
                            <Grid item>
                                <li>
                                <Link to="/contactUs">Contact Us</Link>
                                </li>
                            </Grid>
                            <Grid item>
                                <li>
                                    <Link to="/blogs">Blogs</Link>
                                </li>
                            </Grid>
                            <Grid item>
                                <li>
                                <Link to="/faqs"> FAQs</Link>
                                </li>
                            </Grid>
                            <Grid item>
                                <li>
                                    <Link to="/estimateTow">Estimate Tow</Link>
                                </li>
                            </Grid>
                            <Grid item>
                                <li>
                                    <Link to="/privacyPolicy">Privacy Policy</Link>
                                </li>
                            </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>

    );
}
export default AppNavBar;