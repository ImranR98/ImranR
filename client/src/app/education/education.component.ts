import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { EducationState } from '../store/states';
import { GetEducation } from '../store/actions';
import { educationSelectors } from '../store/selectors';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { CareerAPI } from '../models';
import { ErrorService } from '../services/app.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit, OnDestroy {

  constructor(private store: Store<EducationState>, private errorService: ErrorService) { }

  destroyed$ = new Subject();
  loading: boolean = true;
  education: CareerAPI | null = null;

  ngOnInit() {
    this.store.dispatch(new GetEducation);
    combineLatest(
      this.store.select(educationSelectors.selectLoading),
      this.store.select(educationSelectors.selectError),
      this.store.select(educationSelectors.selectEducation)
    ).pipe(
      takeUntil(this.destroyed$),
      map(([loading, error, education]) => {
        return { loading, error, education };
      })
    ).subscribe(val => {
      this.loading = val.loading;
      this.education = val.education;

      if (val.error && !val.education && !val.loading) {
        this.errorService.showError(val.error, () =>
          this.store.dispatch(new GetEducation())
        );
      }
    });
  }

  ngOnDestroy() {
    this.destroyed$.complete();
    this.destroyed$.unsubscribe();
  }
}
