import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox<T>({ options }: { options: T[] }) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 300 }}
      style={{ background: "white" }}
      renderInput={(params) => <TextField {...params} />}
    />
  );
}
