import Axios from "../axios";
import {
  DESIGN_CREATE_FAIL,
  DESIGN_CREATE_REQUEST,
  DESIGN_CREATE_SUCCESS,
  DESIGN_DELETE_FAIL,
  DESIGN_DELETE_REQUEST,
  DESIGN_DELETE_SUCCESS,
  DESIGN_DETAILS_FAIL,
  DESIGN_DETAILS_REQUEST,
  DESIGN_DETAILS_SUCCESS,
  DESIGN_LIST_FAIL,
  DESIGN_LIST_REQUEST,
  DESIGN_LIST_SUCCESS,
  DESIGN_UPDATE_FAIL,
  DESIGN_UPDATE_REQUEST,
  DESIGN_UPDATE_SUCCESS
} from "../constants/designConstants";

export const listDesigns = () => async (dispatch) => {
  dispatch({
    type: DESIGN_LIST_REQUEST
  });
  try {
    const { data } = await Axios.get("/designs");
    dispatch({ type: DESIGN_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DESIGN_LIST_FAIL, payload: error.message });
  }
};

export const detailsDesign = (id) => async (dispatch) => {
  dispatch({ type: DESIGN_DETAILS_REQUEST, payload: id });
  try {
    const { data } = await Axios.get(`/designs/${id}`);
    dispatch({ type: DESIGN_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DESIGN_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const createDesign = () => async (dispatch, getState) => {
  dispatch({ type: DESIGN_CREATE_REQUEST });
  const {
    userSignin: { userInfo }
  } = getState();

  try {
    const { data } = await Axios.post(
      "/designs/new",
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` }
      }
    );
    dispatch({
      type: DESIGN_CREATE_SUCCESS,
      payload: data.design
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: DESIGN_CREATE_FAIL, payload: message });
  }
};

export const updateDesign = (design) => async (dispatch, getState) => {
  dispatch({ type: DESIGN_UPDATE_REQUEST, payload: design });
  const {
    userSignin: { userInfo }
  } = getState();

  try {
    const { data } = await Axios.put(`/designs/update/${design._id}`, design, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    });
    dispatch({ type: DESIGN_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({ type: DESIGN_UPDATE_FAIL, error: message });
  }
};

export const deleteDesign = (id) => async (dispatch, getState) => {
  dispatch({ type: DESIGN_DELETE_REQUEST, payload: id });
  const {
    userSignin: { userInfo }
  } = getState();

  try {
    const { data } = Axios.delete(`designs/${id}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` }
    });
    dispatch({ type: DESIGN_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({ type: DESIGN_DELETE_FAIL, payload: message });
  }
};
