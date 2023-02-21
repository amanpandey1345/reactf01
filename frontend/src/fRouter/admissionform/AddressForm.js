import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export default function AddressForm() {
  const [gander, setGander] = React.useState('');
  const [cast, setCast] = React.useState('');
  const [nationality, setNationality] = React.useState('');
  const [religion, setReligion] = React.useState('');
  
  const [value, setValue] = React.useState(null);
  const [value1, setValue1] = React.useState(null);
  const [value2, setValue2] = React.useState(dayjs());
  // const handleChange = (event) => {
  //   setAge(event.target.value);
  //   setCast(event.target.value);
  // };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom> 
       Student Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Student Name"
            sx={{ minWidth: 320   }}
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl variant="standard" sx={{ minWidth: 320   }}>
        <InputLabel id="demo-simple-select-filled-label" >Gander</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={gander}
          onChange={(e)=>setGander(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Male</MenuItem>
          <MenuItem value={20}>Female</MenuItem>
          <MenuItem value={30}>Other</MenuItem>
        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={6}>
        <FormControl variant="standard" sx={{ minWidth: 320   }}>
        <InputLabel id="demo-simple-select-filled-label" >Cast</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={cast}
          onChange={(e)=>setCast(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Gen</MenuItem>
          <MenuItem value={20}>OBC</MenuItem>
          <MenuItem value={30}>ST</MenuItem>
          <MenuItem value={30}>SC</MenuItem>
        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Cast Certificate No."
            sx={{ minWidth: 320   }}
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6}>
        <FormControl variant="standard" sx={{ minWidth: 320   }}>
        <InputLabel id="demo-simple-select-filled-label" >Religion
</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={religion}
          onChange={(e)=>setReligion(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Hindu</MenuItem>
          <MenuItem value={20}>Muslim</MenuItem>
          <MenuItem value={30}>Jain</MenuItem>
          <MenuItem value={30}>Buddhist</MenuItem>
          <MenuItem value={30}>Sikh</MenuItem>
          <MenuItem value={30}>Christian</MenuItem>
          <MenuItem value={30}>Other</MenuItem>
        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl variant="standard" sx={{ minWidth: 320   }}>
        <InputLabel id="demo-simple-select-filled-label" >Nationality</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={nationality}
          onChange={(e)=>setNationality(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Indian</MenuItem>
          <MenuItem value={20}>Nepali</MenuItem>
          <MenuItem value={30}>Other</MenuItem>

        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Date of Birth"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} sx={{ minWidth: 320   }} variant="standard" />}
      />
    </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="DOB on 1 July"
        value={value1}
        onChange={(newValue) => {
          setValue1(newValue);
        }}
        renderInput={(params) => <TextField {...params} sx={{ minWidth: 320   }} variant="standard" />}
      />
    </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Scholar No"
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
            label="SSSMID"
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
            label="Adhaar No"
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
            label="TC No"
            sx={{ minWidth: 320   }}
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl variant="standard" sx={{ minWidth: 320   }}>
        <InputLabel id="demo-simple-select-filled-label" >Civil/Police</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={cast}
          onChange={(e)=>setCast(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Civilian</MenuItem>
          <MenuItem value={20}>Police</MenuItem>

        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Parent Name"
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
            label="Parent Mobile No"
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
            label="Parent Whatsapp No"
            sx={{ minWidth: 320   }}
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl variant="standard" sx={{ minWidth: 320   }}>
        <InputLabel id="demo-simple-select-filled-label" >Student Blood Group</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={cast}
          onChange={(e)=>setCast(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>A+</MenuItem>
          <MenuItem value={20}>A-</MenuItem>
          <MenuItem value={30}>B+</MenuItem>
          <MenuItem value={30}>B-</MenuItem>
          <MenuItem value={10}>AB+</MenuItem>
          <MenuItem value={20}>AB-</MenuItem>
          <MenuItem value={30}>O+</MenuItem>
          <MenuItem value={30}>O-</MenuItem>
        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Income Certificate No."
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
            label="Ration Card No"
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
            label="Last School Name"
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
            label="Bus Service"
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
            label="Last Class"
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
            label="Admission Class"
            sx={{ minWidth: 320   }}
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              views={["year"]}
              label="Admission Year"
              value={value2}
              onChange={(newValue) => {
                setValue2(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} helperText={null} variant="standard" sx={{ minWidth: 320   }} />
              )}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Bus Service is Required or not."
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}