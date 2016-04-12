class SourceListStore
  @displayName: 'SourceListStore'

  constructor: ->
    @bindActions(SourceListActions)

  onCreateSourceList: (data) ->
    request = new XMLHttpRequest()
    request.open 'POST', '/api/source_lists', true
    request.setRequestHeader 'Content-Type', 'application/json'
    request.send JSON.stringify(source_list: data)


window.SourceListStore = alt.createStore(SourceListStore, 'SourceListStore')

