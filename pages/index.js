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
import B1 from '../src/assets/images/b1.png'
import B2 from '../src/assets/images/b2.png'
import B3 from '../src/assets/images/b3.jpg'
import B4 from '../src/assets/images/b4.png'
import B5 from '../src/assets/images/b5.png'
import Imagebg from '../src/sections/@travel/landingPage/imagebg';

import NewsletterCareer from '../src/sections/newsletter/NewsletterCareer';
// components
import { Page, ErrorScreen } from '../src/components';
// sections
import { NewsletterTravel } from '../src/sections/newsletter';
import { TestimonialsTravel } from '../src/sections/testimonials';
import { BlogTravelLandingLatestPosts } from '../src/sections/blog';
import { DownloadAppCareer } from '../src/sections/download-app';
import { styled } from '@mui/material/styles';
import {
  TravelLandingHero,
  TravelLandingSummary,
  TravelTourBarFilters,
  TravelLandingIntroduce,
  TravelLandingToursByCity,
  TravelLandingTourFeatured,
  TravelLandingFavoriteDestinations,
  Text
} from '../src/sections/@travel';

import TravelLandingTourFeaturedRoutes from '../src/sections/@travel/landing/TravelLandingTourFeaturedRoutes';
import TravelLandingIntroduceOurServices from '../src/sections/@travel/landing/TravelLandingIntroduceOurServices';
import TravelLandingfull from '../src/sections/@travel/landing/TravelLandingfull';
import TravelLandingCars from '../src/sections/@travel/landing/TravelLandingCars';
import Galviston from '../src/assets/images/Galviston.jpg';
import Houston from '../src/assets/images/Houston.jpg';
import Dallas from '../src/assets/images/Dallas.jpg';
import Austin from '../src/assets/images/Austin.jpg';
import Loader from './travel/Premium/Loader'
import ChatButton from './travel/ChatButton'

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------
const text=[
  {title:"Your global chauffeur service"}
]

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
      {/* <Text tour={text}/> */}
        <TravelLandingHero tours={tours.slice(0, 5)} />
        {/* <ChatButton/>   */}

        {/* <Container
          sx={{
            left: 0,
            right: 0,
            bottom: 0,
            mx: 'auto',
            position: { md: 'absolute' },
          }}
        >
          <TravelTourBarFilters onDark sx={{ py: { xs: 3, md: 8 } }} />
        </Container> */}
      </Box>

      {/* <TravelLandingSummary /> */}

      {/* <TravelLandingFavoriteDestinations tours={tours.slice(0, 4)} /> */}
      {/* <TravelLandingIntroduceOurServices /> */}
      {/* <RootStyle>
        <TravelLandingTourFeatured tours={bestcities} />
        <TravelLandingTourFeaturedRoutes tours={bestroutes} />
      </RootStyle> */}
      <TravelLandingIntroduce tours={brandsColor} />
      <Imagebg />
      <TravelLandingIntroduceOurServices/>
      {/* <TravelLandingIntroduce />
      <TravelLandingfull />
      <TravelLandingCars /> */}
      {/* <TravelLandingToursByCity tours={tours.slice(0, 8)} /> */}

      {/* <BlogTravelLandingLatestPosts posts={posts.slice(0, 4)} /> */}

      {/* <TestimonialsTravel testimonials={_testimonials} /> */}

      {/* <NewsletterTravel /> */}
      {/* <RootStyle>
        <DownloadAppCareer />
      </RootStyle> */}
    </Page>
  );
}

//-------------------------------------------------------------------------------
const bestcities = [
  {
    id: 1,
    name: 'Houston',
    dis: '6 routes to/from this city',
    img: Houston,
  },
  {
    id: 2,
    name: 'Dallas',
    dis: '8 routes to/from this city',
    img: Dallas,
  },
  {
    id: 3,
    name: 'Austin',
    dis: '20 routes to/from this city',
    img: Austin,
  },
  {
    id: 4,
    name: 'Galveston',
    dis: '6 routes to/from this city',
    img: Galviston,
  },
];

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
export const  brandsColor =[
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
]