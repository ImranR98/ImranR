import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { experienceReducers } from './experience.reducers';
import { educationReducers } from './education.reducers';
import { skillsReducers } from './skills.reducers';
import { contactReducers } from './contact.reducers';

import {
  ExperienceState,
  EducationState,
  SkillsState,
  ContactState
} from '../states';

export interface AppState {
  experience: ExperienceState;
  education: EducationState;
  skills: SkillsState;
  contact: ContactState;
}

export const reducers: ActionReducerMap<AppState> = {
  experience: experienceReducers,
  education: educationReducers,
  skills: skillsReducers,
  contact: contactReducers
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
