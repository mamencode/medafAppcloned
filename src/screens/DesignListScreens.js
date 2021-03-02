import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useHistory } from "react-router-dom";
import {
  createDesign,
  deleteDesign,
  listDesigns
} from "../actions/designActions";
import {
  DESIGN_CREATE_RESET,
  DESIGN_DELETE_RESET
} from "../constants/designConstants";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary
    // marginTop: "60px"
  },
  placeorderB: {
    padding: "1rem",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    fontWeight: "bold",
    background: "#f0c14b",
    cursor: "pointer",
    width: "100%",
    border: "0.1rem #808080 solid"
  }
}));
function DesignListScreens() {
  const classes = useStyles();
  const history = useHistory();
  const designList = useSelector((state) => state.designList);
  const { loading, error, designs } = designList;
  const designCreate = useSelector((state) => state.designCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    design: createdDesign
  } = designCreate;
  const designDelete = useSelector((state) => state.designDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete
  } = designDelete;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();

  useEffect(() => {
    if (successCreate) {
      dispatch({ type: DESIGN_CREATE_RESET });
      history.push(`/design/${createdDesign._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: DESIGN_DELETE_RESET });
    }
    dispatch(listDesigns());
  }, [
    createdDesign,
    dispatch,
    history,
    successCreate,
    successDelete,
    userInfo._id
  ]);

  const createHandler = () => {
    dispatch(createDesign());
  };

  const deleteHandler = (design) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteDesign(design._id));
    }
  };
  return (
    <Grid
      style={{ width: "100%" }}
      direction="row"
      spacing={1}
      container
      justify="center"
      alignItems="center"
    >
      <Paper className={classes.paper}>
        <Typography variant="h6" gutterBottom>
          Designs
        </Typography>
        <button
          type="button"
          className={classes.placeorderB}
          onClick={createHandler}
        >
          Create Design
        </button>
      </Paper>
      {loadingDelete && (
        <div>
          <center>
            {" "}
            <CircularProgress />{" "}
          </center>{" "}
        </div>
      )}
      {errorDelete && <div>{errorDelete} </div>}

      {loadingCreate && (
        <div>
          <center>
            {" "}
            <CircularProgress />
          </center>
        </div>
      )}
      {errorCreate && <div>{errorCreate} </div>}

      {loading ? (
        <div>
          <center>
            <CircularProgress />{" "}
          </center>{" "}
        </div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          <Paper className={classes.paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>NAME</TableCell>
                  <TableCell>CATEGORY</TableCell>
                  <TableCell>ACTIONS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {designs.map((design) => (
                  <TableRow key={design._id}>
                    <TableCell>{design._id}</TableCell>
                    <TableCell>{design.designName} </TableCell>
                    <TableCell>{design.category} </TableCell>
                    <TableCell>
                      <button
                        onClick={() =>
                          history.push(`/design/${design._id}/edit`)
                        }
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteHandler(product)}
                      >
                        delete
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </>
      )}
    </Grid>
  );
}

export default DesignListScreens;
