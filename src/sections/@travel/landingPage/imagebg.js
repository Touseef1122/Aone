import * as React from 'react';

import { Typography, Box } from '@mui/material';
import agency from '../../../assets/images/a1bg.jpg';
// import Stack from 'mui/material';
// utils
// components
import { Image } from '../../../components';
// ----------------------------------------------------------------------

export default function Imagebg() {
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Box
        sx={{
          position: 'relative',
          textAlign: 'center',
        }}
      >
        <Image
          alt="hero"
          src={agency.src}
          sx={{
            height: {xs:'20vh', sm:'45vh'},
            bgcolor: 'transparent',
          }}
        />
        <Typography
          variant="h1"
          color="white"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%);',
          }}
        >
          A1 TELECOM 
        </Typography>
        <Typography  variant="h3"
          color="white"
          sx={{
            position: 'absolute',
            top: '80%',
            left: '50%',
            transform: 'translate(-50%, -50%);',
          }}>
        Where communication meets the inovation
        </Typography>
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------
