import merge from 'lodash/merge';
import { RECEIVE_BILLS, RECEIVE_BILL } from '../actions/bill_actions';
import { RECEIVE_CUSTOMER } from '../actions/customer_actions';

const billReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CUSTOMER:
      return action.payload.bills;
    case RECEIVE_BILLS:
      return action.bills;
    case RECEIVE_BILL:
      const newBill = {[action.payload.bill.id]: action.payload.bill};
      return merge({}, state, newBill);
    default:
      return state;
  }
};

export default billReducer;
