class SourceListStore
  @displayName: 'SourceListStore'

  constructor: ->
    @bindListeners
      onCreateSourceList: SourceListActions.CREATE_SOURCE_LIST
      onCreateSourceListComplete: SourceListActions.CREATE_SOURCE_LIST_COMPLETE

  onCreateSourceList: ->

  onCreateSourceListComplete: (response) ->
    if response.errors
      @errors = response.errors
      @emitChange()

window.SourceListStore = alt.createStore(SourceListStore, 'SourceListStore')

