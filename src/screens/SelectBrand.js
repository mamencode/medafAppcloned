import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  makeStyles,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Typography
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 350
  }
}));
const models = [
  {
    brand: "Samsung",
    displayName: "Samsung / ሳምሰንግ"
  },
  {
    brand: "Iphone",
    displayName: "Apple / አፕል"
  },
  {
    brand: "Huawei",
    displayName: "Huawei / ሁዋዌ"
  },
  {
    brand: "Tecno",
    displayName: "Tecno / ቴክኖ"
  },
  {
    brand: "Nokia",
    displayName: "Nokia/ ኖኪያ"
  },
  {
    brand: "Sony",
    displayName: "Sony / ሶኒ"
  },
  {
    brand: "HTC",
    displayName: "HTC / ኤችቲሲ"
  },
  {
    brand: "LG",
    displayName: "LG / ሌጂ"
  },
  {
    brand: "Lenovo",
    displayName: "Lenovo /ሌኖቮ"
  },
  {
    brand: "Oppo",
    displayName: "Oppo / ኦፖ"
  },
  {
    brand: "Honor",
    displayName: "Honor /ሆነር"
  },
  {
    brand: "Xiaomi",
    displayName: "Xiaomi / ዢያዎሚ"
  },
  {
    brand: "Vivo",
    displayName: "Vivo / ቫዮ"
  }
];
function SelectBrand() {
  const classes = useStyles();
  const history = useHistory();
  const [name, setName] = useState("");

  function handleChange(value) {
    history.push(`/brand/${value}`);
  }

  return (
    <div style={{ textAlign: "left" }}>
      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel htmlFor="Select-brand">
          {" "}
          Select Model / ስልኮን ይምረጡ
        </InputLabel>
        <Select
          native
          value={name}
          onChange={(event) => handleChange(event.target.value)}
        >
          <option aria-label="None" value="" />
          <option value="Samsung" aria-label="Samsung / ሳምሰንግ">
            Samsung / ሳምሰንግ
          </option>
          <option value="Iphone" aria-label="Apple / አፕል">
            Apple / አፕል
          </option>
          <option value="Huawei" aria-label="Huawei / ሁዋዌ">
            Huawei / ሁዋዌ
          </option>
          <option value="Tecno" aria-label="Tecno / ቴክኖ">
            Tecno / ቴክኖ
          </option>
          <option value="Nokia" aria-label="Nokia/ ኖኪያ">
            Nokia/ ኖኪያ
          </option>
          <option value="Sony" aria-label="Sony / ሶኒ">
            Sony / ሶኒ
          </option>
          <option value="HTC" aria-label="HTC / ኤችቲሲ">
            HTC / ኤችቲሲ
          </option>
          <option value="LG" aria-label="LG / ሌጂ">
            LG / ሌጂ
          </option>
          <option value="Lenovo" aria-label="Lenovo /ሌኖቮ">
            Lenovo /ሌኖቮ
          </option>
          <option value="Oppo" aria-label="Oppo / ኦፖ">
            Oppo / ኦፖ
          </option>
          <option value="Honor" aria-label="Honor /ሆነር">
            Honor /ሆነር
          </option>
          <option value="Xiaomi" aria-label="Xiaomi / ዢያዎሚ">
            Xiaomi / ዢያዎሚ
          </option>
          <option value="Vivo" aria-label="Vivo / ቫዮ">
            Vivo / ቫዮ
          </option>
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectBrand;
