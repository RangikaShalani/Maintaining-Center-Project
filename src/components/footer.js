import React from "react";
import { Typography, Button, Grid, TextField, Box } from "@mui/material";
import "../components/style/components.css";
import CallUsBtn from "./callUsBtn";
import EstimateCal from "./estimateCal";

export default function Footer() {
  return (
    <div>
      <div className="footer-container">
        {/* top row */}
        <div className="footer-row-call-us">
          <CallUsBtn isFooter={true} />
        </div>

        {/* row 2 contains all the columns */}
        <div className="footer-col-towing">
          <div>
          <EstimateCal />
          </div>
        </div>
        <div className="footer-col-estimate">
        <Box sx={{ maxWidth: "100%" ,color:"white"}} className="">
              <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
                  <Box display="flex" flexDirection="column">
                    <Typography
                      color="#fff"
                      textAlign="center"
                      className="estimate-cal-header-tex"
                    >
                      ESTIMATE MY
                    </Typography>
                    <Typography
                      color="#FF5C00"
                      textAlign="center"
                      className="estimate-cal-header-tex"
                    >
                      {" "}
                      TOW
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
                            InputProps={{
                            //   endAdornment: <FaAngleDown />,
                            }}
                          />
                          <Typography
                            variant="body1"
                            color="#fff"
                            mt={4}
                          >
                            Where you want to deliver your vehicle?
                          </Typography>
                          <TextField
                            fullWidth
                            variant="outlined"
                            size="small"
                            placeholder="Search"
                            InputProps={{
                            //   endAdornment: <FaSearch />,
                            }}
                          />
                          <Typography
                            variant="body1"
                            color="#fff"
                            mt={4}
                          >
                            Where are you at?
                          </Typography>
                          <TextField
                            fullWidth
                            variant="outlined"
                            size="small"
                            placeholder="Find my Location"
                            InputProps={{
                            //   endAdornment: <IoMdLocate />,
                            }}
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
                            <Typography variant="h4"><Typography color="#FF5C00">$</Typography>120.00</Typography>
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
          <EstimateCal />
        </div>
      </div>
    </div>
  );
}
