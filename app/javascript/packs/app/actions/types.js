import Enum from "es6-enum"

const ApiActionTypesEnum = () => Enum('REQUEST', 'SUCCESS', 'FAILURE')

export const FETCH_JOBS = ApiActionTypesEnum();
export const FETCH_SOURCES = ApiActionTypesEnum();
export const CREATE_SOURCE = ApiActionTypesEnum();
export const FETCH_SAVED_SEARCHES = ApiActionTypesEnum();
export const CREATE_SAVED_SEARCH = ApiActionTypesEnum();
export const SIGN_OUT = ApiActionTypesEnum();

export const OPEN_ADD_SAVED_SEARCH_DIALOG = Symbol('OPEN_ADD_SAVED_SEARCH_DIALOG');
export const CLOSE_ADD_SAVED_SEARCH_DIALOG = Symbol('CLOSE_ADD_SAVED_SEARCH_DIALOG');

export const MARK_READ = Symbol('MARK_READ');

export const STAR = ApiActionTypesEnum();
export const UNSTAR = ApiActionTypesEnum();

