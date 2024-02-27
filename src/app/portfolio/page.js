import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
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
          justifyContent: "center",
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
          <Typography variant="h5" sx={{ mb: 2 }}>
            Project
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            App to help nurses swap and manage their shifts
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Funding from Monash University
          </Typography>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Technical Work
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            React Native frontend, styled using React Native Paper
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Ruby on Rails API, using JWT tokens for authorization, Sidekiq for
            background job management and a Redis server for WebSockets
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Integration with AWS including S3 storage, route 53 and Simple Email
            Service (SES)
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Tests with the Jest testing framework
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Utilising Figma and Canva for design and wireframe creation for user
            testing and presenting
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
          justifyContent: "center",
          alignItems: { xs: "center", sm: "center", md: "center" },
          flexDirection: { xs: "column", sm: "column", md: "row" },
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
            justifyContent: "start",
            alignItems: { xs: "center", sm: "center", md: "start" },
            maxWidth: { xs: "100%", sm: "100%", md: "30%" },
          }}
        >
          <Typography variant="h5" sx={{ mb: 2 }}>
            Project
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Internal webapp for trading teams
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Was the scrum master for my Agile full stack development team. My
            responsibility is to keep the team on track and prioritise
            effectively to continuously deliver improvements for the users
          </Typography>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Technical Work
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Frontend built using HTML, CSS, Javascript, Bootstrap, and JQuery to
            build custom and reusable components
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Implemented comprehensive regression tests for all the key user
            workflows using the Jest testing framework
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            A Java backend built with the Spring Framework
          </Typography>
        </Box>
      </Box>

      <Typography
        variant="h2"
        sx={{
          mt: 12,
          textAlign: { xs: "center", sm: "center", md: "start" },
        }}
      >
        Smaller Projects
      </Typography>
      <Typography
        variant="h5"
        sx={{
          mb: 4,
          textAlign: { xs: "center", sm: "center", md: "start" },
        }}
      >
        Self-Teaching
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: { xs: "center", sm: "center", md: "center" },
          flexDirection: { xs: "column", sm: "column", md: "row" },
          mb: 12,
        }}
      >
        <Box sx={{ mr: { xs: 0, sm: 0, md: 6 }, pb: { xs: 2, sm: 2, md: 0 } }}>
          <Image
            src="/images/the-odin-project-logos-idxqyQyT9i.png"
            alt="Odin Project Logo"
            width={1000} // Natural width of the image
            height={1000} // Natural height of the image
            priority
            style={{
              width: "100%",
              height: "auto", // Auto for maintaining aspect ratio
              maxWidth: "200px",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: { xs: "center", sm: "center", md: "start" },
            maxWidth: { xs: "100%", sm: "100%", md: "30%" },
          }}
        >
          <Typography variant="body1" sx={{ mb: 2 }}>
            In the process of self teaching, primarily through the amazing
            course at{" "}
            <Link
              component={NextLink}
              href="https://www.theodinproject.com/"
              target="_blank"
            >
              The Odin Project
            </Link>
            , I built many different projects
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            A React{" "}
            <Link
              component={NextLink}
              href="https://github.com/macla7/battleship"
              target="_blank"
            >
              "Battleship" game{" "}
            </Link>
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            A React{" "}
            <Link
              component={NextLink}
              href="https://github.com/macla7/waldo"
              target="_blank"
            >
              "Where's Wally" game
            </Link>
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            One of my very first projects - a Ruby command line{" "}
            <Link
              component={NextLink}
              href="https://github.com/macla7/chess_game"
              target="_blank"
            >
              chess game
            </Link>
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            And the{" "}
            <Link
              component={NextLink}
              href="https://github.com/macla7?tab=repositories"
              target="_blank"
            >
              list of repos goes on...
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
