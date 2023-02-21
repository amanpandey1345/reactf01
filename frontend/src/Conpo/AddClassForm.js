import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";

const AddClassForm = () => {
  return (
    <>
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Class Information
        </Typography>
        <Grid container spacing={3} marginBottom={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="class"
              name="class"
              label="Class"
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Teacher name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Medium"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="address2"
              name="address2"
              label="Subject"
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="Regular or private"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="Section"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
            />
          </Grid>
        </Grid>
        
        <Typography variant="h6" gutterBottom>
          Fees for civilians
        </Typography>
        <Grid container spacing={3} marginBottom={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="class"
              name="class"
              label="Annual Fee"
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Monthly Tution Fee"
              fullWidth
              autoComplete="family-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Exam Fee"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="address2"
              name="address2"
              label="Admission Form Fee"
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="Admission Fee"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
            />
          </Grid>
        </Grid>
        <Typography variant="h6" gutterBottom>
          Fees for Police child
        </Typography>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
            <TextField
              required
              id="class"
              name="class"
              label="Annual Fee"
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Monthly Tution Fee"
              fullWidth
              autoComplete="family-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Exam Fee"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="address2"
              name="address2"
              label="Admission Form Fee"
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="Admission Fee"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
            />
          </Grid>
        </Grid>
          <Button variant="outlined" className={"m-4 "}>
            Create
          </Button>
      </React.Fragment>
    </>
  );
};

export default AddClassForm;

// const AddClassFormAction = () => {
//   return (
//     <>
//     </>
//   )
// }

// export default { AddClassFormAction, AddClassForm}
