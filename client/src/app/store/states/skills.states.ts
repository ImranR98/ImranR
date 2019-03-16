import { AppError, SkillsAPI } from '../../models';

//State of this Component in the Store
export interface SkillsState {
  loading: boolean;
  skills: SkillsAPI | null;
  error: AppError | null;
}

export const initialSkillsState: SkillsState = {
  loading: false,
  skills: null,
  error: null
}