import { AppError, CareerAPI } from '../../models';

//State of this Component in the Store
export interface EducationState {
  loading: boolean;
  education: CareerAPI | null;
  error: AppError | null;
}

export const initialEducationState: EducationState = {
  loading: false,
  education: null,
  error: null
}