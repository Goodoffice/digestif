import Enum from "es6-enum"

const ApiActionTypesEnum = () => Enum('REQUEST', 'SUCCESS', 'FAILURE')

export const FETCH_JOBS = ApiActionTypesEnum();

