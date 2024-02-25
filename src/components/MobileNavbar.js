"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import Link from "@mui/material/Link";
import NextLink from "next/link";

const MobileNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Mitch Clark
        </Typography>

        <Box sx={{}}>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ color: "#fff" }}
          >
            Dashboard
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Link
              component={NextLink}
              href="/"
              sx={{
                textDecoration: "none",
                color: "inherit",
                "&:hover": {
                  textDecoration: "none",
                },
              }}
            >
              <MenuItem onClick={handleClose}>Home</MenuItem>
            </Link>

            <Link
              component={NextLink}
              href="/portfolio"
              sx={{
                textDecoration: "none",
                color: "inherit",
                "&:hover": {
                  textDecoration: "none",
                },
              }}
            >
              <MenuItem onClick={handleClose}>Portfolio</MenuItem>
            </Link>

            <Link
              component={NextLink}
              href="/testamonials"
              sx={{
                textDecoration: "none",
                color: "inherit",
                "&:hover": {
                  textDecoration: "none",
                },
              }}
            >
              <MenuItem onClick={handleClose}>Testamonials</MenuItem>
            </Link>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MobileNavbar;
