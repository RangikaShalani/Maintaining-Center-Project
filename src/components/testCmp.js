import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const RoundedDot = styled('div')(({ theme, color }) => ({
  width: '4px',
  height: '4px',
  borderRadius: '50%',
  backgroundColor: theme.palette[color]?.main || color,
}));

const professionals = [
  {
    name: 'Shawn Scott',
    role: 'Mechanic',
  },
];

const MyComponent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        position: 'relative',
        padding: '32px',
        maxWidth: '533px',
        minHeight: '519px',
      }}
    >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a582d76da5cac04a37d247752fc71e7d0e33a72879956dbbfb227a94146d832b?apiKey=d3e812784a0542178f03de5a02db56b2&"
        alt="Background image"
        style={{ objectFit: 'cover', position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      />
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '20px',
          color: 'text.primary',
        }}
      >
        <Typography variant="h4" component="h2" fontWeight="medium" textTransform="uppercase" mt={0}>
          Meet our professionals
        </Typography>
        <Typography variant="body1" mt={3} fontSize="14px">
          Your Reliable Roadside Experts!
        </Typography>
        {professionals.map((professional) => (
          <React.Fragment key={professional.name}>
            <Box
              sx={{
                alignSelf: 'flex-end',
                padding: '12px 16px',
                marginTop: '72px',
                backgroundColor: 'neutral.100',
                borderRadius: '50px',
                textTransform: 'uppercase',
              }}
            >
              {professional.name}
            </Box>
            <Box
              sx={{
                alignSelf: 'flex-end',
                padding: '8px 14px',
                marginTop: '8px',
                backgroundColor: 'neutral.100',
                borderRadius: '50px',
                fontSize: '14px',
              }}
            >
              {professional.role}
            </Box>
          </React.Fragment>
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          gap: '5px',
          justifyContent: 'space-between',
          marginLeft: '20px',
          maxWidth: '100%',
        }}
      >
        <RoundedDot color="white" />
        <Box sx={{ display: 'flex', gap: '3px' }}>
          <RoundedDot color="orange.600" />
          <RoundedDot color="white" />
          <RoundedDot color="white" />
        </Box>
      </Box>
    </Box>
  );
};

export default MyComponent;
