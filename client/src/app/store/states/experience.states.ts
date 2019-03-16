import { AppError, CareerAPI } from '../../models';

//State of this Component in the Store
export interface ExperienceState {
  loading: boolean;
  experience: CareerAPI | null;
  error: AppError | null;
}

export const initialExperienceState: ExperienceState = {
  loading: false,
  experience: null,
  error: null
}