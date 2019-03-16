import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, take } from 'rxjs/operators';
import { AppService } from 'src/app/services/app.service';
import { EExperienceActions, GetExperience, GetExperienceSuccess, GetExperienceFail } from 'src/app/store/actions';
import { of as observableOf } from 'rxjs';
import { AppLoadError, AppError } from 'src/app/models';

@Injectable()
export class ExperienceEffects {

    @Effect()
    getExperience$ = this.actions$
        .pipe(
            ofType(EExperienceActions.GET_EXPERIENCE),
            switchMap((action: GetExperience) =>
                this.services.getExperience().pipe(
                    map(getExperienceResponse => new GetExperienceSuccess(getExperienceResponse)),
                    catchError((getExperienceError) => {
                        return observableOf(new GetExperienceFail(getExperienceError));
                    })
                )
            ),
        );

    constructor(
        private actions$: Actions,
        private services: AppService
    ) { }
}