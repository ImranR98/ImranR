import { Action } from '@ngrx/store'
import { SkillsAPI, AppError } from '../../models'

export enum ESkillsActions {
    GET_SKILLS = '[Skills] Get Skills',
    GET_SKILLS_SUCCESS = '[Skills] Get Skills Success',
    GET_SKILLS_FAIL = '[Skills] Get Skills Fail',
}

export class GetSkills implements Action {
    readonly type = ESkillsActions.GET_SKILLS

    constructor() { }
}

export class GetSkillsSuccess implements Action {
    readonly type = ESkillsActions.GET_SKILLS_SUCCESS

    constructor(public payload: SkillsAPI) { }
}

export class GetSkillsFail implements Action {
    readonly type = ESkillsActions.GET_SKILLS_FAIL

    constructor(public payload: any) { }
}

export type SkillsActions =
    | GetSkills
    | GetSkillsSuccess
    | GetSkillsFail
    ;