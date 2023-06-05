// @mui
import { Grid, Container, Typography, Box } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
// _data
import _mock from '../../../../_data/mock';
// components
import { Image, CountUpNumber } from '../../../components';

import H1 from '../../../assets/images/H1.jpg';
import H2 from '../../../assets/images/H2.jpg';
import H3 from '../../../assets/images/H3.jpg';
import H4 from '../../../assets/images/H4.jpg';
const imagePaths = [{ img: H1 }, { img: H2 }, { img: H3 }, { img: H4 }];

// ----------------------------------------------------------------------

const IMAGES = [...Array(4)].map((_, index) => _mock.image.travel(index + 2));

const SUMMARY = [
  { name: ' Glaisdale Ave', number: 70 },
  { name: 'Benton Rd', number: 96 },
  { name: 'Briardene Ave', number: 71 },
  { name: 'Easby Ave', number: 77 },
];

// ----------------------------------------------------------------------

export default function TravelAbout() {
  return (
    <Container>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{
          py: { xs: 8, md: 10 },
        }}
      >
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Typography variant="h1" sx={{ mb: 3 }}>
            Welcome to A1 Telecom!
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            We are a leading telecommunications company that provides a wide range of services to
            customers across the city. Our mission is to provide high-quality communication services
            that are reliable, secure, and affordable.{' '}
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {imagePaths?.map((path, index) => (
          <Grid
            key={path}
            item
            xs={12}
            sm={6}
            md={index === 0 ? 6 : 2}
            sx={{
              ...((index === 1 || index === 2 || index === 3) && {
                display: { xs: 'none', sm: 'block' },
              }),
            }}
          >
            <Image  src={path.img?.src} sx={{ height: 350, borderRadius: 2 }} />
          </Grid>
        ))}
      </Grid>


      <Box
        sx={{
          mt: { xs: 8, md: 10 },
          mb: { xs: 8, md: 15 },
          textAlign: 'center',
          display: 'grid',
          rowGap: 5,
          columnGap: 3,
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {SUMMARY.map((value) => (
          <div key={value.name}>
            <Typography variant="h2" gutterBottom>
              <CountUpNumber
                start={value.number / 5}
                end={value.number}
                formattingFn={(value) => fShortenNumber(value)}
              />

              <Typography
                variant="h6"
                // fontSize="10px"
                component="span"
                sx={{ verticalAlign: 'top', ml: 0.5, color: 'primary.main' }}
              >
                +con
              </Typography>
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {value.name}
            </Typography>
          </div>
        ))}
      </Box>

      <Grid
        container
        spacing={{ xs: 5, md: 3 }}
        justifyContent="space-between"
        sx={{ textAlign: { xs: 'center', md: 'left' } }}
      >
        <Grid item xs={12} md={6} lg={5}>
          <Box
            sx={{
              mb: 2,
              width: 24,
              height: 3,
              borderRadius: 3,
              bgcolor: 'primary.main',
              mx: { xs: 'auto', md: 0 },
            }}
          />
          <Typography variant="h5">
            At A1 Telecom, we understand the importance of staying connected in today's fast-paced
            world. Whether you're a small business owner, a large corporation, or an individual
            looking for reliable communication services, we have the solutions you need.{' '}
          </Typography>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Typography variant="h4" paragraph>
            Our services includes
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Our services include voice, data, and video communication services, as well as managed
            network services, cloud services, and IT consulting. We work with the latest
            technologies to ensure that our customers have access to the most advanced and efficient
            communication tools available.
            <br />
            <br />
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
