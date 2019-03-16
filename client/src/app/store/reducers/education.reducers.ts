import { EducationState, initialEducationState } from '../states'
import { EducationActions, EEducationActions } from '../actions'
import { ErrorTypes, ErrorActions, ErrorMessages } from 'src/app/models';

export function educationReducers(state: EducationState = initialEducationState, action: EducationActions): EducationState {

    switch (action.type) {
        case EEducationActions.GET_EDUCATION:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case EEducationActions.GET_EDUCATION_SUCCESS:
            return {
                ...state,
                education: action.payload,
                loading: false,
                error: null,
            };

        case EEducationActions.GET_EDUCATION_FAIL:
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