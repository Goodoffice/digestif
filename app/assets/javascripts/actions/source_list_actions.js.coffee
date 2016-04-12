class SourceListActions
  constructor: ->

  createSourceList: (data) ->
    (dispatch) =>
      dispatch()
      request = new XMLHttpRequest()
      request.open 'POST', '/api/source_lists', true
      request.setRequestHeader 'Content-Type', 'application/json'
      request.addEventListener('load', (event) => @createSourceListComplete(event, request))
      request.send JSON.stringify(source_list: data)

  createSourceListComplete: (event, request) ->
    return JSON.parse(request.responseText)

window.SourceListActions = alt.createActions(SourceListActions)


