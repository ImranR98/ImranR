import { AppError, ContactAPI } from '../../models';

//State of this Component in the Store
export interface ContactState {
  loading: boolean;
  contact: ContactAPI | null;
  error: AppError | null;
}

export const initialContactState: ContactState = {
  loading: false,
  contact: null,
  error: null
}