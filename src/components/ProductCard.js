import { makeStyles, Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    "&: hover": {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)"
    }
  },
  container: {
    padding: "2px 16px"
  },
  pImage: {
    objectFit: "contain",
    background: "#fff",
    clear: "both",
    margin: "0 auto",
    paddingTop: "7px",
    paddingBottom: "7px",
    width: "100px"
  }
}));

function ProductCard({ id, modelName, image }) {
  const classes = useStyles();
  return (
    <Grid item xs={6} sm={4} md={2}>
      <div className={classes.card}>
        <center>
          <Link
            style={{ hover: "#E67A00" }}
            to={`/upload/${id}`}
            className={classes.p}
          >
            <img className={classes.pImage} src={image} alt="Avatar" />
          </Link>
          <div className={classes.container}>
            <Link
              style={{ hover: "#E67A00" }}
              to={`/upload/${id}`}
              className={classes.p}
            >
              <h4>
                <b>{modelName}</b>
              </h4>
            </Link>
          </div>
        </center>
      </div>
    </Grid>
  );
}

export default ProductCard;
