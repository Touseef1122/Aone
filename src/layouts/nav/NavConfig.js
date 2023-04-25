// routes
import Routes from '../../routes';
// _data
import { _tours, _jobs, _courses } from '../../../_data/mock';

// ----------------------------------------------------------------------

export const PageLinks = [
  {
    order: '1',
    subheader: 'Home',
    cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_marketing.jpg',
    items: [
      // { title: 'Aout Us', path: '/travel/1IGS/A1stricker' }, 
      // { title: 'Career', path: '/travel/Premium/hourlyhiringx' }, 
      // { title: 'Intercity rides', path: '/travel/Premium/cityToCity' },  
      // { title: 'Armed exceutive portion', path: '/travel/Premium/RoyalFleetlicense/' },
      // { title: 'Royal chauffeurs', path: '/travel/Premium/RoyalChauffeurs/' },
      // { title: 'Airport transport', path: '/travel/Premium/airportTransfer/' },
      // { title: 'Exibitions & events', path: '/travel/Premium/Exibitions/' },
      // { title: 'Secured transport', path: '/travel/Premium/SecureTransports/' },
      // { title: 'Private/family chauffeurs', path: '/travel/Premium/FamilyChauffeurs/' },
      // { title: 'Sprint class', path: '/travel/Premium/SprintClass/' },
    ],
  },
  {
    order: '7',
    subheader: 'Our Services',
    cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_marketing.jpg',
    items: [
      { title: 'Fixed Telecoms', path: '/travel/forBusiness/overview' },
      { title: 'Mobile Telecoms', path: '/travel/forBusiness/corporation' },
      { title: 'Transport Infrastructure', path: '/travel/forBusiness/travelAgencies' },
      { title: 'Pylons', path: '/travel/forBusiness/eventServices' },
      { title: 'Multimedia Installations', path: '/travel/forBusiness/strategicPartnerships' },
    ],
  },
  {
    order: '8',
    subheader: 'About-Us',
    cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_marketing.jpg',
    items: [
      // { title: 'P1', path: '/travel/carRentals/MakeReservation' },
      // { title: 'P2', path: '/travel/carRentals/viewModifyCancel' },
      // { title: 'P3', path: '/travel/carRentals/getReciept' },
      // { title: 'P4', path: '/travel/carRentals/preCheck' },
      // { title: 'Popular rental cars', path: '/travel/carRentals/PopularRentalCars' },
    ],
  },
  // {
  //   order: '2',
  //   subheader: 'A1 TELECOM for Business',
  //   cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_career.jpg',
  //   items: [
  //     { title: 'Overview', path: Routes.career.landing },
  //     { title: 'Corporations', path: Routes.career.jobs },
  //     { title: 'Travel agencies', path: Routes.career.job(_jobs[0].id) },
  //     { title: 'Event services', path: Routes.career.posts },
  //     { title: 'Strategic partnerships', path: Routes.career.post('post-01') },
  //     // { title: 'About', path: Routes.career.about },
  //     // { title: 'Contact', path: Routes.career.contact },
  //   ],
  // },
  // {
  //   order: '4',
  //   subheader: 'Common',
  //   cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_career.jpg',
  //   items: [
  //     { title: 'Overview', path: Routes.loginIllustration },
  //     { title: 'Corporations', path: Routes.loginCover },
  //     { title: 'Travel agencies', path: Routes.registerIllustration },
  //     { title: 'Event services', path: Routes.registerCover },
  //     { title: 'Strategic partnerships', path: Routes.resetPassword },
  //     // { title: 'Verify Code', path: Routes.verifyCode },
  //     // { title: '404 Error', path: Routes.page404 },
  //     // { title: '500 Error', path: Routes.page500 },
  //     // { title: 'Maintenance', path: Routes.maintenance },
  //     // { title: 'ComingSoon', path: Routes.comingsoon },
  //     // { title: 'Pricing 01', path: Routes.pricing01 },
  //     // { title: 'Pricing 02', path: Routes.pricing02 },
  //     // { title: 'Checkout', path: Routes.checkout },
  //     // { title: 'Support', path: Routes.support },
  //   ],
  // },
  // {
  //   order: '5',
  //   subheader: 'Intercity rides',
  //   cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_course.jpg',
  //   items: [
  //     { title: 'East Hampton - NewY York', path: Routes.eLearning.landing },
  //     { title: 'New York - Washington', path: Routes.eLearning.courses },
  //     { title: 'New York - Phialdelphia', path: Routes.eLearning.course(_courses[0].id) },
  //     { title: 'Abu Dhabi - Dubai', path: Routes.eLearning.posts },
  //     { title: 'London - Birmingham', path: Routes.eLearning.post('post-01') },
  //     { title: 'London - Bristol', path: Routes.eLearning.about },
  //     // { title: 'Contact', path: Routes.eLearning.contact },
  //   ],
  // },
  // {
  //   order: '3',
  //   subheader: 'About Us',
  //   cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_travel.jpg',
  //   items: [
  //     { title: 'Houston', path: '/travel/Premium/cityToCity' },
  //     { title: 'Galveston', path: '/travel/Premium/cityToCity' },
  //     { title: 'Dallas', path: '/travel/Premium/cityToCity' },
  //     { title: 'Forth Worth', path: '/travel/Premium/cityToCity' },
  //     { title: 'Austin', path: '/travel/Premium/cityToCity' },
  //     { title: 'Blog Posts', path: Routes.travel.posts },
  //     { title: 'Blog Post', path: Routes.travel.post('post-01') },
  //     { title: 'About', path: Routes.travel.about },
  //     { title: 'Contact', path: Routes.travel.contact },
  //   ],
  // },
  // {
  //   order: '6',
  //   subheader: 'Coming Soon',
  //   items: [
  //     { title: 'Item1', path: '' },
  //     { title: 'Item2', path: '' },
  //   ],
  // },
];

export const navConfig = [
  // { title: 'Home', path: '/' },
  // { title: 'Components', path: Routes.componentsUI },
  // {
  //   title: 'Pages',
  //   path: Routes.pages,
  //   children: [PageLinks[0], PageLinks[4], PageLinks[1], PageLinks[3], PageLinks[2], PageLinks[5]],
  // },
  // { title: 'Documentation', path: Routes.docs },

  {
    title: 'Home',
    path: '/',
    // children: [PageLinks[0]],
  },
  {
    title: 'Our Sevices',
    path: '/travel/1IGS/A1stricker',
    // children: [PageLinks[1]],
  },
  {
    title: 'About-Us',
    path: '/travel/about-us',
    // children: [PageLinks[2]],
  },
  // { title: 'About Us', path: '/travel/forChauffeurs' },
  // // { title: 'About Us', path: '/' },
  // { title: 'Career', path: '/auth/login-cover' },
];
