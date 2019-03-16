import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContactState } from '../store/states';
import { GetContact, GetSkills } from '../store/actions';
import { contactSelectors } from '../store/selectors';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { AppError, ContactAPI } from '../models';
import { ErrorService } from '../services/app.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private store: Store<ContactState>, private errorService: ErrorService) { }

  destroyed$ = new Subject();
  loading: boolean = true;
  contact: ContactAPI | null;

  ngOnInit() {
    this.store.dispatch(new GetContact);
    combineLatest(
      this.store.select(contactSelectors.selectLoading),
      this.store.select(contactSelectors.selectError),
      this.store.select(contactSelectors.selectContact)
    ).pipe(
      takeUntil(this.destroyed$),
      map(([loading, error, contact]) => {
        return { loading, error, contact };
      })
    ).subscribe(val => {
      this.loading = val.loading;
      this.contact = val.contact;

      if (val.error) {
        this.errorService.showError(val.error, () =>
          this.store.dispatch(new GetContact())
        );
      }
    });
  }
}
