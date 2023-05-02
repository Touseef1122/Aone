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
    lng: -1.22121
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
    <Box sx={{ height: 500, overflow: 'hidden', ...sx }} {...other}>
  <GoogleMapReact
    bootstrapURLKeys={{ key: GOOGLE_API }}
    defaultCenter={centerMap}
    zoom={14}
    options={{
      styles: MapStyle,
      disableDefaultUI: true,
    }}
  >
    {offices.map((office, index) => (
      <Marker
        key={index}
        lat={office.latlng[0]}
        lng={office.latlng[1]}
      />
    ))}

    <Marker
      lat={54.5672778}
      lng={-1.2368489}
      options={{ color: 'red' }}
    />
  </GoogleMapReact>
</Box>
  );
}
