import PropTypes from 'prop-types';
import * as React from 'react';
import { useRouter } from 'next/router';
import { Typography, Box, Grid } from '@mui/material';
import { Image } from '../../../components';

import { m, useCycle, AnimatePresence } from 'framer-motion';
import { varFade } from '../../../components/animate';


//-------------------------------------------------------------------

BusinessOverview.propTypes = {
  image: PropTypes.array.isRequired,
};
export default function BusinessOverview({ image }) {
  const router = useRouter();
  return (
    <Box sx={{ width: '100%', mt: '25px' }}>
      <Box
        sx={{
          position: 'relative',
          textAlign: 'center',
        }}
      >
        {image.map((value) => (
          <div key={value.bg}>
            <Image
              sx={{
                height: { md: '70vh' },
                bgcolor: 'transparent',
              }}
              alt=""
              data-src="https://images.squarespace-cdn.com/content/v1/615ac0f0c1e222480279d1ff/9bd67aba-02bc-4b64-94e0-4af1105ac23b/sunderland-aerial.jpeg"
              data-image="https://images.squarespace-cdn.com/content/v1/615ac0f0c1e222480279d1ff/9bd67aba-02bc-4b64-94e0-4af1105ac23b/sunderland-aerial.jpeg"
              data-image-dimensions="1760x1226"
              data-image-focal-point="0.6843207399005322,0.41605200650081264"
              data-load="false"
              srcset="https://images.squarespace-cdn.com/content/v1/615ac0f0c1e222480279d1ff/9bd67aba-02bc-4b64-94e0-4af1105ac23b/sunderland-aerial.jpeg?format=100w 100w,https://images.squarespace-cdn.com/content/v1/615ac0f0c1e222480279d1ff/9bd67aba-02bc-4b64-94e0-4af1105ac23b/sunderland-aerial.jpeg?format=300w 300w,https://images.squarespace-cdn.com/content/v1/615ac0f0c1e222480279d1ff/9bd67aba-02bc-4b64-94e0-4af1105ac23b/sunderland-aerial.jpeg?format=500w 500w,https://images.squarespace-cdn.com/content/v1/615ac0f0c1e222480279d1ff/9bd67aba-02bc-4b64-94e0-4af1105ac23b/sunderland-aerial.jpeg?format=750w 750w,https://images.squarespace-cdn.com/content/v1/615ac0f0c1e222480279d1ff/9bd67aba-02bc-4b64-94e0-4af1105ac23b/sunderland-aerial.jpeg?format=1000w 1000w,https://images.squarespace-cdn.com/content/v1/615ac0f0c1e222480279d1ff/9bd67aba-02bc-4b64-94e0-4af1105ac23b/sunderland-aerial.jpeg?format=1500w 1500w,https://images.squarespace-cdn.com/content/v1/615ac0f0c1e222480279d1ff/9bd67aba-02bc-4b64-94e0-4af1105ac23b/sunderland-aerial.jpeg?format=original 2500w"
              sizes="(max-width: 799px) 200vw, 100vw"
              onload="positionImage(this); this.classList.add('loaded');"
              loading="lazy"
              class="loaded"
            />

            {value.para === 'true' && (
              <>
                <m.div {...varFade().inUp}>
                  <Typography
                    width={{ xs: '80%', md: '50%' }}
                    color="white"
                    varient="h1"
                    sx={{
                      ml: 4,
                      position: 'absolute',
                      top: { xs: '10%', sm: '15%' },
                      fontWeight: 'bold',
                      // fontSize:{xs:"16px",sm:"25px"},
                      textAlign: { xs: 'left' },
                    }}
                  >
                    Experience lightning-fast internet speeds with our top-notch telecommunication
                    services.{' '}
                  </Typography>
                </m.div>

                <m.div {...varFade().inUp}>
                  <Typography
                    width={{ md: '30%' }}
                    color="white"
                    sx={{
                      ml: 4,
                      position: 'absolute',
                      top: '51%',
                      fontWeight: 'bold',
                      fontSize: '1.85 rem',
                      fontSize: { xs: '16px', sm: '30px' },
                      textAlign: { xs: 'left' },
                    }}
                  >
                    A1 Telecoms{' '}
                  </Typography>
                </m.div>
              </>
            )}
            <Typography
              fontSize="40px"
              fontWeight="bold"
              textAlign="center"
              alignItems="center"
              color="black"
              p="25px"
            >
              {value.title}
            </Typography>
          </div>
        ))}
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------
