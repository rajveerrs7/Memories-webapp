// styles.js
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const MainContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

export const SmMargin = styled('div')(({ theme }) => ({
  margin: theme.spacing(1),
}));

export const ActionDiv = styled('div')({
  textAlign: 'center',
});
