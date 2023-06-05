import PropTypes from 'prop-types';
import * as React from 'react';
// @mui
import RAU from '../../../../src/assets/images/RAU.jpg';
import IOS from '../../../../src/assets/images/IOS.jpg';
import IOSF from '../../../../src/assets/images/IOSF.jpg';
import sou from '../../../../src/assets/images/sou.jpg';
import A1 from '../../../../src/assets/images/a1bg.jpg';
import FTFB from '../../../../src/assets/images/FTFB.jpg';
import PBSF from '../../../../src/assets/images/PBSF.jpeg';
import ASF from '../../../../src/assets/images/ASF.jpg';
import { Typography, List, Box, ListItem, Container, Grid } from '@mui/material';
import { Image, TextMaxLine } from '../../../components';

// ----------------------------------------------------------------------

BusinessCorporations.propTypes = {
  images: PropTypes.array.isRequired,
};
export default function BusinessCorporations({ images }) {
  //   const theme = useTheme();

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' ,mb:"50px" }}>
      <Container>
        <Grid
          container
          row={{ xs: 1 }}
          columnSpacing={{ xs: 1, sm: 2 }}
          spacing={1}
          sx={{
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
          }}
        >
          <Grid item xs={12} md={12} sx={{ width: '50%', position: 'relative', mb:'40px' }}>
            <Typography variant="h3" textAlign="center">
              Our Services
            </Typography>
            <Typography sx={{ fontSize: '0.95 rem' }} textAlign="center">
              We offer high-speed internet, reliable phone service, and mobile plans with great
              coverage. Our phone service has clear call quality and features to fit your needs. We
              have friendly and helpful customer service. Choose us for all your telecommunications
              needs.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ width: '50%', position: 'relative' }}>
            <Image
              src={ASF.src}
              sx={{
                width: '100%',
                height: '400px',
                borderRadius: '20px',
                  
                overflow: 'hidden',
              }}
              layout="fill"
              objectFit="fit"
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{ width: '50%' }}>
            <Box sx={{ px: { md: 4 } }}>
              <Typography variant="h4"> Asbuilt Surveys FTTP </Typography>
              <Typography sx={{ fontSize: '0.95 rem' }} asLink persistent>
                Asbuilt surveys for FTTP (Fiber to the Premises) refer to the process of capturing
                accurate data and information about the fiber optic infrastructure after it has been
                installed. This information is crucial for telecom companies to ensure that the
                infrastructure has been installed according to design specifications and to verify
                that it meets regulatory compliance requirements.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ width: '50%' }}>
            <Box sx={{ px: { md: 4 } }}>
              <Typography variant="h4"> Pre-build Surveys FTTP </Typography>
              <Typography sx={{ fontSize: '0.95 rem' }} asLink persistent>
                Pre-build surveys for FTTP (Fiber To The Premises) involve a detailed assessment of
                the proposed fiber optic network design before the construction phase begins. The
                goal of a pre-build survey is to identify any potential obstacles or issues that
                could affect the successful deployment of the fiber network, such as existing
                infrastructure, environmental considerations, and potential construction challenges.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ width: '50%', position: 'relative' }}>
            <Image
              src={PBSF.src}
              sx={{
                width: '100%',
                height: '400px',
                borderRadius: '20px',
                  
                overflow: 'hidden',
              }}
              layout="fill"
              objectFit="fit"
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{ width: '50%', position: 'relative' }}>
            <Box>
              <Image
                src={RAU.src}
                sx={{
                  width: '100%',
                  height: '400px',
                  borderRadius: '20px',
                    
                  overflow: 'hidden',
                }}
                layout="fill"
                objectFit="fit"
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ width: '50%' }}>
            <Box sx={{ px: { md: 4 } }}>
              <Typography variant="h4"> Test Rod and Rope to prove the Network PIA </Typography>
              <Typography sx={{ fontSize: '0.95 rem' }} asLink persistent>
                Test rod and rope is a common method used to prove the Network PIA (Physical
                Infrastructure Access) in telecommunications. This method involves using a
                lightweight rod and rope to verify that the duct or conduit is clear of obstructions
                before new cables are installed.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ width: '50%' }}>
            <Box sx={{ px: { md: 4 } }}>
              <Typography variant="h4"> Installation Of Subducting </Typography>
              <Typography sx={{ fontSize: '0.95 rem' }} asLink persistent>
                The installation of subducting is an important process in the construction of
                telecommunications networks, particularly in fiber optic networks. Subducts are
                plastic or PVC pipes that are laid in the ground, usually alongside roads or
                footpaths, to provide a protective casing for fiber optic cables.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ width: '50%', position: 'relative' }}>
            <Image
              src={IOS.src}
              sx={{
                width: '100%',
                height: '400px',
                borderRadius: '20px',
                  
                overflow: 'hidden',
              }}
              layout="fill"
              objectFit="fit"
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{ width: '50%', position: 'relative' }}>
            <Image
              src={IOSF.src}
              sx={{
                width: '100%',
                height: '400px',
                borderRadius: '20px',
                  
                overflow: 'hidden',
              }}
              layout="fill"
              objectFit="fit"
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{ width: '50%' }}>
            <Box sx={{ px: { md: 4 } }}>
              <Typography variant="h4"> Inastallation Of Fiber Optics cables </Typography>
              <Typography sx={{ fontSize: '0.95 rem' }} asLink persistent>
                Fiber optic cable installation involves several steps, including cable preparation,
                splicing, termination, and testing. The cables are lightweight, flexible, and
                durable. They transmit data using light instead of electricity, allowing for faster
                and more reliable communication. During installation, care is taken to avoid damage
                to the cable, and it is tested to ensure optimal performance. Once installed, fiber
                optic cables provide high-speed internet, clearer phone calls, and sharper TV
                images.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ width: '50%' }}>
            <Box sx={{ px: { md: 4 } }}>
              <Typography variant="h4"> Fiber testing full build </Typography>
              <Typography sx={{ fontSize: '0.95 rem' }} asLink persistent>
                The installation of subducting is an important process in the construction of
                telecommunications networks, particularly in fiber optic networks. Subducts are
                plastic or PVC pipes that are laid in the ground, usually alongside roads or
                footpaths, to provide a protective casing for fiber optic cables.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ width: '50%', position: 'relative' }}>
            <Image
              src={A1.src}
              sx={{
                width: '100%',
                height: '400px',
                borderRadius: '20px',
                  
                overflow: 'hidden',
              }}
              layout="fill"
              objectFit="fit"
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{ width: '50%', position: 'relative' }}>
            <Image
              src={sou.src}
              sx={{
                width: '100%',
                height: '400px',
                borderRadius: '20px',
                  
                overflow: 'hidden',
              }}
              layout="fill"
              objectFit="fit"
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{ width: '50%' }}>
            <Box sx={{ px: { md: 4 } }}>
              <Typography variant="h4"> Splicing Underground and Overhead </Typography>
              <Typography sx={{ fontSize: '0.95 rem' }} asLink persistent>
                Fiber optic cable installation involves several steps, including cable preparation,
                splicing, termination, and testing. The cables are lightweight, flexible, and
                durable. They transmit data using light instead of electricity, allowing for faster
                and more reliable communication. During installation, care is taken to avoid damage
                to the cable, and it is tested to ensure optimal performance. Once installed, fiber
                optic cables provide high-speed internet, clearer phone calls, and sharper TV
                images.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------
