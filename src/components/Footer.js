"use client";

import React, { useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import EmailOutlinedIcon from "@mui/icons-material/Email";
import SmartphoneOutlinedIcon from "@mui/icons-material/Smartphone";
import Image from "next/image";

const Footer = () => {
  // useEffect(() => {
  //   // Create a script element
  //   const script = document.createElement("script");
  //   script.src = "https://platform.linkedin.com/badges/js/profile.js";
  //   script.async = true;
  //   script.defer = true;
  //   script.type = "text/javascript";

  //   // Append the script to the document body
  //   document.body.appendChild(script);

  //   // Clean up
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <AppBar position="static" style={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 2,
            width: "100%",
          }}
        >
          {/* <div
            class="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="medium"
            data-theme="dark"
            data-type="VERTICAL"
            data-vanity="mitchel-clark-b26a02229"
            data-version="v1"
          >
            <a
              class="badge-base__link LI-simple-link"
              target="_blank"
              href="https://au.linkedin.com/in/mitchel-clark-b26a02229?trk=profile-badge"
            ></a>
          </div> */}

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              component="a"
              href="https://www.linkedin.com/in/mitchel-clark-b26a02229/" // Replace with your app's URL
              target="_blank"
              rel="noopener noreferrer"
              sx={{ mr: 6 }}
            >
              <Image
                src="/images/In-White-96.png"
                alt="Background Image"
                width={4928} // Natural width of the image
                height={3280} // Natural height of the image
                priority
                style={{
                  width: 24,
                  height: "auto", // Auto for maintaining aspect ratio
                }}
              />
            </Button>

            <SmartphoneOutlinedIcon sx={{ fontSize: 24 }} />
            <Typography variant="body1" sx={{ pl: 1, pr: 6 }}>
              0478 291 959
            </Typography>

            <EmailOutlinedIcon sx={{ fontSize: 24 }} />
            <Typography variant="body1" sx={{ pl: 1, pr: 6 }}>
              mitchelclark1997@outlook.com
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
