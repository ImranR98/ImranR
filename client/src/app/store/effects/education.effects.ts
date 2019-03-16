import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, take } from 'rxjs/operators';
import { AppService } from 'src/app/services/app.service';
import { EEducationActions, GetEducation, GetEducationSuccess, GetEducationFail } from 'src/app/store/actions';
import { of as observableOf } from 'rxjs';
import { AppLoadError } from 'src/app/models';

@Injectable()
export class EducationEffects {

    @Effect()
    getEducation$ = this.actions$
        .pipe(
            ofType(EEducationActions.GET_EDUCATION),
            switchMap((action: GetEducation) =>
                this.services.getEducation().pipe(
                    map(getEducationResponse => new GetEducationSuccess(getEducationResponse)),
                    catchError((getEducationError) => {
                            return observableOf(new GetEducationFail(getEducationError));
                    })
                )
            ),
        );

    constructor(
        private actions$: Actions,
        private services: AppService
    ) { }
}