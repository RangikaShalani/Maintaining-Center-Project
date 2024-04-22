import * as React from "react";
import "../App.css";
import "../components/style/components.css";
import { FaArrowCircleUp } from "react-icons/fa";
import { Typography, Button, Grid, TextField, Box } from "@mui/material";
import { Link } from "react-router-dom";

function CallUsBtn({ isFooter }) {
  let className;
  if (isFooter) {
    className = "call-us-btn-cmp call-us-btn-cmp-footer";
  } else {
    className = "call-us-btn-cmp";
  }

  return (
    <div className={className}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={isFooter? 6:12}>
          <button>
            Call Us on{" "}
            <span className="call-us-call-btn-number">(651) 917-0192 </span>
            <FaArrowCircleUp className="call-us-call-icon" />
          </button>
        </Grid>
        {isFooter && <Grid item xs={12} md={6}>
          <div style={{display:"flex" , height:'100%', justifyContent: "flex-end"}}>
            <div className="footer-social-media">
              <div>
                <Link href="https://www.google.com">
                  <img
                    src={"../assets/Icons/social_media/footer_fb.png"}
                    alt="phone-icon"
                  />
                </Link>
              </div>
              <Link href="https://www.google.com">
                <img
                  src={"../assets/Icons/social_media/footer_insta.png"}
                  alt="phone-icon"
                />
              </Link>
              <div>
                <Link href="https://www.google.com">
                  <img
                    src={"../assets/Icons/social_media/footer_x.png"}
                    alt="phone-icon"
                  />
                </Link>
              </div>
              <Link href="https://www.google.com">
                <img
                  src={"../assets/Icons/social_media/footer_yt.png"}
                  alt="phone-icon"
                />
              </Link>
              <div>
                <Link href="https://www.google.com">
                  <img
                    src={"../assets/Icons/social_media/footer_snap.png"}
                    alt="phone-icon"
                  />
                </Link>
              </div>
              <Link href="https://www.google.com">
                <img
                  src={"../assets/Icons/social_media/footer_tiktok.png"}
                  alt="phone-icon"
                />
              </Link>
              <div>
                <Link href="https://www.google.com">
                  <img
                    src={"../assets/Icons/social_media/footer_pinterest.png"}
                    alt="phone-icon"
                  />
                </Link>
              </div>
            </div>
          </div>
        </Grid>}
      </Grid>
    </div>
  );
}

export default CallUsBtn;
