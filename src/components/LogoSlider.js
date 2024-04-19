import React from 'react';
import '../components/style/components.css';
import logo1 from '../assets/vehicle_brands/1200px-Dodge_logo_2010 1.png';
import logo2 from '../assets/vehicle_brands/Chevrolet-logo-2013-2560x1440 1.png';
import logo3 from '../assets/vehicle_brands/Ford-Motor-Company-Logo 1.png';
import logo4 from '../assets/vehicle_brands/GMC-Logo 1.png';
import logo6 from '../assets/vehicle_brands/Mitsubishi-logo 1.png';
import logo5 from '../assets/vehicle_brands/Nissan_logo 1.png';

const LogoSlider = () => {
  return (
    <>
      <div className="marquee_container-logo-slider">
        <div className="marquee-logo-slider">
          <div className="marquee_group-logo-slider">
            <img src={logo4} alt="Logo 4" />
            <img src={logo6} alt="Logo 4" />
            <img src={logo5} alt="Logo 5" />
            <img src={logo1} alt="Logo 1" />
            <img src={logo2} alt="Logo 2" />
            <img src={logo3} alt="Logo 3" />
          </div>
          <div className="marquee_group-logo-slider">
            <img src={logo4} alt="Logo 4" />
            <img src={logo6} alt="Logo 4" />
            <img src={logo5} alt="Logo 5" />
            <img src={logo1} alt="Logo 1" />
            <img src={logo2} alt="Logo 2" />
            <img src={logo3} alt="Logo 3" />
          </div>
        </div>
      </div>

    </>
  );
};

export default LogoSlider;
