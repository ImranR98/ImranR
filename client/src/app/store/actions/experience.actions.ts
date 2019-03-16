import { Action } from '@ngrx/store'
import { CareerAPI } from '../../models'
import { AppError } from 'src/app/models';

export enum EExperienceActions {
    GET_EXPERIENCE = '[Experience] Get Experience',
    GET_EXPERIENCE_SUCCESS = '[Experience] Get Experience Success',
    GET_EXPERIENCE_FAIL = '[Experience] Get Experience Fail',
}

export class GetExperience implements Action {
    readonly type = EExperienceActions.GET_EXPERIENCE

    constructor() { }
}

export class GetExperienceSuccess implements Action {
    readonly type = EExperienceActions.GET_EXPERIENCE_SUCCESS

    constructor(public payload: CareerAPI) { }
}

export class GetExperienceFail implements Action {
    readonly type = EExperienceActions.GET_EXPERIENCE_FAIL

    constructor(public payload: any) { }
}

export type ExperienceActions =
    | GetExperience
    | GetExperienceSuccess
    | GetExperienceFail
    ;