import React from 'react';
import CallUsBtn from '../components/callUsBtn';
import MyComponent from "../components/testCmp";
import Grid from '@mui/material/Grid';
import "../App.css";
import { FaBloggerB } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";
import logo from '../assets/Icons/logo_nav_desktop.png';
import AnimationAddressBar from '../components/animationBar';
import EstimateCal from '../components/estimateCal';
import CarAndLight from '../components/carAndLight';
import MeetOurProfessionals from '../components/meetOurProfessionals';

const Home = () => {
  return (
    <div className='home-page-main-cmp'>

      <div className='home-page-first-main-cmp'>

      </div>


      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div>
            <p className='home-page-roadside-txt'>ROADSIDE <br></br><span className=''>RESCUE</span><br></br>STARTS HERE!</p>
            <CallUsBtn />
            <CarAndLight />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="">
            <EstimateCal />
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="">
            <MeetOurProfessionals />
          </div>
        </Grid>
        <Grid item xs={8}>
          <div className="">
            <EstimateCal />
          </div>
        </Grid>
      </Grid>
      <MyComponent />



    </div>
  );
};

export default Home;