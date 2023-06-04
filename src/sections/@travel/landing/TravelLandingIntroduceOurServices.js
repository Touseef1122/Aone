import { useRef, useState } from 'react';
// icons
import playIcon from '@iconify/icons-carbon/play';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Container, Stack, Box, Card } from '@mui/material';
// hooks
import { useBoundingClientRect, useResponsive } from '../../../hooks';
// _data
import _mock from '../../../../_data/mock';
import RAU from '../../../assets/images/RAU.jpg';
import IOS from '../../../assets/images/IOS.jpg';
import IOSF from '../../../assets/images/IOSF.jpg';
import sou from '../../../assets/images/sou.jpg';
import A1 from '../../../assets/images/a1bg.jpg';
import FTFB from '../../../assets/images/FTFB.jpg';
import PBSF from '../../../assets/images/PBSF.jpeg';
import ASF from '../../../assets/images/ASF.jpg';

// components
import {
  SvgIconStyle,
  Image,
  TextIconLabel,
  Iconify,
  PlayerWithButton,
  TextMaxLine,
} from '../../../components';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

const summary = [
 
  {
    title: 'Asbuilt Sureys FTTP',
    image: ASF,
    link: 'Learn More',
    path:"/travel/Premium/cityToCity"
  },
  {
    title: 'Installation Of Subducting',
    image: IOS,
    link: 'Learn More',
    path:"/travel/Premium/airportTransfer"
  },
  
  
];
const summary1=[
  {
  title: 'Test Rod and Rope to prove the Network PIA',
  image: RAU,
  link: 'Learn More',
  path:"/travel/Premium/airportTransfer"
},
{
  title: 'Pre-build Sureys FTTP',
  image: PBSF,
  link: 'Learn More',
  path:"/travel/chauffeur-hailing/hailing"
},
{
  title: 'Installation Of Fiber optic cables Underground and Overhead',
  image: IOSF,
  link: 'Learn More',
  path:"/travel/Premium/airportTransfer"
}
];
const summary2=[
{
  title: 'Splicing Underground and Overhead',
  image: sou,
  link: 'Learn More',
  path:"/travel/Premium/cityToCity"
},

{
  title: 'Fiber testing full build',
  image: A1,
  link: 'Learn More',
  path:"/travel/chauffeur-hailing/hailing"
}
];
const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------

export default function TravelLandingIntroduceOurServices() {
  const isDesktop = useResponsive('up', 'md');
  const router = useRouter();

  const containerRef = useRef(null);
  const container = useBoundingClientRect(containerRef);

  const [openVideo, setOpenVideo] = useState(false);

  const handleOpenVideo = () => {
    setOpenVideo(true);
  };

  const handleCloseVideo = () => {
    setOpenVideo(false);
  };

  const offsetLeft = container && container.left + 20;

  return (
    <>
      <RootStyle>
        <Typography variant="h3" textAlign="center" alignItems="center" pb="25px">
          Our Services
        </Typography>

        <Container sx={{ textAlign: 'center' }}>
          <Box
            sx={{
              display: 'grid',
              gap: 15,
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
              },
            }}
          >
            {summary.map((value) => (
              <div key={value.title}>
                <Image
                  src={value.image?.src}
                  sx={{
                    width: '100%',
                    height: 250,
                    mx: 'auto',
                    borderRadius: '10px',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
                    '&:hover': {
                      opacity: 0.8,
                      transform: 'scale(0.9)',
                      cursor: 'pointer',
                    },
                  }}
                />
                <Stack >
                  <TextMaxLine variant="h6">
                    {' '}
                    {value.title}
                  </TextMaxLine>
                  
            
                </Stack>
              </div>
            ))}
          </Box>
          <Box
            sx={{
              display: 'grid',
              gap: 15,
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                md: 'repeat(3, 1fr)',
              },
            }}
          >
            {summary1.map((value) => (
              <div key={value.title}>
                <Image
                  src={value.image?.src}
                  sx={{
                    width: '100%',
                    height: 250,
                    mx: 'auto',
                    borderRadius: '10px',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
                    '&:hover': {
                      opacity: 0.8,
                      transform: 'scale(0.9)',
                      cursor: 'pointer',
                    },
                  }}
                />
                <Stack >
                  <TextMaxLine variant="h6">
                    {' '}
                    {value.title}
                  </TextMaxLine>
                  
            
                </Stack>
              </div>
            ))}
          </Box>
          <Box
            sx={{
              display: 'grid',
              gap: 15,
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
              },
            }}
          >
            {summary2.map((value) => (
              <div key={value.title}>
                <Image
                  src={value.image?.src}
                  sx={{
                    width: '100%',
                    height: 250,
                    mx: 'auto',
                    borderRadius: '10px',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
                    '&:hover': {
                      opacity: 0.8,
                      transform: 'scale(0.9)',
                      cursor: 'pointer',
                    },
                  }}
                />
                <Stack >
                  <TextMaxLine variant="h6" >
                    {' '}
                    {value.title}
                  </TextMaxLine>
                  
            
                </Stack>
              </div>
            ))}
          </Box>
        </Container>
      </RootStyle>
      <PlayerWithButton open={openVideo} onClose={handleCloseVideo} videoPath={_mock.video} />
    </>
  );
}
