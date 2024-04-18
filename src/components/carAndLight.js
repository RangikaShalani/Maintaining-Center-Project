import React from 'react';
import { Box, Container, Typography } from '@mui/material';
//  import RoundedIcon from './roud'; 
// Assuming RoundedIcon is defined in a separate component file

const CarAndLight = () => {


    return (
        <div className='car-and-light-main-cmp'>
            <div class="car-and-light-mask1">
            <p className='car-and-light-tex'>Car & Light truck towing</p>       
            <Box
            className="flex justify-center items-center self-end mt-8 rounded-3xl border border-white bg-black bg-opacity-30 car-and-light-arrow"
            sx={{
              borderColor: 'white',
              borderWidth: 3,
              height: 54,
              width: 54,
            }}
          >
            <img
              loading="lazy"
              src="../assets/Icons/services_arrow.png"
              className="w-full"
              alt="Icon"
            />
          </Box>
                <img src="../assets/img/car-on-tow-truck-on-snow-road-2023-11-27-05-18-10-utc.jpg" alt="Cinque Terre" width="550" height="450"></img>
                

            </div>

        </div>

    );
};

export default CarAndLight;