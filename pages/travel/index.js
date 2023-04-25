import PropTypes from 'prop-types';
// @mui
import { Box, Container } from '@mui/material';
// utils
import { getAllPosts } from '../../src/utils/get-mardown/travel/posts';
// hooks
import { useRequest } from '../../src/hooks';
// _data
import { _testimonials } from '../../_data/mock';
// layouts
import Layout from '../../src/layouts';
// components
import { Page, ErrorScreen } from '../../src/components';
// sections
import { NewsletterTravel } from '../../src/sections/newsletter';
import { TestimonialsTravel } from '../../src/sections/testimonials';
import { BlogTravelLandingLatestPosts } from '../../src/sections/blog';
import B1 from '../../src/assets/images/b1.png'
import B2 from '../../src/assets/images/b2.png'
import B3 from '../../src/assets/images/b3.jpg'
import B4 from '../../src/assets/images/b4.png'
import B5 from '../../src/assets/images/b5.png'

import {
  TravelLandingHero,
  TravelLandingSummary,
  TravelTourBarFilters,
  TravelLandingIntroduce,
  TravelLandingIntroduceOurServices,
  TravelLandingToursByCity,
  TravelLandingTourFeatured,
  TravelLandingFavoriteDestinations,
} from '../../src/sections/@travel';
import Imagebg from '../../src/sections/@travel/landingPage/imagebg';

// ----------------------------------------------------------------------

TravelLandingPage.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function TravelLandingPage({ posts }) {
  const { data: tours = [], error } = useRequest('/api/travel/tours');

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <Page title="Landing - Travel">
      <Box sx={{ position: 'relative' }}>
        <TravelLandingHero />
      </Box>

      <TravelLandingIntroduce tours={brandsColor} />
      <Imagebg />
      <TravelLandingIntroduceOurServices/>
      {/* <TravelLandingSummary />  */}

      {/* <TravelLandingFavoriteDestinations tours={tours.slice(0, 4)} /> */}

      {/* <TravelLandingTourFeatured tours={tours.slice(0, 4)} /> */}

      {/* <TravelLandingToursByCity tours={tours.slice(0, 8)} />  */}

      {/* <BlogTravelLandingLatestPosts posts={posts.slice(0, 4)} /> */}

      {/* <TestimonialsTravel testimonials={_testimonials} /> */}

      {/* <NewsletterTravel /> */}
    </Page>
  );
}

// ----------------------------------------------------------------------

TravelLandingPage.getLayout = function getLayout(page) {
  return <Layout transparentHeader>{page}</Layout>;
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