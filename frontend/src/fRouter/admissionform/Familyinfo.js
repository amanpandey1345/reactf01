import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Familyinfo() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
       Family Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Father's Name"
            sx={{ minWidth: 320   }}
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Father's Profession"
            sx={{ minWidth: 320   }}
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Father's Office Address"
            sx={{ minWidth: 320   }}
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Mother's Name"
            sx={{ minWidth: 320   }}
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="address2"
            name="address2"
            label="Mother's Profession"
            sx={{ minWidth: 320   }}
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Mother's Office Address"
            sx={{ minWidth: 320   }}
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="Father's Mobile No."
            sx={{ minWidth: 320   }}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Mother's Mobile No."
            sx={{ minWidth: 320   }}
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Name of Siblings In School"
            sx={{ minWidth: 320   }}
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Family Id"
            sx={{ minWidth: 320   }}
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
       
       
        
      </Grid>
    </React.Fragment>
  );
}