import * as React from "react";
import Grid from '@mui/material/Grid';
import "../App.css";
import { FaBloggerB } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";
import logo from '../assets/Icons/logo_nav_desktop.png';
import AnimationAddressBar from '../components/animationBar';

function HeaderCover() {
    return (
        <div className="header-cover-cmp">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <div className="header-cover-meadia-1">
                        <FaBloggerB className="header-cover-meadia-1-icon" />
                        <FaBloggerB className="header-cover-meadia-1-icon" />
                        <FaBloggerB className="header-cover-meadia-1-icon" />
                        <FaBloggerB className="header-cover-meadia-1-icon" />
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="header-cover-meadia-2">
                        <a href="mailto:shawnstowing@gmail.com" >shawnstowing@gmail.com</a>
                        <button>Call Us on <span className="header-call-btn-number">(651) 917-0192 </span><FaArrowCircleUp className="header-call-icon" /></button>
                    </div>
                </Grid>
            </Grid>
            <div className="header-cover-logo-cmp">
                <img src={logo} className="header-cover-logo" />
            </div>


            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <div className="header-cover-estimate">
                        <h2 style={{color:"#ffff", marginRight:"20px"}}>ESTIMATE MY TOW</h2>
                        <FaArrowCircleUp className="header-call-icon" />
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="header-cover-animation-address-bar">
                        <AnimationAddressBar />
                    </div>
                </Grid>
            </Grid>

        </div>
    );
}

export default HeaderCover;
