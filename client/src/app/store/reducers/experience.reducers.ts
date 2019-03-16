import { ExperienceState, initialExperienceState } from '../states'
import { ExperienceActions, EExperienceActions } from '../actions'
import { AppLoadError, ErrorTypes, ErrorActions, ErrorMessages } from 'src/app/models';

export function experienceReducers(state: ExperienceState = initialExperienceState, action: ExperienceActions): ExperienceState {

    switch (action.type) {
        case EExperienceActions.GET_EXPERIENCE:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case EExperienceActions.GET_EXPERIENCE_SUCCESS:
            return {
                ...state,
                experience: action.payload,
                loading: false,
                error: null,
            };

        case EExperienceActions.GET_EXPERIENCE_FAIL:
            return {
                ...state,
                loading: false,
                error: {
                    type: ErrorTypes.LOAD,
                    action: ErrorActions.RETRY,
                    message: ErrorMessages.LOAD
                },
            };

        default:
            return state;
    }
}