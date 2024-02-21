import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NextLink from 'next/link';

import Image from 'next/image';

export default function About() {
  return (
    <Box
      sx={{
        my: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        mx: 8,
      }}
    >
      {/* <Typography variant="h4" component="h1">
        Portfolio
      </Typography> */}
      <Box sx={{ display: 'flex', flexDirection: 'row', mt: 12 }}>
        <Box sx={{ mr: 6 }}>
          <Image
            src="/images/mobile_app_examples.png"
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
            React Native frontend and Ruby on Rails API.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Integration with AWS microservices including S3 storage, route 53 and SES.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Design andwireframe creation with Figma and Canva.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <Button
              component="a"
              href="https://apps.apple.com/au/app/shift-pals/id6449267356" // Replace with your app's URL
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: 0,
              }}
            >
              <img
                src="/images/app-store-badge.svg"
                alt="Google Play Badge"
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
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'row', mt: 24, mb: 12 }}>
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
              maxWidth: '300px',
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
            Internal Webapp for Trading teams
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
