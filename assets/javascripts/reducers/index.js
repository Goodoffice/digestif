import { combineReducers } from 'redux-immutable'

import jobs from './jobs'
import sources from './sources'

export default combineReducers({
    jobs,
    sources
})

