import { Grid, fade, makeStyles, CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Axios from "../axios";
import Design from "../components/Design";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "30px",
    marginRight: "30px"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  },
  search: {
    position: "relative",
    border: "1px solid gray",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: 0,
    maxWidth: "350px",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    fontSize: "22px",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  }
}));

function DesignScreen() {
  const [designs, setDesigns] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  location = useLocation();

  const classes = useStyles();

  // useEffect(() => {
  //   const fetchDesign = async () => {
  //     setIsLoading(true);
  //     const result = await Axios.post("/designs/category", { category });
  //     setDesigns(result.data);
  //     setIsLoading(false);
  //   };
  //   fetchDesign();
  // }, [category]);

  useEffect(() => {
    console.log(location.category);
    // const fetchDesign = async () => {
    //   setIsLoading(true);
    //   const result = await Axios.post("/designs/category", { category });
    //   console.log(result.data);
    //   setDesigns(result.data);
    //   setIsLoading(false);
    // };
    // fetchDesign();
  }, []);

  return (
    <div className={classes.root}>
      <h1> Designsss</h1>
      
    </div>
  );
}

export default DesignScreen;
