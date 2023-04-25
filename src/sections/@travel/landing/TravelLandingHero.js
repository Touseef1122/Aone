import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { useRef, useEffect, useState } from 'react';
import * as React from 'react';
// icons
import starIcon from '@iconify/icons-carbon/star';
import timeIcon from '@iconify/icons-carbon/time';
import currencyIcon from '@iconify/icons-carbon/currency';
import locationIcon from '@iconify/icons-carbon/location';
// @mui
import { alpha, useTheme } from '@mui/material/styles';

import { Stack, Typography, Button, Avatar, Box, Tabs, Tab, Container } from '@mui/material';
// utils
import cssStyles from '../../../utils/cssStyles';
// @utils
import landing from '../../../assets/images/landingImg.jpg';
import { fCurrency } from '../../../utils/formatNumber';
import CheckoutForm from '../../../../pages/travel/checkout1/index';
import CheckoutForm2 from '../../../../pages/travel/checkout2/index';
// components
import {
  Image,
  Iconify,
  BgOverlay,
  TextMaxLine,
  CarouselDots,
  TextIconLabel,
} from '../../../components';

// ----------------------------------------------------------------------




export default function TravelLandingHero({ tours }) {
  const theme = useTheme();
  const [selected, setSelected] = useState(1);
  const [carouselContent, setCarouselContent] = useState();
  const [carouselThumbnail, setCarouselThumbnail] = useState();
  const carouselRef1 = useRef(null);
  const carouselRef2 = useRef(null);

  useEffect(() => {
    setCarouselContent(carouselRef1.current || undefined);
    setCarouselThumbnail(carouselRef2.current || undefined);
  }, [selected]);

  const carouselContentSettings = {
    initialSlide: selected,
    dots: true,
    speed: 1440,
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current, next) => setSelected(next),
    ...CarouselDots({
      sx: {
        display: { md: 'none' },
        left: 0,
        right: 0,
        zIndex: 9,
        bottom: 64,
        position: 'absolute',
      },
    }),
  };

  const carouselThumbnailSettings = {
    centerMode: true,
    centerPadding: '0px',
    arrows: false,
    vertical: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: true,
    swipeToSlide: true,
    focusOnSelect: true,
    rtl: Boolean(theme.direction === 'rtl'),
    beforeChange: (current, next) => setSelected(next),
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <ContentItem />
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------


function ContentItem({ tour }) {
  const theme = useTheme();
  // const { slug, location, heroImg, ratings, price, duration } = tour;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        textAlign: 'center',
        position: 'relative',
        color: 'common.white',
        justifyContent: 'flex-end',
      }}
    >
     
      <Box
        sx={{
          width: 1,
          height: 1,
          position: {
            xs: 'absolute',
            md: 'relative',
          },
        }}
      >
     
        <Image
          alt="hero"
          src={landing.src}
          sx={{
            mt:{md:15},
            height: { xs: 1 , md: 500 },
            bgcolor: 'transparent',
          }}
        />
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------
