import {
  SCHEDULE_LOAD_FAILURE,
  SCHEDULE_LOAD_SUCCESS,
  SCHEDULE_LOAD_INITIATION,
  CLEAR_SCHEDULE_ERRORS,
  SELECT_SCHEDULE_ITEM
} from '../constants/schedule';

const schedule = (state = {
  isLoading: false,
  items: [],
  errors: [],
  departureId: null,
  arrivalId: null,
  selectedItem: null
}, action) => {
  switch (action.type) {
    case SCHEDULE_LOAD_INITIATION:
      return Object.assign({}, state, {
        isLoading: true,
        departureId: action.departureId,
        arrivalId: action.arrivalId
      });
    case SCHEDULE_LOAD_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        items: action.items
      });
    case SCHEDULE_LOAD_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        errors: [
          ...state.errors,
          action.error
        ]
      });
    case CLEAR_SCHEDULE_ERRORS:
      return Object.assign({}, state, {
        errors: []
      });
    case SELECT_SCHEDULE_ITEM:
      return Object.assign({}, state, {
        selectedItem: action.item
      });
    default:
      return state;
  }
};

export default schedule;
