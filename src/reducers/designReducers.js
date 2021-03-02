import {
  DESIGN_CREATE_FAIL,
  DESIGN_CREATE_REQUEST,
  DESIGN_CREATE_RESET,
  DESIGN_CREATE_SUCCESS,
  DESIGN_DELETE_FAIL,
  DESIGN_DELETE_REQUEST,
  DESIGN_DELETE_RESET,
  DESIGN_DELETE_SUCCESS,
  DESIGN_DETAILS_FAIL,
  DESIGN_DETAILS_REQUEST,
  DESIGN_DETAILS_SUCCESS,
  DESIGN_LIST_FAIL,
  DESIGN_LIST_REQUEST,
  DESIGN_LIST_SUCCESS,
  DESIGN_UPDATE_FAIL,
  DESIGN_UPDATE_REQUEST,
  DESIGN_UPDATE_RESET,
  DESIGN_UPDATE_SUCCESS
} from "../constants/designConstants";

export const designListReducer = (
  state = { loading: true, designs: [] },
  action
) => {
  switch (action.type) {
    case DESIGN_LIST_REQUEST:
      return { loading: true };
    case DESIGN_LIST_SUCCESS:
      return { loading: false, designs: action.payload };
    case DESIGN_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const designDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case DESIGN_DETAILS_REQUEST:
      return { loading: true };
    case DESIGN_DETAILS_SUCCESS:
      return { loading: false, design: action.payload };
    case DESIGN_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const designCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case DESIGN_CREATE_REQUEST:
      return { loading: true };
    case DESIGN_CREATE_SUCCESS:
      return { loading: false, success: true, design: action.payload };
    case DESIGN_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case DESIGN_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const designUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case DESIGN_UPDATE_REQUEST:
      return { loading: true };
    case DESIGN_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case DESIGN_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case DESIGN_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const designDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DESIGN_DELETE_REQUEST:
      return { loading: true };
    case DESIGN_DELETE_SUCCESS:
      return { loading: false, success: true };
    case DESIGN_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case DESIGN_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
