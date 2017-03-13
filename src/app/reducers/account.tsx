import { IAccount } from '../constants/ReducerType';
import { IAccountAction } from '../constants/ActionType';

const initialState: IAccount = {
    content: {
        id: '',
    },
};

export default function account(state: IAccount = initialState, action: IAccountAction): IAccount {
    switch (action.type) {
        case 'get account info success':
            spotAccountKey = action.payload.account_key;
            spotAccountID = action.payload.id;
            return {
                content: action.payload,
            };
        case 'get account info failed':
            console.error('get account info failed');
            return state;
        case 'clear account info':
            return {
                content: {},
            };
        default:
            return state;
    }
}
