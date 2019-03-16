import { ExperienceState } from '../states';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppError, CareerAPI } from '../../models';

export const getLoading = (state: ExperienceState): boolean =>
    state.loading;

export const getExperience = (state: ExperienceState): CareerAPI | null =>
    state.experience;

export const getError = (state: ExperienceState): AppError | null =>
    state.error;

export const selectExperienceState = createFeatureSelector<ExperienceState>('experience');

export const selectLoading = createSelector(
    selectExperienceState,
    getLoading
);

export const selectExperience = createSelector(
    selectExperienceState,
    getExperience
);

export const selectError = createSelector(
    selectExperienceState,
    getError
);