import {ADD_TO_LIST_CHOOSE} from '../constants';

export function getPageList() {
  return async (dispatch: (arg0: {type: string; payload: any}) => any) => {
    try {
      const apiReq = await fetch(
        'http://dummy.restapiexample.com/api/v1/employees',
        {
          method: 'GET',
        },
      );
      console.log(apiReq);
      return apiReq || [];
    } catch (error) {
      console.error(error);
    }
  };
}
export function setListChoose(list: any) {
  console.log('item', list);
  return {
    type: ADD_TO_LIST_CHOOSE,
    payload: list,
  };
}
