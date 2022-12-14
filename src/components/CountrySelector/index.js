import { FormControl, FormHelperText, InputLabel, NativeSelect } from "@material-ui/core";
import React from "react";

function CountrySelector({ value, handleOnChange, countries }) {
  return (
    <FormControl>
      <InputLabel htmlFor="country-selector" shrink>
        Countries
      </InputLabel>
      <NativeSelect
        value={value}
        onChange={handleOnChange}
        inputProps={{
          name: "country",
          id: "country-selector",
        }}
      >
        {countries.map((country, id) => {
          return (
            <option key={id} value={country.ISO2.toLowerCase()}>
              {country.Country}
            </option>
          );
        })}
      </NativeSelect>
      <FormHelperText>Choose your country</FormHelperText>
    </FormControl>
  );
}

export default CountrySelector;
