import _mock from './_mock';

// ----------------------------------------------------------------------

const LAT_LONG = [
  [54.54879, -1.24059 ],
  [54.54879, -1.24059 ],
  [54.54879, -1.24059 ],
];

export const _offices = ['Middlesbrough'].map((office, index) => ({
  id: _mock.id(index),
  country: office,
  address: _mock.address.fullAddress(index),
  phoneNumber: _mock.phoneNumber(index),
  email: _mock.email(index),
  photo: _mock.image.travel(index + 4),
  latlng: LAT_LONG[index],
}));
