import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, take } from 'rxjs/operators';
import { AppService } from 'src/app/services/app.service';
import { ESkillsActions, GetSkills, GetSkillsSuccess, GetSkillsFail } from 'src/app/store/actions';
import { of as observableOf } from 'rxjs';
import { AppLoadError } from 'src/app/models';

@Injectable()
export class SkillsEffects {

    @Effect()
    getSkills$ = this.actions$
        .pipe(
            ofType(ESkillsActions.GET_SKILLS),
            switchMap((action: GetSkills) =>
                this.services.getSkills().pipe(
                    map(getSkillsResponse => new GetSkillsSuccess(getSkillsResponse)),
                    catchError((getSkillsError) => {
                            return observableOf(new GetSkillsFail(getSkillsError));
                    })
                )
            ),
        );

    constructor(
        private actions$: Actions,
        private services: AppService
    ) { }
}