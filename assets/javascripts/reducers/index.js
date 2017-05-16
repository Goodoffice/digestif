import { combineReducers } from 'redux-immutable'

import jobs from './jobs'
import sources from './sources'
import savedSearches from './savedSearches'
import ui from './ui'

export default combineReducers({
    jobs,
    sources,
    savedSearches,
    ui
})

