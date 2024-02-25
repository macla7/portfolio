import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import NextLink from "next/link";
import ProTip from "@/components/ProTip";
import Copyright from "@/components/Copyright";
import Image from "next/image";

export default function About() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: { xs: 2, md: 8 },
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Testamonials
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            mt: 12,
          }}
        >
          <Typography variant="h6" sx={{ mr: 8, whiteSpace: "nowrap" }}>
            Mitchell Marks, Westpac
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            You have had a fantastic quarter MC. You have refined many of your
            skills and are developing into a strong full-stack developer. In
            particular, your customer contacts implementation shows that you you
            have excelled in your ability to build quality software, discuss
            requirements with the business and refine your solution to meet the
            business needs. It's been a pleasure working with you. Great work!
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            mt: 12,
          }}
        >
          <Typography variant="body1" sx={{ mr: 8 }}>
            You are quite focussed when engaging in discussions and can take a
            problem away and work on it. It may be an unfamiliar technology, but
            you can investigate/skill-up independently.
          </Typography>
          <Typography variant="h6" sx={{ mb: 2, whiteSpace: "nowrap" }}>
            John Foy, Westpac
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            mt: 12,
          }}
        >
          <Typography variant="h6" sx={{ mr: 8, whiteSpace: "nowrap" }}>
            Vince Pompei, Visy
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Mitch has had a terrific year in development and can be relied upon
            by both Anthi and myself to complete assigned tasks. What is
            pleasing is that he has a process improvement mindset and offers
            solutions that are not simply following the same process. This is to
            be commended and there will always be opportunities to embed these
            solutions into the tax workstream. I have seen Mitch grow in
            confidence and establish his network within Visy, e.g. Graduate
            Program Induction and develop good working relationships with site
            accountants, Deloitte and EY.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
