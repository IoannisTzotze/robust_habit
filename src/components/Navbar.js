import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '170px', height: 'auto' }} />
    </Link>
    <Stack direction="row" gap="40px" fontFamily="Alegreya" fontSize="24px" alignItems="flex-end">
      <Link to="/" style={{ textDecoration: 'none', color: '#122f3a', borderBottom: '3px solid #5CE1E6' }}>Home</Link>
    </Stack>
  </Stack>
);

export default Navbar;
