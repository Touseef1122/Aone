// next
import dynamic from 'next/dynamic';
// @mui
import { styled } from '@mui/material/styles';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../src/config';
// _data
import { _offices } from '../../_data/mock';
// layouts
import Layout from '../../src/layouts';
// components
import { Page } from '../../src/components';
// sections
import { NewsletterCareer } from '../../src/sections/newsletter';
// import { CareerContactInfo, CareerContactForm } from '../../src/sections/@career';
// import { ContactMap } from '../../src/sections/@travel';
import { TravelContactInfo, TravelContactForm } from '../../src/sections/@travel';

//
const ContactMap = dynamic(() => import('../../src/components/map/ContactMap'));

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  // paddingTop: HEADER_MOBILE_HEIGHT,
  // [theme.breakpoints.up('md')]: {
  //   paddingTop: HEADER_DESKTOP_HEIGHT,
  // },
}));

// ----------------------------------------------------------------------

export default function CareerContactUsPage() {
  return (
    <Page title="Contact Us - Career">
      <RootStyle>
        <TravelContactInfo />
        <ContactMap offices={_offices} />
        <TravelContactForm />
        {/* <NewsletterCareer /> */}
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

CareerContactUsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
