import { Action } from '@ngrx/store'
import { CareerAPI } from '../../models'
import { AppError } from 'src/app/models';

export enum EEducationActions {
    GET_EDUCATION = '[Education] Get Education',
    GET_EDUCATION_SUCCESS = '[Education] Get Education Success',
    GET_EDUCATION_FAIL = '[Education] Get Education Fail',
}

export class GetEducation implements Action {
    readonly type = EEducationActions.GET_EDUCATION

    constructor() { }
}

export class GetEducationSuccess implements Action {
    readonly type = EEducationActions.GET_EDUCATION_SUCCESS

    constructor(public payload: CareerAPI) { }
}

export class GetEducationFail implements Action {
    readonly type = EEducationActions.GET_EDUCATION_FAIL

    constructor(public payload: any) { }
}

export type EducationActions =
    | GetEducation
    | GetEducationSuccess
    | GetEducationFail
    ;