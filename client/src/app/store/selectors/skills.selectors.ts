import { SkillsState } from '../states';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppError, SkillsAPI } from '../../models';

export const getLoading = (state: SkillsState): boolean =>
    state.loading;

export const getSkills = (state: SkillsState): SkillsAPI | null =>
    state.skills;

export const getError = (state: SkillsState): AppError | null =>
    state.error;

export const selectSkillsState = createFeatureSelector<SkillsState>('skills');

export const selectLoading = createSelector(
    selectSkillsState,
    getLoading
);

export const selectSkills = createSelector(
    selectSkillsState,
    getSkills
);

export const selectError = createSelector(
    selectSkillsState,
    getError
);