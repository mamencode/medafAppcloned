import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import SecurityIcon from "@material-ui/icons/Security";
import SelectBrandTwo from "./SelectBrandTwo";
import AsyncTicker from "../components/home/AsyncTicker";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "30px",
    marginRight: "30px"
  },
  red: {
    width: "400px",
    padding: "5px",
    objectFit: "contain"
  },
  prmanent: {
    display: "flex",
    paddingTop: "20px"
  },
  wed: {
    width: "100%",
    objectFit: "contain",
    maxHeight: "500px"
  },
  brandL: {
    backgroundColor: "rgb(240, 242, 245)"
  },
  logos: {
    maxWidth: "100%",
    objectFit: "contain"
  }
}));

function HomeScreenGrid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        direction="row"
        spacing={2}
        container
        justify="flex-start"
        alignItems="center"
      >
        <Grid item xs={12}>
          <AsyncTicker />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" style={{ textAlign: "left" }} gutterBottom>
            Medaf <u>CUSTOMIZED</u> Phone Cases
          </Typography>

          <Typography variant="h6" style={{ textAlign: "left" }} gutterBottom>
            MEDAF take it a step further by allowing you to create a custom
            phone case with a picture!!
          </Typography>
          <div style={{ maxWidth: "400px" }}>
            <img
              style={{ textAlign: "left", objectFit: "contain", width: "100%" }}
              // className={classes.red}
              src="https://i.imgur.com/0FVJvZ7.png"
              alt="get your model"
            />
          </div>
          {/* <SelectBrand /> */}
          <SelectBrandTwo />

          <div className={classes.prmanent}>
            <SecurityIcon />
            <Typography
              style={{ paddingLeft: "5px" }}
              variant="subtitle1"
              gutterBottom
            >
              Permanent Printing!!
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <center>
            <img
              className={classes.wed}
              src="https://i.imgur.com/Hb3Tz53.png"
              alt="weding"
            />
          </center>
        </Grid>
        <Grid className={classes.brandL} item xs>
          <img
            className={classes.logos}
            src="https://i.imgur.com/AbPMkqz.png"
            alt="brand logo"
          />
        </Grid>
      </Grid>
      <Grid
        direction="row"
        spacing={2}
        container
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={6}>
          <center>
            <img
              style={{ height: "500px" }}
              src="https://i.imgur.com/ANVIY1y.jpg"
              alt="designs"
            />
          </center>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography style={{ textAlign: "left" }} variant="h5" gutterBottom>
            ወይም ዲዛይነሮቻችን ከሰሩት መካከል ይምረጡ
          </Typography>
          <Typography
            style={{ textAlign: "left" }}
            variant="body1"
            gutterBottom
          >
            Ideal for those who want to take the first steps in the web hosting
            industry, existing providers who want to consolidate their existing
            clients under one account or web designers who want to offer their
            clients an all-inclusive
          </Typography>
          <Link to="/designs">
            <center>
              <img
                style={{ objectFit: "contain", width: "100%" }}
                src="https://i.imgur.com/uN0Z2SD.jpg"
                alt="designtye"
              />
            </center>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomeScreenGrid;
