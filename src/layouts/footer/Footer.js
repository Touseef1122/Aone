import PropTypes from 'prop-types';
import { useState } from 'react';
// icons
import chevronDown from '@iconify/icons-carbon/chevron-down';
import chevronRight from '@iconify/icons-carbon/chevron-right';
import Youtube from '@iconify/icons-carbon/logo-youtube';
import Facebook from '@iconify/icons-carbon/logo-facebook';
import Twitter from '@iconify/icons-carbon/logo-twitter';
import Insta from '@iconify/icons-carbon/logo-instagram';
import Linkedin from '@iconify/icons-carbon/logo-linkedin';
import { Icon } from '@iconify/react';

// @mui
import { styled } from '@mui/material/styles';
import Masonry from '@mui/lab/Masonry';
import {
  Box,
  Grid,
  Link,
  Stack,
  Button,
  Divider,
  Collapse,
  Container,
  Typography,
  FilledInput,
  InputAdornment,
} from '@mui/material';
// hooks
import { useResponsive } from '../../hooks';
// components
import { Logo, Iconify, SocialsButton, AppStoreButton } from '../../components';
//
import { PageLinks } from '../nav/NavConfig';

// ----------------------------------------------------------------------

const LinkStyle = styled((props) => <Link target="_blank" rel="noopener" {...props} />)(
  ({ theme }) => ({
    ...theme.typography.body3,
    marginTop: theme.spacing(1),
    color: '#000000',
    '&:hover': {
      color: 'white',
    },
  })
);

const boxSX = {
  color: '#000000',
  '&:hover': {
    color: 'white',
  },
};

// ----------------------------------------------------------------------

export default function Footer() {
  const isDesktop = useResponsive('up', 'md');

  const lists = PageLinks.filter((list) => list.subheader !== 'Coming Soon');

  const renderLists = isDesktop
    ? lists
    : lists.sort((listA, listB) => Number(listA.order) - Number(listB.order));

  return (
    <Box fluid sx={{ background: 'linear-gradient(to right, #4d4dff , #4d4dff)' }}>
      <Container>
        <Grid justifyContent={{ md: 'space-between' }}>
          <Container>
            <Grid item xs={12} md={12}>
              <Stack
                direction={{ xs: 'row', md: 'row' }}
                justifyContent="center"
                sx={{ textAlign: 'center', padding: '20px' }}
              >
                <Typography color="black" variant="h4">
                  A1 TELECOM
                </Typography>
              </Stack>

              <Divider color="Black" />

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent="space-between"
                sx={{ py: 2, textAlign: 'center', fontSize: '16px' }}
              >
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                  <div>
                    <Typography variant="body3" sx={{ color: 'black' }}>
                      © 2022 A1 TELECOM
                    </Typography>
                  </div>

                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={5}
                    justifyContent={{ sm: 'center' }}
                    color={'black'}
                  >
                    <Link variant="body3" sx={boxSX}>
                      Terms
                    </Link>
                    <Link variant="body3" sx={boxSX}>
                      Privacy Policy
                    </Link>
                    <Link variant="body3" sx={boxSX}>
                      Legal Notice
                    </Link>
                    <Link variant="body3" sx={boxSX}>
                      Accessibility
                    </Link>
                  </Stack>
                </Stack>

                <Stack direction="row" spacing={3} alignSelf={{ xs: 'center', md: 'flex-end' }}>
                  <Link
                    href="https://www.linkedin.com/groups/12775685"
                    target="_blank"
                    variant="body3"
                    sx={{ color: 'text.secondary' }}
                  >
                    <Iconify icon={Linkedin} sx={{ fontSize: '22px', color: '#000000' }} />
                  </Link>
                </Stack>
              </Stack>
            </Grid>
          </Container>
        </Grid>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

ListDesktop.propTypes = {
  list: PropTypes.shape({
    items: PropTypes.array,
    subheader: PropTypes.string,
  }),
};

function ListDesktop({ list }) {
  const { subheader, items } = list;

  return (
    <Stack alignItems="flex-start">
      <Typography variant="h6" color="black">
        {subheader}
      </Typography>
      {items?.map((link) => (
        <LinkStyle key={link.title} href={link.path} color="black">
          {link.title}
        </LinkStyle>
      ))}
    </Stack>
  );
}

// ----------------------------------------------------------------------

ListMobile.propTypes = {
  list: PropTypes.shape({
    items: PropTypes.array,
    subheader: PropTypes.string,
  }),
};

function ListMobile({ list }) {
  const { subheader, items } = list;

  const [expand, setExpand] = useState(false);

  const onExpand = () => {
    setExpand(!expand);
  };

  return (
    <Stack spacing={1.5} alignItems="flex-start">
      <Typography variant="h6" color="black" marginTop="20px">
        {subheader}
      </Typography>
      <Box
        sx={{
          display: 'grid',

          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(1, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
        md={{
          display: 'grid',

          gridTemplateColumns: {
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {items?.map((link) => (
          <LinkStyle key={link.title} href={link.path} color="orange">
            {link.title}
          </LinkStyle>
        ))}
      </Box>
    </Stack>
  );
}
