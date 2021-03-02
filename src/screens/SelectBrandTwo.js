import React, { useEffect, useState } from "react";
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
import Axios from "../axios";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 350
  }
}));

function SelectBrandTwo() {
  const [name, setName] = useState();
  const [brands, setBrands] = useState([]);
  const history = useHistory();

  function handleChange(value) {
    history.push(`/brand/${value}`);
  }
  useEffect(() => {
    const fetchBrands = async () => {
      const result = await Axios.get("/products/listbrand");
      setBrands(result.data);
      console.log(result.data);
    };
    fetchBrands();
  }, []);

  const classes = useStyles();
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
          <option aria-label="None" value="">
          Select Model / ስልኮን ይምረጡ
          </option>

          {brands.map((item) => (
            <option aria-label={item.displayName} value={item.brand}>
              {item.displayName}{" "}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectBrandTwo;
