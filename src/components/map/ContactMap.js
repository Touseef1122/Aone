import PropTypes from 'prop-types';
import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
// @mui
import { Box } from '@mui/material';
// config
import { GOOGLE_API } from '../../config';
//
import Popup from './Popup';
import Marker from './Marker';
import MapStyle from './MapStyle';

// ----------------------------------------------------------------------

ContactMap.propTypes = {
  offices: PropTypes.array.isRequired,
  sx: PropTypes.object,
};

export default function ContactMap({ offices, sx, ...other }) {
  const [tooltip, setTooltip] = useState(null);
  const [focusedMarker, setFocusedMarker] = useState(null);

  const centerMap = {
    lat: 54.56857,
    lng: -1.22121,
  };

  const handleOpen = (lat, lng, office) => {
    setCenterMap({
      ...centerMap,
      lat: lat - 32,
      lng,
    });
    setTooltip(office);
  };

  return (
    <Box sx={{ width: '100%' }} {...other}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2314.133884512549!2d-1.2431605240115016!3d54.548765284081746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487eece625e1b5b9%3A0x2f95b2f537574be9!2s11%20Glaisdale%20Ave%2C%20Middlesbrough%20TS5%207PG%2C%20UK!5e0!3m2!1sen!2s!4v1685906813922!5m2!1sen!2s"
        width="100%"
        height="400"
      ></iframe>
    </Box>
  );
}
