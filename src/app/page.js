import * as React from "react";
import Image from "next/image";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box, Link } from "@mui/material";
import ProTip from "@/components/ProTip";
import Copyright from "@/components/Copyright";
import IconButton from "@mui/material/IconButton";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";

export default function Home() {
  <script
    src="https://platform.linkedin.com/badges/js/profile.js"
    async
    defer
    type="text/javascript"
  ></script>;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // 'column' below 1024px, 'row' otherwise
        justifyContent: "space-around",
        marginTop: "50px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: 'red',
          marginLeft: "30px", // Add some space between content and image
          marginRight: "30px", // Add some space between content and image
        }}
      >
        <Box>
          <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
            I Build Websites and Mobile Apps... Hi!
          </Typography>

          <Typography variant="h6" sx={{ mb: 1 }}>
            I Develop Backends
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            With Java, Ruby, Python, NodeJS and SQL
          </Typography>

          <Typography variant="h6" sx={{ mb: 1 }}>
            I Develop Frontends
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            With HTML, CSS, Javascript and React
          </Typography>

          <Typography variant="h6" sx={{ mb: 1 }}>
            I Develop Mobile Apps
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            With React Native and Expo
          </Typography>

          <Box sx={{ mt: 6, display: "flex", flexDirection: "row" }}>
            <WarningAmberOutlinedIcon />
            <Typography sx={{ ml: 2, color: "text.secondary" }}>
              I am a self taught developer. I don't have a degree in Computer
              Science, I just get things done.
            </Typography>
          </Box>

          {/* <Copyright /> */}
        </Box>
      </Box>

      <Box sx={{ maxWidth: "1000px", width: "100%" }}>
        <Image
          src="/images/background.webp"
          alt="Background Image"
          width={4928} // Natural width of the image
          height={3280} // Natural height of the image
          priority
          style={{
            width: "100%",
            height: "auto", // Auto for maintaining aspect ratio
            maxWidth: "1000px",
            borderRadius: "7px",
          }}
        />
      </Box>
    </Box>
  );
}
