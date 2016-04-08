@CompositeTextField = React.createClass

  getInitialState: ->
    { field_count: 1 }

  addTextField: ->
    @setState(field_count: @state.field_count + 1)
    return false

  renderTextFields: ->
    name        = @props.name
    placeholder = @props.placeholder

    _.map _.range(0, @state.field_count), (i) ->
      `<input key={i} type='text' placeholder={placeholder} name={name} />`

  render: ->
    `<div className='composite-text-field'>
      {this.renderTextFields()}

      <a href='#' onClick={this.addTextField} >Add Another</a>
    </div>`
