import { SkillsState, initialSkillsState } from '../states'
import { SkillsActions, ESkillsActions } from '../actions'
import { ErrorTypes, ErrorActions, ErrorMessages } from 'src/app/models';

export function skillsReducers(state: SkillsState = initialSkillsState, action: SkillsActions): SkillsState {

    switch (action.type) {
        case ESkillsActions.GET_SKILLS:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case ESkillsActions.GET_SKILLS_SUCCESS:
            return {
                ...state,
                skills: action.payload,
                loading: false,
                error: null,
            };

        case ESkillsActions.GET_SKILLS_FAIL:
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