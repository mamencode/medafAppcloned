import { makeStyles, CircularProgress, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsDesign, updateDesign } from "../actions/designActions";
import { DESIGN_UPDATE_RESET } from "../constants/designConstants";
import { useHistory, useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  loginContainer: {
    width: "300px",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    borderRadius: "5px",
    border: "1px solid lightgray",
    padding: "20px"
  },
  inputContainer: {
    height: "30px",
    marginBottom: "10px",
    backgroundColor: "white",
    width: "98%"
  },
  login: {
    backgroundColor: "white",
    height: "100%",
    marginTop: "60px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  signInButton: {
    fontWeight: "bold",
    background: "#f0c14b",
    borderRadius: "2px",
    cursor: "pointer",
    width: "100%",
    height: "30px",
    border: "1px solid",
    marginTop: "10px",
    borderColor: " #a88734 #9c7e31 #846a29"
  }
}));

function DesignEditScreens(props) {
  const classes = useStyles();
  const { id } = useParams();
  const history = useHistory();
  const [designName, setDesignName] = useState("");
  const [category, setCategory] = useState("");
  const [artWork, setArtWork] = useState("");
  const [mockTemplate, setMockTemplate] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const designDetails = useSelector((state) => state.designDetails);
  const { loading, error, design } = designDetails;
  const designUpdate = useSelector((state) => state.designUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate
  } = designUpdate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (successUpdate) {
      history.push("/designlist");
    }
    if (!design || design._id !== id || successUpdate) {
      dispatch({ type: DESIGN_UPDATE_RESET });
      dispatch(detailsDesign(id));
    } else {
      setDesignName(design.designName);
      setCategory(design.category);
      setArtWork(design.artWork);
      setMockTemplate(design.mockTemplate);
      setReleaseDate(design.releaseDate);
    }
  }, [design, dispatch, id, successUpdate, history]);
  return (
    <div className={classes.login}>
      <div className={classes.loginContainer}>
        <h1> Design Edit Screen</h1>
        <form></form>
      </div>
    </div>
  );
}

export default DesignEditScreens;
