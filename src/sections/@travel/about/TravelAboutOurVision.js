// @mui
import { styled } from '@mui/material/styles';
import { Stack, Container, Typography, Grid, Card } from '@mui/material';
// components
import { Image } from '../../../components';
import { varBounce } from '../../../components/animate';
import { m } from 'framer-motion';
// ----------------------------------------------------------------------

const VISIONS = [
  {
    name: 'Innovative Communication',
    description:
      ' Our company commitment to empowering its customers and helping them succeed in a digital world where connectivity is essential.',
  },
  {
    name: 'Secure Connections',
    description: 'We providing high-quality communication services that are dependable and secure.',
  },
  { name: 'Reliable Connections', description: 'Suspendisse feugiat. Quisque id odio.' },
];

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

// ----------------------------------------------------------------------

export default function TravelAboutOurVision() {
  return (
    <RootStyle>
      <Container>
        <Stack
          spacing={3}
          sx={{
            maxWidth: 466,
            mb: { xs: 8, md: 5 },
            mx: { xs: 'auto', md: 'unset' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h2">Our Mission</Typography>
        </Stack>

        <Grid
          container
          spacing={{ xs: 8, md: 3 }}
          justifyContent="space-between"
          alignItems={{ md: 'center' }}
        >
          <Grid item xs={12} md={6} lg={5}>
            <m.div variants={varBounce().in}>
              <Image
                alt="vision"
                src="https://zone-assets-api.vercel.app/assets/illustrations/illustration_vision.svg"
              />
            </m.div>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Stack
              sx={{
                position: 'relative',
              }}
              alignItems={{ md: 'flex-end' }}
            >
              {VISIONS.map((vision, index) => {
                const { name } = vision;
                const firstVision = index === 0;
                const secondVision = index === 1;
                const thirdVision = index === 2;

                return (
                  <Card
                    key={name}
                    sx={{
                      p: 4,
                      mt: 4,
                      width: { md: 'calc(50% - 16px)' },
                      ...(firstVision && {
                        top: { md: 0 },
                        left: { md: 0 },
                        bottom: { md: 0 },
                        my: { md: 'auto' },
                        boxShadow: { xs: 500 },
                        maxHeight: { md: 304 },
                        display: { md: 'flex' },
                        position: { md: 'absolute' },
                        flexDirection: { md: 'column' },
                        justifyContent: { md: 'center' },
                      }),
                      ...(secondVision && {
                        boxShadow: (theme) => ({ md: theme.customShadows.z24 }),
                      }),
                      ...(thirdVision && {
                        boxShadow: { md: 0 },
                      }),
                    }}
                  >
                    <Typography variant="h3" component="h2" sx={{ color: '#4d4dff', mb: 3 }}>
                      {`0${index + 1}`}
                    </Typography>

                    <Typography variant="h5" paragraph>
                      {name}
                    </Typography>

                    {/* <Typography sx={{ color: 'text.secondary' }}>{description}</Typography> */}
                  </Card>
                );
              })}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
