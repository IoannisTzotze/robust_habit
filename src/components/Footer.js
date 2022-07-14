import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#e3fcfc">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: 'auto' }} />
    </Stack>
    {/* eslint-disable-next-line */}
    <Typography variant="h5" sx={ { fontSize: { lg: '18px', xs: '15px' } } } mt="41px" textAlign="center" pb="40px">Made by <a href='http://johntzotze.com/' style={ {textDecoration: 'none', color: '#5CE1E6'} }> John Tzotze</a> </Typography>
  </Box>
);

export default Footer;
