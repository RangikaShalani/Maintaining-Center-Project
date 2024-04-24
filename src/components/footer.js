import React from "react";
import { Typography, Button, Grid, TextField, Box } from "@mui/material";
import "../components/style/components.css";
import CallUsBtn from "./callUsBtn";
import EstimateCal from "./estimateCal";
require("../assets/Icons/logo_footer_desktop.png");

export default function Footer() {
  return (
    <div>
      <div className="footer-container">
        {/* top row */}
        <div className="footer-row-call-us">
          <CallUsBtn isFooter={true} />
        </div>

        {/* row 2 contains all the columns */}
        <div className="footer-row-details">
          <div className="footer-col-towing">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div>
                <img src="../assets/Icons/logo_footer_desktop.png" alt="logo" />
              </div>
              <div className="footer-col-towing-title">
                {" "}
                Minneapolis Towing Service{" "}
              </div>
            </div>
            <div className="towing-body">
              Wherever you might be in Minnesota, Discount Auto Towing is always
              just a call away. Get in touch today and experience the best in
              towing services tailored to your needs.
            </div>
          </div>

          <div className="footer-col-sitemap">
            <div className="footer-col-sitemap-title">Site-map </div>
            <div className="sitemap-body">
              <div>
                <a href="/route">Services</a>
              </div>
              <div>
                <a href="/route">Service Areas</a>
              </div>
              <div>
                <a href="/route">About Us</a>
              </div>
              <div>
                <a href="/route">Contact Us</a>
              </div>
              <div>
                <a href="/route">Estimation Tool</a>
              </div>
              <div>
                <a href="/route">Privacy Policy</a>
              </div>
              <div>
                <a href="/route">Home</a>
              </div>
            </div>
          </div>

          <div className="footer-col-estimate">
            <Box sx={{ maxWidth: "100%", color: "white" }} className="">
              <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
                  <Box display="flex" flexDirection="column">
                    <Typography
                      color="#fff"
                      textAlign="center"
                      className="estimate-cal-header-tex"
                    >
                      ESTIMATE
                    </Typography>
                    <Typography
                      color="#FF5C00"
                      textAlign="center"
                      className="estimate-cal-header-tex"
                    >
                      {" "}
                      <span style={{ color: "white" }}>MY </span> {"  "}TOW
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#fff"
                      textAlign="center"
                      className="estimate-cal-terms-left-1"
                    >
                      Input your vehicle type, current location, and destination
                      to estimate towing costs instantly
                    </Typography>
                    <Box mt={6}>
                      <Grid container spacing={3}>
                        <Grid item xs={6}>
                          <Typography variant="body1" color="#fff">
                            Vehicle type
                          </Typography>
                          <TextField
                            fullWidth
                            variant="outlined"
                            size="small"
                            placeholder="Select"
                            InputProps={
                              {
                                //   endAdornment: <FaAngleDown />,
                              }
                            }
                          />
                          <Typography variant="body1" color="#fff" mt={4}>
                            Where you want to deliver your vehicle?
                          </Typography>
                          <TextField
                            fullWidth
                            variant="outlined"
                            size="small"
                            placeholder="Search"
                            InputProps={
                              {
                                //   endAdornment: <FaSearch />,
                              }
                            }
                          />
                          <Typography variant="body1" color="#fff" mt={4}>
                            Where are you at?
                          </Typography>
                          <TextField
                            fullWidth
                            variant="outlined"
                            size="small"
                            placeholder="Find my Location"
                            InputProps={
                              {
                                //   endAdornment: <IoMdLocate />,
                              }
                            }
                          />
                          {/* <Button variant="outlined" color="primary">
                                        Find my Location
                                        <IoMdLocate />
                                    </Button> */}
                        </Grid>
                        <Grid item xs={6} className="estimate-cal-term-box">
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
                            <Typography variant="body1" color="#fff">
                              Your Tow Would be
                            </Typography>
                            <Typography variant="h4">
                              <Typography color="#FF5C00">$</Typography>120.00
                            </Typography>
                            <p className="estimate-cal-terms-tex">
                              *Terms and Conditions applied
                            </p>
                            {/* <Typography variant="body2" color="textSecondary" mt={2}>
                                            *Terms and Conditions applied
                                        </Typography> */}
                          </Box>
                          <Button
                            variant="contained"
                            className="estimate-cal-estimate-btn"
                          >
                            Estimate!
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </div>

          <div className="footer-col-services">
            <div className="footer-col-sitemap-title">Services </div>
            <div className="sitemap-body">
              <div>
                <a href="/route">24/7 Emergency Towing</a>
              </div>
              <div>
                <a href="/route">Accident Towing</a>
              </div>
              <div>
                <a href="/route">Winching & Recovery Service</a>
              </div>
              <div>
                <a href="/route">Car & Light Truck Towing</a>
              </div>
              <div>
                <a href="/route">Flatbed Towing</a>
              </div>
              <div>
                <a href="/route">Show Car Transporting</a>
              </div>
              <div>
                <a href="/route">Fuel Delivery Service</a>
              </div>
              <div>
                <a href="/route">Jumpstart Service</a>
              </div>
              <div>
                <a href="/route">Lockout Service</a>
              </div>
              <div>
                <a href="/route">Tire Change & Repair</a>
              </div>
              <div>
                <a href="/route">Cash For Junk Cars Service</a>
              </div>
              <div>
                <a href="/route">Junk Car Removal</a>
              </div>
            </div>
          </div>

          <div className="footer-col-sitemap">
            <div className="footer-col-sitemap-title">Get In Touch </div>
            <div className="sitemap-body">
              <div>
                Minnesota towing services,
                <br />
                1047 Raymond Avenue,
                <br />
                St. Paul, MN 55108
                <br />
                <br />
                Minnesota towing services,
                <br />
                526 Continental dr,
                <br />
                New Brighton,
                <br /> MN 55112
              </div>
            </div>
            <div className="footer-mobile">
              <a href="/route">(651) 917 - 0192</a>
            </div>
            <div className="footer-gmail">
              <a href="/route">shawnstowing@gmail.com</a>
            </div>{" "}
            <div className="sitemap-body"><div><br />24 hours a day, 7 days a week</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
