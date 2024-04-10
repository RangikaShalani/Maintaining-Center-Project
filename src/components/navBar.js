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
                                    <Link to="/">Home</Link>
                                </li>
                            </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>

    );
}
export default AppNavBar;