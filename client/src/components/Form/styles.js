import { Paper, TextField, Button, Box } from '@mui/material';

function MyForm() {
  return (
    <Paper sx={{ p: 2 }}>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          '& .MuiTextField-root': { m: 1 },
          width: '97%',
          my: 1,
        }}
      >
        <TextField label="Name" variant="outlined" />
        <Button
          variant="contained"
          sx={{ mb: 1 }}
        >
          Submit
        </Button>
      </Box>
    </Paper>
  );
}

export default MyForm;
