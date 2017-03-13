import { ITerms } from '../constants/ReducerType';
import { ITermsAction } from '../constants/ActionType';

const initialState: ITerms = {
    accept: false,
    acceptFailed: false,
};


export default function terms(state: ITerms = initialState, action: ITermsAction): ITerms {
    switch (action.type) {
        case 'get spot balance success':
            return {
                    accept: action.payload.spotusd_tos_accepted,
                    acceptFailed: state.acceptFailed,
            };
        case 'get spot balance failed':
            return state;
        case 'agree tos success':
            return {
                    accept: true,
                    acceptFailed: state.acceptFailed,
            };
        case 'agree tos failed':
            return {
                    accept: state.accept,
                    acceptFailed: true,
            };
        default:
            return state;
    }
}
