import PropTypes from 'prop-types';
// @mui
import { Box, Container } from '@mui/material';
// utils
import { getAllPosts } from '../src/utils/get-mardown/travel/posts';
// hooks
import { useRequest } from '../src/hooks';
// _data
import { _testimonials } from '../_data/mock';
// layouts
import Layout from '../src/layouts';
import B1 from '../src/assets/images/b1.png';
import B2 from '../src/assets/images/b2.png';
import B3 from '../src/assets/images/b3.jpg';
import B4 from '../src/assets/images/b4.png';
import B5 from '../src/assets/images/b5.png';
import Imagebg from '../src/sections/@travel/landingPage/imagebg';
import Contactusbg from '../src/sections/@travel/landingPage/Contactusbg';
// components
import { Page, ErrorScreen } from '../src/components';
// sections
import { styled } from '@mui/material/styles';
import { TravelLandingHero, TravelLandingIntroduce } from '../src/sections/@travel';
import TravelLandingIntroduceOurServices from '../src/sections/@travel/landing/TravelLandingIntroduceOurServices';
import Loader from './travel/Premium/Loader';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------
const text = [{ title: 'Your global chauffeur service' }];

TravelLandingPage.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function TravelLandingPage({ posts }) {
  const { data: tours = [], error } = useRequest('/api/travel/tours');

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <Page title="Home">
      <Loader />
      <Box sx={{ position: 'relative' }}>
        <TravelLandingHero />
      </Box>
      <TravelLandingIntroduce tours={brandsColor} />
      <Imagebg />
      <TravelLandingIntroduceOurServices />
      <Contactusbg/>
    </Page>
  );
}
// ----------------------------------------------------------------------
TravelLandingPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
// ----------------------------------------------------------------------
export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
}
//-----------------------------------------------------------------------
export const brandsColor = [
  {
    id: 1,
    image: B1,
  },
  {
    id: 2,
    image: B2,
  },
  {
    id: 3,
    image: B3,
  },
  {
    id: 4,
    image: B4,
  },
  {
    id: 4,
    image: B5,
  },
];
