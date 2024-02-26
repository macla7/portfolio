import * as React from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { Box, Link } from "@mui/material";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" }, // 'column' below 1024px, 'row' otherwise
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "center", sm: "center", md: "start" },
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              mb: 4,
              textAlign: { xs: "center", sm: "center", md: "start" },
            }}
          >
            I Build Websites and Mobile Apps
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 1,
              textAlign: { xs: "center", sm: "center", md: "start" },
            }}
          >
            I Develop Backends
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              textAlign: { xs: "center", sm: "center", md: "start" },
            }}
          >
            With Java, Ruby, Python, NodeJS and SQL
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 1,
              textAlign: { xs: "center", sm: "center", md: "start" },
            }}
          >
            I Develop Frontends
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              textAlign: { xs: "center", sm: "center", md: "start" },
            }}
          >
            With HTML, CSS, Javascript and React
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 1,
              textAlign: { xs: "center", sm: "center", md: "start" },
            }}
          >
            I Develop Mobile Apps
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              textAlign: { xs: "center", sm: "center", md: "start" },
            }}
          >
            With React Native and Expo
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 1,
              textAlign: { xs: "center", sm: "center", md: "start" },
            }}
          >
            I Am Self Taught
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              textAlign: { xs: "center", sm: "center", md: "start" },
            }}
          >
            I get things done.
          </Typography>

          {/* <Copyright /> */}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",

          alignItems: "end",
          maxWidth: "1000px",
          width: "100%",
          padding: { xs: 4, sm: 4, md: 1 },
        }}
      >
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
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          sx={{
            pr: 1,
            color: "text.secondary",
          }}
        >
          Pitching my startup for the Monash Uiversity Accelerator
        </Typography>
      </Box>
    </Box>
  );
}
