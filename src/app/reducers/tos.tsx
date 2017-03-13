import { ITos } from '../constants/ReducerType';
import { ITosAction } from '../constants/ActionType';

const initialState: ITos = {
    content: '',
};

export default function tos(state: ITos = initialState, action: ITosAction): ITos {
    switch (action.type) {
        case 'get tos success':
            return {
                content: action.payload,
            };
        case 'get tos failed':
            return state;
        default:
            return state;
    }
}


