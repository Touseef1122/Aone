import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { Link, Stack, AppBar, Divider, Container } from '@mui/material';
// config
import { HEADER_DESKTOP_HEIGHT } from '../../config';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
// routes
import Routes from '../../routes';
// components
import { Logo } from '../../components';
//
import LanguagePopover from '../LanguagePopover';
import { ToolbarStyle, ToolbarShadowStyle } from './HeaderToolbarStyle';

// ----------------------------------------------------------------------

HeaderSimple.propTypes = {
  transparent: PropTypes.bool,
};

export default function HeaderSimple({ transparent }) {
  const isScrolling = useOffSetTop(HEADER_DESKTOP_HEIGHT);

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle disableGutters transparent={transparent} scrolling={isScrolling} sx={{ px: 2 }}>
        <Container
          maxWidth={false}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Logo onDark={transparent && !isScrolling} />

          <Stack
            direction="row"
            alignItems="center"
            divider={<Divider orientation="vertical" sx={{ height: 24 }} />}
            spacing={2.5}
          >
            {/* <LanguagePopover
              sx={{
                ...(isScrolling && { color: 'text.primary' }),
              }}
            /> */}

            {/* <NextLink href={Routes.support} passHref>
              <Link
                color="inherit"
                variant="body2"
                sx={{
                  fontWeight: 'fontWeightMedium',
                  ...(isScrolling && { color: 'text.primary' }),
                }}
              >
                Contact us
              </Link>
            </NextLink> */}
          </Stack>
        </Container>
      </ToolbarStyle>

      {isScrolling && <ToolbarShadowStyle />}
    </AppBar>
  );
}
