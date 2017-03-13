
import { IPlaceOrderResponseAction } from '../constants/ActionType';
import { IPlaceOrderResponse } from '../constants/ReducerType';

const initialState = {
  tipSuccess: false,
  tipFailed: false,
  backSuccess: false,
  backFailed: false,
  error: false,
  failed: {
    insufficient: false,
    incorrectQuantity: false,
    otherError: false,
  },
};

export default function placeOrderResponse(state: IPlaceOrderResponse = initialState, action: IPlaceOrderResponseAction): IPlaceOrderResponse {
  switch (action.type) {
    case 'place order response':
      if (action.payload.RC === '0') {
        state.tipSuccess = true;
        state.backSuccess = true;
      }else {
        console.log('OrdRejReason:', action.payload);
        switch (action.payload.OrdRejReason) {
          case 110:
           state.failed = {
             insufficient: true,
           };
           console.log('state:', state);
           break;
          case 13:
           state.failed = {
             incorrectQuantity: true,
           };
           break;
          default:
           state.failed = {
             otherError : true,
           };
           break;
        }
        state.tipFailed = true;
        state.backFailed = true;
      }
      return state;
    case 'reset feedback tips':
      state.tipSuccess = false;
      state.tipFailed = false;
      return state;
    case 'reset feedback back':
      state.backSuccess = false;
      state.backFailed = false;
      state.failed.insufficient = false;
      state.failed.incorrectQuantity = false;
      state.failed.otherError = false;
      return state;
    case 'set error to true':
      state.error = true;
      return state;
    case 'set error to false':
      state.error = false;
      return state;
    default:
      return state;
  }
}
