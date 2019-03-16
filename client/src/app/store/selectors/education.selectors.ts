import { EducationState } from '../states';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppError, CareerAPI } from '../../models';

export const getLoading = (state: EducationState): boolean =>
    state.loading;

export const getEducation = (state: EducationState): CareerAPI | null =>
    state.education;

export const getError = (state: EducationState): AppError | null =>
    state.error;

export const selectEducationState = createFeatureSelector<EducationState>('education');

export const selectLoading = createSelector(
    selectEducationState,
    getLoading
);

export const selectEducation = createSelector(
    selectEducationState,
    getEducation
);

export const selectError = createSelector(
    selectEducationState,
    getError
);