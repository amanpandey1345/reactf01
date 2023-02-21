import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Review from '../Review';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Residentail Address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6} md={3}>
          <TextField
            required
            id="cardName"
            label="House No"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <TextField
            required
            id="cardNumber"
            label="Address Line "
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            required
            id="cvv"
            type={"number"}
            label="PinCode"
            helperText="when you Enter a Pincode "
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Post Office"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            required
            id="cvv"
            label="City"
            helperText="when you Enter a Pincode "
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            required
            id="cvv"
            label="State"

            fullWidth
            variant="standard"
          />
        </Grid>


      </Grid>
      <Typography variant="h6" gutterBottom className="mt-4">
        Permanent Address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6} md={3}>
          <TextField
            required
            id="cardName"
            label="House No"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <TextField
            required
            id="cardNumber"
            label="Address Line "
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            required
            id="cvv"
            type={"number"}
            label="PinCode"
            helperText="when you Enter a Pincode "
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Post Office"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            required
            id="cvv"
            label="City"
            helperText="when you Enter a Pincode "
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            required
            id="cvv"
            label="State"

            fullWidth
            variant="standard"
          />
        </Grid>


      </Grid>
    </React.Fragment>
  );
}