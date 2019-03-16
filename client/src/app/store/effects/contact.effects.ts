import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, take } from 'rxjs/operators';
import { AppService } from 'src/app/services/app.service';
import { EContactActions, GetContact, GetContactSuccess, GetContactFail } from 'src/app/store/actions';
import { of as observableOf } from 'rxjs';
import { AppLoadError } from 'src/app/models';

@Injectable()
export class ContactEffects {

    @Effect()
    getContact$ = this.actions$
        .pipe(
            ofType(EContactActions.GET_CONTACT),
            switchMap((action: GetContact) =>
                this.services.getContact().pipe(
                    map(getContactResponse => new GetContactSuccess(getContactResponse)),
                    catchError((getContactError) => {
                            return observableOf(new GetContactFail(getContactError));
                    })
                )
            ),
        );

    constructor(
        private actions$: Actions,
        private services: AppService
    ) { }
}