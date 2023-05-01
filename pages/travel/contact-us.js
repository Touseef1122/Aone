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
import { TravelContactInfo, TravelContactForm } from '../../src/sections/@travel';

//
const ContactMap = dynamic(() => import('../../src/components/map/ContactMap'));

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({}));

// ----------------------------------------------------------------------

export default function CareerContactUsPage() {
  return (
    <Page title="Contact Us - Career">
      <RootStyle>
        <TravelContactInfo />
        <ContactMap offices={_offices} />
        <TravelContactForm />
      </RootStyle>
    </Page>
  );
}
// ---------------------------------------------------------------------
CareerContactUsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
