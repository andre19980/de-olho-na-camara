import { useCallback, useState } from 'react';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox({ options, onChange, placeholder, defaultValue }:
  {
    options: string[],
    onChange?: (value: string | null) => void,
    placeholder?: string,
    defaultValue?: string,
  }) {
  const [value, setValue] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');

  const handleChange = useCallback((event: React.SyntheticEvent<Element, Event>, value: string | null) => {
    setInputValue(inputValue);
    if (onChange) {
      onChange(value);
    }
  }, [onChange]);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      value={value}
      inputValue={inputValue}
      options={options}
      sx={{ width: 300 }}
      style={{ background: "white" }}
      defaultValue={defaultValue}
      onInputChange={handleChange}
      onChange={(event, newValue) => {
        handleChange(event, newValue);
        setValue(newValue);
      }}
      renderInput={(params) => <TextField {...params} label={placeholder} />}
    />
  );
}
