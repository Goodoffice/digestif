@CompositeTextField = React.createClass

  getInitialState: ->
    { field_count: 1 }

  addTextField: ->
    @setState(field_count: @state.field_count + 1)
    return false

  renderTextFields: ->
    name        = @props.name
    handler     = @handleKeyDown

    _.map _.range(0, @state.field_count), (i) =>
      placeholder = if i == 0 then @props.initialPlaceholder else @props.placeholder
      `<input onKeyDown={handler} key={i} type='text' placeholder={placeholder} name={name} />`

  element: ->
    ReactDOM.findDOMNode(this)

  mapChildren: (iteratee) ->
    _.map @element().childNodes, iteratee

  getValues: ->
    @mapChildren (input) -> input.value

  isFull: ->
    _.every @getValues()

  handleKeyDown: (event) ->
    if @isFull()
      @addTextField()

  render: ->
    `<div className='composite-text-field'>
      {this.renderTextFields()}
    </div>`
