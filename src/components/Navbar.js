import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "@mui/material/Link";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Mitch Clark
        </Typography>

        <Box>
          <Link href="/" component={NextLink}>
            <Button sx={{ color: "#fff" }}>Home</Button>
          </Link>
          <Link href="/portfolio" component={NextLink}>
            <Button sx={{ color: "#fff" }}>Portfolio</Button>
          </Link>
          <Link href="/testimonials" component={NextLink}>
            <Button sx={{ color: "#fff" }}>Testimonials</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
