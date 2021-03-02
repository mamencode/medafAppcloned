import Axios from "../axios";
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_PAY_REQUEST,
  ORDER_PAY_FAIL,
  ORDER_PAY_SUCCESS,
  ORDER_MINE_LIST_REQUEST,
  ORDER_MINE_LIST_FAIL,
  ORDER_MINE_LIST_SUCCESS,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_DELETE_REQUEST,
  ORDER_DELETE_SUCCESS,
  ORDER_DELETE_FAIL,
  ORDER_DELIVER_REQUEST,
  ORDER_DELIVER_SUCCESS,
  ORDER_DELIVER_FAIL,
  ORDER_UPDATE_REQUEST,
  ORDER_UPDATE_SUCCESS,
  ORDER_UPDATE_FAIL,
  ORDER_UPDATE_RESET
} from "../constants/orderConstants";
import { CART_EMPTY } from "../constants/cartConstants";
export const createOrder = (order) => async (dispatch, getState) => {
  dispatch({ type: ORDER_CREATE_REQUEST, payload: order });
  try {
    const {
      userSignin: { userInfo }
    } = getState();
    const { data } = await Axios.post("/orders/new", order, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    });
    console.log(data);

    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data.order });
    dispatch({ type: CART_EMPTY });
    localStorage.removeItem("cartItems");
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
export const updateOrder = (id, order) => async (dispatch, getState) => {
  dispatch({ type: ORDER_UPDATE_REQUEST, payload:  order });
  const {
    userSignin: { userInfo }
  } = getState();
  try {
    const { data } = await Axios.put(`/orders/${id}`, order, {
      headers: { Authorization: `Bearer ${userInfo.token}` }
    });
    dispatch({ type: ORDER_UPDATE_SUCCESS, payload: data });
    console.log(data);
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ORDER_UPDATE_FAIL, payload: message });
  }
};
export const detailsOrder = (id) => async (dispatch, getState) => {
  dispatch({ type: ORDER_DETAILS_REQUEST, payload: id });
  const {
    userSignin: { userInfo }
  } = getState();
  try {
    const { data } = await Axios.get(`/orders/${id}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` }
    });
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ORDER_DETAILS_FAIL, payload: message });
  }
};
export const paymentOrder = (order) => async (dispatch, getState) => {
  dispatch({ type: ORDER_PAY_REQUEST, payload: { order } });
  const {
    userSignin: { userInfo }
  } = getState();
  try {
    const { data } = Axios.post("/payments/cart", {
      // headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: ORDER_PAY_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ORDER_PAY_FAIL, payload: message });
  }
};

export const payOrder = (order) => async (
  dispatch,
  getState
) => {
  dispatch({ type: ORDER_PAY_REQUEST, payload: order });
  const {
    userSignin: { userInfo }
  } = getState();
  try {
    const { data } = Axios.put(`/orders/pay/${order._id}`, order, {
      headers: { Authorization: `Bearer ${userInfo.token}` }
    });
    dispatch({ type: ORDER_PAY_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ORDER_PAY_FAIL, payload: message });
  }
};
export const deliverOrder = (order) => async (dispatch, getState) => {
  dispatch({ type: ORDER_DELIVER_REQUEST, payload: order });
  const {
    userSignin: { userInfo }
  } = getState();
  try {
    const { data } = Axios.put(
      `/orders/delivery/${order._id}`,
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` }
      }
    );
    dispatch({ type: ORDER_DELIVER_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ORDER_DELIVER_FAIL, payload: message });
  }
};
export const listOrderMine = () => async (dispatch, getState) => {
  dispatch({ type: ORDER_MINE_LIST_REQUEST });
  const {
    userSignin: { userInfo }
  } = getState();
  try {
    const { data } = await Axios.get("/orders/", {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    });
    dispatch({ type: ORDER_MINE_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ORDER_MINE_LIST_FAIL, payload: message });
  }
};
export const listOrders = () => async (dispatch, getState) => {
  dispatch({ type: ORDER_LIST_REQUEST });
  const {
    userSignin: { userInfo }
  } = getState();
  try {
    const { data } = await Axios.get("/admin", {
      headers: { Authorization: `Bearer ${userInfo.token}` }
    });
    console.log(data);
    dispatch({ type: ORDER_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ORDER_LIST_FAIL, payload: message });
  }
};
export const deleteOrder = (id) => async (dispatch, getState) => {
  dispatch({ type: ORDER_DELETE_REQUEST, payload: id });
  const {
    userSignin: { userInfo }
  } = getState();
  try {
    const { data } = Axios.delete(`/orders/${id}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` }
    });
    dispatch({ type: ORDER_DELETE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ORDER_DELETE_FAIL, payload: message });
  }
};

