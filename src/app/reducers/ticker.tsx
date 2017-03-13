import { ITicker } from '../constants/ReducerType';
import { ITickerAction } from '../constants/ActionType';

const initialState: ITicker = {
    last: 0,
    volume24H: 0,
    prevcls: 0,
};

export default function ticker(state: ITicker = initialState, action: ITickerAction): ITicker {
    switch (action.type) {
        case 'get ticker':
            return {
                last: action.payload.Last,
                volume24H: action.payload.Volume24H,
                prevcls: action.payload.PrevCls,
            };
        case 'get quote response':
             return {
                 last: action.payload.Last,
                 volume24H: action.payload.Volume24H,
                 prevcls: action.payload.PrevCls,
               };
        default:
            return state;
    }
}
