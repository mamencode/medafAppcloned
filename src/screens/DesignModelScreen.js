import React, { useState, useEffect, useCallback } from "react";

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
  CircularProgress,
  Typography
} from "@material-ui/core";

import { useHistory, useParams, withRouter } from "react-router-dom";
import Axios from "../axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary
    // marginTop: "60px"
  },
  loginContainer: {
    width: "100%",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    borderRadius: "5px",
    // border: "1px solid lightgray",
    padding: "20px"
  },
  signInButton: {
    background: "#f0c14b",
    borderRadius: "2px",
    width: "100%",
    height: "30px",
    border: "1px solid",
    marginTop: "10px",
    cursor: "pointer",
    borderColor: " #a88734 #9c7e31 #846a29"
  },
  formControl: {
    width: "100%",
    borderRadius: "10px"
    // margin: theme.spacing(1),
    // minWidth: 120
  }
}));

function DesignModelScreen() {
  const { id } = useParams();
  const [design, setDesign] = useState({});
  const [loading, setLoading] = useState(false);
  const [brand, setBrand] = useState("");
  const [artImg, setArtImg] = useState(undefined);
  const history = useHistory();

  const classes = useStyles();

  const handleChange = (event) => {
    setBrand(event.target.value);
  };
  useEffect(() => {
    setLoading(true);
    Axios.get(`/designs/${id}`).then((response) => {
      setDesign(response.data);
      setArtImg(design.artWork);
      setLoading(false);

      console.log(response.data);
    });
    console.log(artImg);
    console.log(artImg);
  }, [id]);

  const goToHandler = () => {
    console.log(design.artWork);
    window.localStorage.setItem("artImg", design.artWork);
    const getItem = window.localStorage.getItem("artImg");
    console.log("done", getItem);

    history.push(`/brand/design/${brand}`);
  };
  return (
    <Grid
      direction="row"
      spacing={2}
      container
      justify="center"
      alignItems="center"
    >
      {loading ? (
        <div>
          {" "}
          <center>
            {" "}
            <CircularProgress />{" "}
          </center>{" "}
        </div>
      ) : (
        <>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Carousel
                autoPlay
                dynamicHeight
                // centerMode
                // width="500px"
                // showArrows={true}
                showThumbs={false}
                infiniteLoop={true}
              >
                <div>
                  <img
                    style={{ objectFit: "contain", height: "30vh" }}
                    src={design.mockTemplate}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ objectFit: "contain", height: "30vh" }}
                    src={design.artWork}
                    alt="designArtwork"
                  />
                </div>

                <div>
                  <img
                    style={{ objectFit: "contain", height: "30vh" }}
                    src={design.mockTemplate}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ objectFit: "contain", height: "30vh" }}
                    src={design.artWork}
                    alt="designArtwork"
                  />
                </div>
              </Carousel>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <center>
                <div className={classes.loginContainer}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel htmlFor="outlined-age-native-simple">
                      {" "}
                      Select Model / ስልኮን ይምረጡ
                    </InputLabel>
                    <Select
                      native
                      value={brand}
                      onChange={handleChange}
                      name="brand"
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
                  <button
                    // onClick={submitHandler}
                    onClick={goToHandler}
                    className={classes.signInButton}
                  >
                    Continue
                  </button>
                </div>
              </center>
            </Paper>
          </Grid>
        </>
      )}
    </Grid>
  );
}

export default DesignModelScreen;
