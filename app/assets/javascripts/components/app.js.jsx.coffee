@App = React.createClass

  componentWillMount: ->
    SourceListStore.listen(@onChange)

  componentDidUpdate: ->
    @

  componentWillUnmount: ->
    @

  onChange: (state) ->
    @setState(state)

  getInitialState: ->
    {
      errors: []
    }

  getErrorMessage: ->
    if @state.errors?.name
      "Oops! There was a problem."

  render: ->
    `<div className='app'>
      <h1>RSS to your inbox every&nbsp;morning.</h1>
      <h2><span className="brand">Digestif</span> sends you an email digest of your RSS&nbsp;feeds.</h2>

      <CreateDigestForm onSubmit={this.handleSubmitForm} />

      <div className='errors'>
        {this.getErrorMessage()}
      </div>

      <div className='about'>
        Made in Seattle by <a href="http://www.guilded.co">Guilded</a>
      </div>
     </div>`

  handleSubmitForm: (errors) ->
    console.log(errors)
