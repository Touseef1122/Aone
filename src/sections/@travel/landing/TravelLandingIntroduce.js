import PropTypes from 'prop-types';
import Slider from 'react-slick';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Typography, Stack, Container, Paper, Box } from '@mui/material';
// components
import { Image } from '../../../components';
import { responsiveFontSizes } from 'src/utils/getFontValue';

// ----------------------------------------------------------------------

const RootStyle = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(5, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

// ----------------------------------------------------------------------

OurClientsCareer.propTypes = {
  tours: PropTypes.array.isRequired,
};
export default function OurClientsCareer({ tours }) {
  const theme = useTheme();

  const carouselSettings = {
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    rtl: Boolean(theme.direction === 'rtl'),
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <RootStyle sx={{ backgroundColor: 'white' }}>
      <Container>
        <Stack
          spacing={5}
          sx={{
            textAlign: 'center',
            mb: { xs: 2, md: 2 },
          }}
        >
          <Typography sx={{ color: 'black', fontSize: { xs: '14px', md: '24px' } }}>
            We are working with
          </Typography>
        </Stack>

        <Stack
          sx={{
            display: 'grid',
            gridTemplateColumns: ['1fr 1fr', '1fr 1fr 1fr 1fr 1fr', '1fr 1fr 1fr 1fr 1fr'],
            ml: ['10px', '20px', '50px'],
            mr: ['10px', '20px', '50px'],
            gap: [2, 4, 5],
          }}
        >
          {tours?.map((tour) => (
            <Box key={tour.id}>
              <Image
                src={tour.image.src}
                sx={{
                  width: { xs: '100%', md: '100%' },
                  height: { xs: 'auto', md: '40px' },
                  ImageSize: 'contain',
                }}
              />
            </Box>
          ))}
        </Stack>
      </Container>
    </RootStyle>
  );
}
