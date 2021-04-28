import {
  CALENDAR_LOADING,
  ADD_CALENDAR,
  EDIT_CALENDAR,
  GET_CALENDAR,
  IS_MODIFIED_CALENDAR,
} from '../actions/types';

const initialState = {
  calendar: {},
  loading: false,
  search: [],
  searching: false,
  isModified: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CALENDAR_LOADING:
      return {
        ...state,
        loading: true
      };
      case IS_MODIFIED_CALENDAR:
        return {
          ...state,
          isModified:false
        };
    case GET_CALENDAR:
      return {
        ...state,
        calendar: action.payload,
        loading: false
      };
  
    case ADD_CALENDAR:
      return {
        ...state,
        calendar: action.payload
      };
    case EDIT_CALENDAR:
      return {
        ...state,
        isModified: true,
        calendar: action.payload
      };
    default:
      return state;
  }
}
