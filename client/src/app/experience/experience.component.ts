import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ExperienceState } from '../store/states';
import { GetExperience } from '../store/actions';
import { experienceSelectors } from '../store/selectors';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { AppError, CareerAPI } from '../models';
import { ErrorService } from '../services/app.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor(private store: Store<ExperienceState>, private errorService: ErrorService) { }

  destroyed$ = new Subject();
  loading: boolean = true;
  experience: CareerAPI | null;

  ngOnInit() {
    this.store.dispatch(new GetExperience);
    combineLatest(
      this.store.select(experienceSelectors.selectLoading),
      this.store.select(experienceSelectors.selectError),
      this.store.select(experienceSelectors.selectExperience)
    ).pipe(
      takeUntil(this.destroyed$),
      map(([loading, error, experience]) => {
        return { loading, error, experience };
      })
    ).subscribe(val => {
      this.loading = val.loading;
      this.experience = val.experience;
      
      if (val.error) {
        this.errorService.showError(val.error, () =>
          this.store.dispatch(new GetExperience())
        );
      }
    });
  }
}
