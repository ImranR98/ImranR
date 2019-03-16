import { ContactState } from '../states';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppError, ContactAPI } from '../../models';

export const getLoading = (state: ContactState): boolean =>
    state.loading;

export const getContact = (state: ContactState): ContactAPI | null =>
    state.contact;

export const getError = (state: ContactState): AppError | null =>
    state.error;

export const selectContactState = createFeatureSelector<ContactState>('contact');

export const selectLoading = createSelector(
    selectContactState,
    getLoading
);

export const selectContact = createSelector(
    selectContactState,
    getContact
);

export const selectError = createSelector(
    selectContactState,
    getError
);