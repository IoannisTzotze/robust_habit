import React from 'react';
import { Stack, Typography } from '@mui/material';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '4px solid #5CE1E6', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '150px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '150px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#122f3a" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;
