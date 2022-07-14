import React from 'react';
import { Typography, Stack } from '@mui/material';

const Detail = ({ exerciseDetail }) => {
  const { gifUrl, name } = exerciseDetail;

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
          {name}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Detail;
