import { Action } from '@ngrx/store'
import { ContactAPI } from '../../models'
import { AppError } from 'src/app/models';

export enum EContactActions {
    GET_CONTACT = '[Contact] Get Contact',
    GET_CONTACT_SUCCESS = '[Contact] Get Contact Success',
    GET_CONTACT_FAIL = '[Contact] Get Contact Fail',
}

export class GetContact implements Action {
    readonly type = EContactActions.GET_CONTACT

    constructor() { }
}

export class GetContactSuccess implements Action {
    readonly type = EContactActions.GET_CONTACT_SUCCESS

    constructor(public payload: ContactAPI) { }
}

export class GetContactFail implements Action {
    readonly type = EContactActions.GET_CONTACT_FAIL

    constructor(public payload: any) { }
}

export type ContactActions =
    | GetContact
    | GetContactSuccess
    | GetContactFail
    ;