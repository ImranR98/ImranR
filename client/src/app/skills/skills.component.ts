import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { SkillsState } from '../store/states';
import { GetSkills } from '../store/actions';
import { skillsSelectors } from '../store/selectors';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { SkillsAPI } from '../models';
import { ErrorService } from '../services/app.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, OnDestroy {

  constructor(private store: Store<SkillsState>, private errorService: ErrorService) { }

  destroyed$ = new Subject();
  loading: boolean = true;
  skills: SkillsAPI | null;

  ngOnInit() {
    this.store.dispatch(new GetSkills);
    combineLatest(
      this.store.select(skillsSelectors.selectLoading),
      this.store.select(skillsSelectors.selectError),
      this.store.select(skillsSelectors.selectSkills)
    ).pipe(
      takeUntil(this.destroyed$),
      map(([loading, error, skills]) => {
        return { loading, error, skills };
      })
    ).subscribe(val => {
      this.loading = val.loading;
      this.skills = val.skills;

      if (val.error && !val.skills && !val.loading) {
        this.errorService.showError(val.error, () =>
          this.store.dispatch(new GetSkills())
        );
      }
    });
  }

  ngOnDestroy() {
    this.destroyed$.complete();
    this.destroyed$.unsubscribe();
  }
}
