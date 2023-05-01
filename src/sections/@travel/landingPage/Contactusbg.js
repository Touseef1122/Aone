import * as React from 'react';

import { Typography, Box, Button } from '@mui/material';
import agency from '../../../assets/images/cu.jpg';
// import Stack from 'mui/material';
// utils
// components
import { Image } from '../../../components';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

export default function Imagebg() {
    const router = useRouter();

  return (
    <Box
      sx={{
        width: '100%',
        overflowX: 'hidden',
        mb: '20px',
        boxShadow:
          '0px -30px 60px -30px rgba(0, 0, 0, 0.75), 0px 30px 60px -30px rgba(0, 0, 0, 0.75)',
      }}
    >
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
            height: { xs: '20vh', sm: '45vh' },
            bgcolor: 'transparent',
            // borderRadius: '10px',
            filter: 'brightness(30%)',
            opacity: 0.8,
          }}
        />

        <Typography
          variant="h1"
          color="Black"
          sx={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%);',
          }}
        >
          A1 TELECOM
        </Typography>
        <Button
          variant="contained"
          onClick={() => router.push('/travel/contact-us')}
          sx={{
            position: 'absolute',
            top: '60%',
            left: '45%',
          }}
        >
          Contact-Us{' '}
        </Button>
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------
