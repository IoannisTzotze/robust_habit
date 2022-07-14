import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#5CE1E6" fontWeight="600" fontSize="26px">Excersises Wiki</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Commit <br />
      To be Fit!
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      An extensive range of excersises to help you get fit.
    </Typography>
    <Typography fontWeight={600} color="#5CE1E6" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Fitness
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
