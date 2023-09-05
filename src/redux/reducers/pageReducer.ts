import {ADD_TO_LIST_CHOOSE} from './../constants/index';

const initialState = {
  listChoose: [],
};

const pageReducer = (
  state = initialState,
  action: {type: any; payload: any},
) => {
  switch (action.type) {
    case ADD_TO_LIST_CHOOSE:
      console.log('payload', action.payload);
      return {
        ...state,
        listChoose: [...action.payload],
        refreshing: false,
      };
    default:
      return state;
  }
};
export default pageReducer;
