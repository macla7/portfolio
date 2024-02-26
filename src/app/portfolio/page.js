import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import NextLink from "next/link";

import Image from "next/image";

export default function About() {
  return (
    <Box
      sx={{
        my: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mx: 8,
      }}
    >
      {/* <Typography variant="h4" component="h1">
        Portfolio
      </Typography> */}
      <Typography
        variant="h2"
        sx={{
          textAlign: { xs: "center", sm: "center", md: "start" },
        }}
      >
        Shift It.
      </Typography>
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          textAlign: { xs: "center", sm: "center", md: "start" },
        }}
      >
        Founder
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
        }}
      >
        <Box sx={{ mr: { xs: 0, sm: 0, md: 6 }, pb: { xs: 2, sm: 2, md: 0 } }}>
          <Image
            src="/images/mobile_app_examples.png"
            alt="Background Image"
            width={3125} // Natural width of the image
            height={3125} // Natural height of the image
            priority
            style={{
              width: "100%",
              height: "auto", // Auto for maintaining aspect ratio
              maxWidth: "900px",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "center", sm: "center", md: "start" },
          }}
        >
          <Typography variant="body1" sx={{ mb: 2 }}>
            Funding from Monash University
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            React Native frontend and Ruby on Rails API
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Integration with AWS microservices including S3 storage, route 53
            and SES.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Design and wireframe creation with Figma and Canva
          </Typography>

          <Box
            sx={{
              display: "flex",
              width: "100%",
              mb: 2,
            }}
          >
            <Button
              component="a"
              href="https://apps.apple.com/au/app/shift-pals/id6449267356" // Replace with your app's URL
              target="_blank"
              rel="noopener noreferrer"
              sx={{ padding: 0, mr: 2 }}
            >
              <img
                src="/images/app-store-badge.svg"
                alt="App store badge"
                style={{ height: 50 }}
              />
            </Button>
            <Button
              component="a"
              href="https://play.google.com/store/apps/details?id=com.macla7.shift_it&pli=1" // Replace with your app's URL
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: 0,
              }}
            >
              <img
                src="/images/cropped-android.png"
                alt="Google Play Badge"
                style={{ height: 50 }}
              />
            </Button>
          </Box>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Button
              component="a"
              href="https://github.com/macla7/STAPI" // Replace with your app's URL
              target="_blank"
              rel="noopener noreferrer"
              style={{}}
            >
              <img
                src="/images/github-mark-white.png"
                alt="Github cat logo"
                style={{ height: 30 }}
              />
              <img
                src="/images/GitHub_Logo_White.png"
                alt="Github logo"
                style={{ height: 40 }}
              />
            </Button>
          </Box>
        </Box>
      </Box>

      <Typography
        variant="h2"
        sx={{
          mt: 12,
          textAlign: { xs: "center", sm: "center", md: "start" },
        }}
      >
        Westpac
      </Typography>
      <Typography
        variant="h5"
        sx={{
          mb: 4,
          textAlign: { xs: "center", sm: "center", md: "start" },
        }}
      >
        Full Stack Developer
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          mb: 12,
        }}
      >
        <Box sx={{ mr: { xs: 0, sm: 0, md: 6 }, pb: { xs: 2, sm: 2, md: 0 } }}>
          <Image
            src="/images/Westpac_logo_PNG2.png"
            alt="Background Image"
            width={3125} // Natural width of the image
            height={3125} // Natural height of the image
            priority
            style={{
              width: "100%",
              height: "auto", // Auto for maintaining aspect ratio
              maxWidth: "300px",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "center", sm: "center", md: "start" },
          }}
        >
          <Typography variant="body1" sx={{ mb: 2 }}>
            Internal webapp for trading teams
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            HTML, CSS and Javascript Frontend
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Java Backend
          </Typography>
        </Box>
      </Box>

      {/* <Box sx={{ display: 'flex', flexDirection: 'row', mt: 12 }}>
        <Box sx={{ mr: 6 }}>
          <Image
            src="/images/Westpac_logo_PNG2.png"
            alt="Background Image"
            width={3125} // Natural width of the image
            height={3125} // Natural height of the image
            priority
            style={{
              width: '100%',
              height: 'auto', // Auto for maintaining aspect ratio
              maxWidth: '900px',
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography variant="body1" sx={{ mb: 2 }}>
            ReactJS frontend
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Hosted on AWS amplify
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <Button variant="contained" component={NextLink} href="/">
              Go to Landing Page
            </Button>
          </Box>
        </Box>
      </Box> */}
    </Box>
  );
}
