export enum ErrorTypes {
    LOAD = 'load',
    SAVE = 'save',
    UNKNOWN = 'unknown'
}

export enum ErrorActions {
    RETRY = 'Retry',
    OKAY = 'Okay'
}

export enum ErrorMessages {
    LOAD = 'Loading Error',
    SAVE = 'Save Error',
    UNKNOWN = 'Unknown Error'
}

export interface AppError {
    type: string;
    action: string;
    message: string;
}

export class AppLoadError implements AppError{
    constructor(
        public type: string = ErrorTypes.UNKNOWN,
        public action: string = ErrorActions.OKAY,
        public message: string = ErrorMessages.UNKNOWN
    ) { }
}

export class AppSaveError implements AppError{
    constructor(
        public type: string = ErrorTypes.UNKNOWN,
        public action: string = ErrorActions.OKAY,
        public message: string = ErrorMessages.UNKNOWN
    ) { }
}

export class AppUnknownError implements AppError{
    constructor(
        public type: string = ErrorTypes.UNKNOWN,
        public action: string = ErrorActions.OKAY,
        public message: string = ErrorMessages.UNKNOWN
    ) { }
}