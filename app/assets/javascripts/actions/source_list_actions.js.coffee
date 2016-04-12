class SourceListActions
  constructor: ->
    @generateActions(
      'createSourceList'
    )

window.SourceListActions = alt.createActions(SourceListActions)


