import { ContactState, initialContactState } from '../states'
import { ContactActions, EContactActions } from '../actions'
import { ErrorTypes, ErrorActions, ErrorMessages } from 'src/app/models';

export function contactReducers(state: ContactState = initialContactState, action: ContactActions): ContactState {

    switch (action.type) {
        case EContactActions.GET_CONTACT:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case EContactActions.GET_CONTACT_SUCCESS:
            return {
                ...state,
                contact: action.payload,
                loading: false,
                error: null,
            };

        case EContactActions.GET_CONTACT_FAIL:
            return {
                ...state,
                loading: false,
                error: {
                    type: ErrorTypes.LOAD,
                    action: ErrorActions.RETRY,
                    message: ErrorMessages.LOAD
                }
            };

        default:
            return state;
    }
}