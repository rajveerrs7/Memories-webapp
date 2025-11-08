// styles.js
import { styled } from '@mui/material/styles';
import { Card, CardMedia, CardActions, Typography, Grid } from '@mui/material';

// Image/media section
export const Media = styled(CardMedia)(() => ({
  height: 0,
  paddingTop: '56.25%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backgroundBlendMode: 'darken',
}));

// Optional border helper
export const Border = styled('div')({
  border: 'solid',
});

// Main card container
export const FullHeightCard = styled(Card)({
  height: '100%',
});

export const CustomCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '15px',
  height: '100%',
  position: 'relative',
});

// Overlays
export const Overlay = styled('div')({
  position: 'absolute',
  top: '20px',
  left: '20px',
  color: 'white',
});

export const Overlay2 = styled('div')({
  position: 'absolute',
  top: '20px',
  right: '20px',
  color: 'white',
});

// Layout sections
export const GridStyled = styled(Grid)({
  display: 'flex',
});

export const Details = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '20px',
});

export const Title = styled(Typography)({
  padding: '0 16px',
});

export const CardActionsStyled = styled(CardActions)({
  padding: '0 16px 8px 16px',
  display: 'flex',
  justifyContent: 'space-between',
});
