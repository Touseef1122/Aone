import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../src/config';
// utils
import { getAllPosts } from '../../src/utils/get-mardown/travel/posts';
// _data
import { _testimonials, _members, _brands } from '../../_data/mock';
// layouts
import Layout from '../../src/layouts';
// components
import { Page } from '../../src/components';
// sections
import { TestimonialsTravel } from '../../src/sections/testimonials';
import { TravelAbout, TravelAboutOurVision } from '../../src/sections/@travel';
// ----------------------------------------------------------------------
const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
}));
// ----------------------------------------------------------------------
TravelAboutUsPage.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function TravelAboutUsPage({ posts }) {
  return (
    <Page title="About Us - Travel">
      <RootStyle>
        <TravelAbout />
        <TravelAboutOurVision />
        <TestimonialsTravel testimonials={_testimonials} />
      </RootStyle>
    </Page>
  );
}
// ----------------------------------------------------------------------
TravelAboutUsPage.getLayout = function getLayout(page) {
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
