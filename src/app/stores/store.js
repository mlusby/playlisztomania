import { ReduceStore }  from 'flux/utils';
import Immutable from 'immutable';
import { ActionTypes } from '../constants/constants';
import AppDispatcher from '../dispatcher/dispatcher';

class SampleStore extends ReduceStore {
    getInitialState() {
        return Immutable.Map({
            "title": "Title...",
            "text": "Text..."
        }).toJS();
    }

    reduce(state, action) {
        switch (action.type) {
        case ActionTypes.TYPE_001:
            return state;
        case ActionTypes.TYPE_002:
            return Immutable.Map(action.data).set("text", "Flux is...")
                .toJS();
        default:
            return state;
        }
    }
}

export default new SampleStore(AppDispatcher);
